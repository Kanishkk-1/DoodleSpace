import Back from "./appbar/Back";

export const NotFound = () => {
  return (
    <div class="bg-gray-200 w-full px-16 md:px-0 h-screen flex items-center justify-center">
      <div class="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
        <p class="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">
          404
        </p>
        <p class="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">
          Page Not Found
        </p>
        <p class="text-gray-500 mt-4 pb-4 border-b-2 text-center">
          Sorry, the page you are looking for could not be found.
        </p>
        <div className="mt-6">
          <Back></Back>
        </div>
      </div>
    </div>
  );
};
