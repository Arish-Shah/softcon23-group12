export const authSkeleton = (
  <div class="animate-pulse bg-gray-700 w-full h-80 max-w-sm rounded-md p-4 mt-4 drop-shadow"></div>
);

export const masonrySkeleton = (
  <div class="animate-pulse">
    {Array.from(Array(8).keys()).map((i) => (
      <div key={i} class="mb-4 bg-gray-700 h-96 rounded-md"></div>
    ))}
  </div>
);

export const linksSkeleton = (
  <div className="flex animate-pulse">
    <div class="w-16 h-2 rounded-md bg-gray-700 mr-6"></div>
    <div class="w-16 h-2 rounded-md bg-gray-700"></div>
  </div>
);
