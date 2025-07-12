
import { ProfileHeaderSkeleton } from './ProfileHeaderSkeleton';

const ProfilePageSkeleton = () => (
  <div className="min-h-screen py-8">
    <div className="container mx-auto px-4 max-w-6xl space-y-8">
      <ProfileHeaderSkeleton />

      {/* Plan selector skeleton */}
      <div className="rounded-2xl p-6 glass animate-pulse space-y-4">
        <div className="h-6 w-1/3 bg-gray-300 rounded" />
        <div className="flex flex-wrap gap-3">
          <div className="h-8 w-24 bg-gray-300 rounded" />
          <div className="h-8 w-24 bg-gray-300 rounded" />
          <div className="h-8 w-24 bg-gray-300 rounded" />
        </div>
      </div>

      {/* Plan details skeleton */}
      <div className="rounded-2xl p-6 glass animate-pulse space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 bg-gray-300 rounded" />
          <div className="space-y-2">
            <div className="h-5 w-1/4 bg-gray-300 rounded" />
            <div className="h-4 w-1/6 bg-gray-300 rounded" />
          </div>
        </div>

        {/* Tabs skeleton */}
        <div className="flex gap-2">
          <div className="h-8 w-32 bg-gray-300 rounded" />
          <div className="h-8 w-32 bg-gray-300 rounded" />
        </div>

        {/* Content blocks */}
        <div className="space-y-4">
          <div className="h-4 w-1/2 bg-gray-300 rounded" />
          <div className="h-4 w-3/4 bg-gray-300 rounded" />
          <div className="h-4 w-2/5 bg-gray-300 rounded" />
        </div>
      </div>

      {/* Feedback form skeleton */}
      <div className="rounded-2xl p-6 glass animate-pulse space-y-4">
        <div className="h-6 w-1/3 bg-gray-300 rounded" />
        <div className="h-10 bg-gray-300 rounded" />
        <div className="h-24 bg-gray-300 rounded" />
        <div className="h-10 w-1/4 bg-gray-300 rounded" />
      </div>
    </div>
  </div>
);

export default ProfilePageSkeleton;