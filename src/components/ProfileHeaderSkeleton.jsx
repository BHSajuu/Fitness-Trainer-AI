
export const ProfileHeaderSkeleton = () => (
  <div className="mb-8 rounded-2xl p-6 glass animate-pulse">
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
      {/* Avatar placeholder */}
      <div className="w-24 h-24 rounded-2xl bg-gray-300" />

      {/* Text placeholders */}
      <div className="flex-1 space-y-4">
        <div className="h-6 w-1/2 bg-gray-300 rounded" />
        <div className="h-4 w-1/4 bg-gray-300 rounded" />

        <div className="flex items-center gap-6 pt-4">
          <div className="h-4 w-1/3 bg-gray-300 rounded" />
          <div className="h-4 w-1/4 bg-gray-300 rounded" />
        </div>
      </div>
    </div>
  </div>
);
