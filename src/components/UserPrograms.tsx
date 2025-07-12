import React from 'react';
import { 
  Sparkles, 
  Users, 
  Clock, 
  TrendingUpIcon, 
  ArrowRightIcon,
  Star,
  Trophy,
  Target,
  Zap,
  Heart
} from "lucide-react";
import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';
import SkeletonCard from "./SkeletonCard";

const UserPrograms = () => {
  const feedbacks = useQuery(api.feedback.getFeedbacks);

  if (!feedbacks) {
    return (
      <section className="py-10 lg:py-20 relative">
        <div className="container mx-auto px-5 lg:px-14">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border mb-6">
              <div className="w-8 h-8 bg-gray-200/60 rounded animate-pulse"></div>
              <div className="h-6 w-40 bg-gray-200/60 rounded animate-pulse"></div>
            </div>
            <div className="space-y-3 max-w-3xl mx-auto">
              <div className="h-6 w-3/4 bg-gray-200/60 rounded mx-auto animate-pulse"></div>
              <div className="h-6 w-2/3 bg-gray-200/60 rounded mx-auto animate-pulse"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-16">
            {[...Array(3)].map((_, index) => (
              <SkeletonCard key={index} index={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 lg:py-20 relative">
      <div className="container mx-auto px-5 lg:px-14">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border mb-6 hover:shadow-glow transition-all duration-300 group">
            <Sparkles className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Success Stories {feedbacks.length}
            </span>
            <Trophy className="w-6 h-6 text-amber-500 group-hover:scale-110 transition-transform duration-300" />
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Real Results from Real People
          </h2>
          
          <p className="text-muted-foreground text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            Discover how our AI has helped thousands of users achieve their fitness goals with personalized programs tailored to their unique needs and preferences.
          </p>
        </div>

        {/* cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-16">
          {feedbacks.map((program, index) => (
            <div
              key={program._id}
              className="glass hover:shadow-glow group animate-slide-up hover:scale-105 hover:shadow-lg hover:shadow-blue-300/30 transition-all duration-500 relative overflow-hidden rounded-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background gradients */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              {/* Card content wrapper */}
              <div className="p-6 relative z-10 flex flex-col h-full">
                {/* Main content grows */}
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-6">
                    <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-secondary/20 to-primary/20 border border-primary/20 shadow-sm">
                      <span className="text-primary text-sm font-semibold tracking-wide uppercase">
                        {program.fitness_level}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-8 h-8 transition-colors duration-200 ${
                            i < program.rating
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-muted-foreground/30'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-5 mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                      <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-3 border-background shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <img
                          src={program.profilePic}
                          alt={program.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full border-3 border-background flex items-center justify-center shadow-lg">
                        <Zap className="w-3 h-3 text-white" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                        {program.name}
                      </h3>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 backdrop-blur-sm border border-border/50">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium text-foreground">{program.age} years</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 backdrop-blur-sm border border-border/50">
                          <Clock className="w-4 h-4 text-secondary" />
                          <span className="text-sm font-medium text-foreground">{program.workout_days}d / week</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3 lg:mb-5">
                    <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 shadow-sm hover:shadow-md transition-shadow duration-300 group/goal">
                      <div className="p-1.5 rounded-full bg-gradient-to-r from-primary to-secondary">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {program.fitness_goal}
                      </span>
                      <TrendingUpIcon className="w-4 h-4 text-green-500 group-hover/goal:rotate-12 transition-transform duration-300" />
                    </div>
                  </div>

                  <div className=" pt-4 relative border-t border-border">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <p className="max-w-prose text-justify hyphens-auto text-muted-foreground leading-relaxed relative z-10 p-2 group-hover:text-foreground transition-colors duration-300">
                        "{program.description}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom indicator stays at card bottom */}
                <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Heart className="w-3 h-3 text-red-400" />
                    <span>Verified Result</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Trophy className="w-3 h-3 text-amber-400" />
                    <span>Goal Achieved</span>
                  </div>
                </div>
              </div>

              {/* Decorative pings */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary rounded-full animate-ping"></div>
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-secondary rounded-full animate-ping delay-300"></div>
                <div className="absolute top-1/2 right-1/3 w-0.5 h-0.5 bg-accent rounded-full animate-ping delay-600"></div>
              </div>
            </div>
          ))}
        </div>

        {/*  CTA section */}
        <div className="text-center">
          <div className="glass rounded-2xl p-8 lg:p-12 max-w-3xl mx-auto hover:scale-105 hover:shadow-lg hover:shadow-blue-300/30 transition-all duration-500 group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="relative z-10">
              <div className="mb-8">
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
                  Ready to Start Your{' '}<span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Transformation Journey</span>?
                </h3>
                <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
                  Join thousands of users who have already transformed their fitness journey with our AI-powered personalized programs.
                </p>
              </div>
              <button className="relative bg-gradient-to-r from-primary via-secondary to-primary hover:from-primary/90 hover:via-secondary/90 hover:to-primary/90 text-white shadow-glow hover:shadow-xl transition-all duration-300 px-10 py-6 text-lg font-semibold rounded-2xl group/btn overflow-hidden border-0 inline-flex items-center">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></div>
                <span className="relative z-10 flex items-center">Generate Your Program<ArrowRightIcon className="ml-3 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300"/></span>
              </button>
              <div className="flex items-center justify-center gap-8 lg:gap-12 mt-8 text-sm">
                <div className="flex items-center gap-3 group/feature hover:scale-105 transition-transform duration-300"><div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full shadow-lg group-hover/feature:animate-pulse"></div><span className="text-muted-foreground font-medium">Free to start</span></div>
                <div className="flex items-center gap-3 group/feature hover:scale-105 transition-transform duration-300"><div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg group-hover/feature:animate-pulse"></div><span className="text-muted-foreground font-medium">3-minute setup</span></div>
                <div className="flex items-center gap-3 group/feature hover:scale-105 transition-transform duration-300"><div className="w-3 h-3 bg-gradient-to-r from-secondary to-accent rounded-full shadow-lg group-hover/feature:animate-pulse"></div><span className="text-muted-foreground font-medium">Instant results</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserPrograms;
