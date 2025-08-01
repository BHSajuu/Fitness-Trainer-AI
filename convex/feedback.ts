import { v } from "convex/values";
import { mutation, query } from "./_generated/server";


export const createFeedback = mutation({
      args:{
         rating: v.number(),
         description: v.string(),
      },
      handler: async (ctx, args)=>{
         const identify = await ctx.auth.getUserIdentity();
         if(!identify){
            throw new Error("You must be logged in to create a feedback");
         }

       const user = await ctx.db
                             .query("users")
                             .withIndex("by_clerk_id")
                             .filter((q)=> q.eq(q.field("clerkId"), identify.subject))
                             .first();
       if(!user){
            throw new Error("User not found");
         }

        // Get the active plan to extract fitness data
        const activePlan = await ctx.db
          .query("plans")
          .withIndex("by_user_id", (q) => q.eq("userId", user.clerkId))
          .filter((q) => q.eq(q.field("isActive"), true))
          .first();

        if(!activePlan){
          throw new Error("No active plan found. Please create a fitness plan first.");
        }

      
        const fitnessData = {
          fitness_goal: activePlan.userMetadata?.fitness_goal || "General Fitness",
          fitness_level: activePlan.userMetadata?.fitness_level || "" ,
          age: activePlan.userMetadata?.age || "",
          workout_days: activePlan.workoutPlan.schedule.length,
        };

         await ctx.db.insert("feedback",{
             ...args,
             ...fitnessData,
             planId: activePlan._id,
             userId: user._id,
             name: user.name,
             profilePic: identify.pictureUrl || "",
         })
      }
})

export const getFeedbacks = query({
      handler: async(ctx)=>{
         const  feedbacks =  await ctx.db
                 .query("feedback")
                 .withIndex("by_rating")
                 .order("desc")
                 .collect();
        return feedbacks;
      }
})


export const deleteFeedbackById = mutation({
  args: {
    feedbackId: v.id("feedback"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("You must be logged in to delete feedback");
    }

    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id")
      .filter((q) => q.eq(q.field("clerkId"), identity.subject))
      .first();

    if (!user) {
      throw new Error("User not found");
    }

    // Get the feedback to verify ownership
    const feedback = await ctx.db.get(args.feedbackId);
    if (!feedback) {
      throw new Error("Feedback not found");
    }

    // Check if the user owns this feedback
    if (feedback.userId !== user._id) {
      throw new Error("You can only delete your own feedback");
    }

    // Delete the feedback
    await ctx.db.delete(args.feedbackId);
  },
});


export const updateFeedbackById = mutation({
  args: {
    feedbackId: v.id("feedback"),
    rating: v.number(),
    description: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("You must be logged in to edit feedback");
    }

    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id")
      .filter((q) => q.eq(q.field("clerkId"), identity.subject))
      .first();

    if (!user) {
      throw new Error("User not found");
    }

   
    const feedback = await ctx.db.get(args.feedbackId);
    if (!feedback) {
      throw new Error("Feedback not found");
    }

   
    if (feedback.userId !== user._id) {
      throw new Error("You can only edit your own feedback");
    }

    
    await ctx.db.patch(args.feedbackId, {
      rating: args.rating,
      description: args.description,
    });
  },
});

export const getUserFeedbacks = query({
  args: {
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id")
      .filter((q) => q.eq(q.field("clerkId"), args.userId))
      .first();

    if (!user) {
      return [];
    }

    const feedbacks = await ctx.db
      .query("feedback")
      .withIndex("by_user_id")
      .filter((q) => q.eq(q.field("userId"), user._id))
      .order("desc")
      .collect();

    return feedbacks;
  },
});