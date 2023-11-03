import { Skeleton } from "./components/ui/skeleton";

const Loading = () => {
  return (
    <>
      {Array.from({ length: 12 }, (_, i) => i + 1).map((id) => {
        return (
          <div
            key={id}
            className="bg-neutral-800 p-4 col-span-4 md:col-span-2 xl:col-span-1 rounded-md"
          >
            <Skeleton className="h-6 w-1/2 bg-gray-200 mb-4"></Skeleton>
            <Skeleton className="h-6 w-1/4 mb-4"></Skeleton>
            <Skeleton className="rounded-md w-full h-80 bg-gray-400"></Skeleton>
          </div>
        );
      })}
      <h1 className="m-5">Hello</h1>
      <h2 className="m-5">World</h2>
    </>
  );
};

export default Loading;
