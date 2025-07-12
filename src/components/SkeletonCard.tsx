const SkeletonCard = ({ index }: { index: number }) => (
  <div 
    className="glass hover:shadow-glow group animate-slide-up rounded-xl overflow-hidden"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    {/* ENHANCED: Shimmer overlay effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer"></div>
    
    <div className="p-6">
      {/* ENHANCED: Header skeleton with improved spacing */}
      <div className="flex items-center justify-between mb-6">
        <div className="h-6 w-24 bg-gray-200/60 rounded-full animate-pulse"></div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-gray-200/60 rounded-full animate-pulse"></div>
          ))}
        </div>
      </div>

      {/* ENHANCED: Profile section skeleton */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <div className="w-20 h-20 bg-gray-200/60 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gray-200/60 rounded-full animate-pulse"></div>
        </div>
        
        <div className="flex-1 space-y-3">
          <div className="h-6 w-36 bg-gray-200/60 rounded animate-pulse"></div>
          <div className="flex gap-4">
            <div className="h-4 w-16 bg-gray-200/60 rounded animate-pulse"></div>
            <div className="h-4 w-20 bg-gray-200/60 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* ENHANCED: Goal badge skeleton */}
      <div className="mb-6">
        <div className="h-8 w-32 bg-gray-200/60 rounded-full animate-pulse"></div>
      </div>

      {/* ENHANCED: Description skeleton */}
      <div className="pt-4 border-t border-border space-y-2">
        <div className="h-4 w-full bg-gray-200/60 rounded animate-pulse"></div>
        <div className="h-4 w-4/5 bg-gray-200/60 rounded animate-pulse"></div>
        <div className="h-4 w-3/4 bg-gray-200/60 rounded animate-pulse"></div>
      </div>
    </div>
  </div>
);


export default SkeletonCard;