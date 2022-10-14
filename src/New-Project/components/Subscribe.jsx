import React from "react";

function Subscribe() {
  return (
    <div className="mt-12 w-full">
      <div className=" bg-blue-300">
        <div className="container mx-auto relative  h-80 pt-24 rounded">
          <div className="mb-6 px-4 text-center">
            <h2 className="text-xl font-bold py-0 lg:py-1">
              Don’t Miss our News And Updates!
            </h2>
            <p>Subscribe for updates, news and information on our platform.</p>
          </div>
          <form className="flex flex-col items-center justify-center space-y-8 px-4">
            <div className="border-blue-400 flex w-full border-2 bg-white rounded-full">
              <input
                type="email"
                required
                name="email"
                placeholder="Enter email for updates"
                className="px-4 h-14  bg-transparent w-full mx-auto rounded-full outline-none focus:outline-none"
              />
              <button
                type="submit"
                className=" transition-all -m-px  outline-none focus:outline-none ease-linear duration-500 hover:bg-blue-700    w-40 lg:w-60  uppercase bg-blue-500 text-white  rounded-full "
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
