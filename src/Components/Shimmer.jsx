export const Shimmer = ({ count = 12 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4 py-8">
      {Array(count).fill("").map((_, i) => (
        <div key={i} className="bg-white rounded-xl shadow-md p-4 animate-pulse flex flex-col">
          <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
          <div className="h-5 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-9 bg-gray-200 rounded-lg"></div>
        </div>
      ))}
    </div>
  );
};