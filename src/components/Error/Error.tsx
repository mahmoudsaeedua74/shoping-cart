"use client";

import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section className="bg-white  min-h-screen flex items-center justify-center fixed inset-0 z-50">
      <div className="flex flex-col space-y-4">
        <h1 className="text-6xl font-extrabold text-red-500">
          Oops!
        </h1>
        <p className=" text-2xl font-semibold text-textColor ">
          Something went wrong
        </p>
        <p className="text-lg font-light text-secondColor ">
          It seems there`s an issue with your connection or an unexpected error
          occurred. Please try again.
        </p>
        <button onClick={() => window.location.reload()} className="btnError">
          Try Again
        </button>
        <Link to={"/"} className="btn ">Back Home</Link>
        <br />
      </div>
    </section>
  );
}
