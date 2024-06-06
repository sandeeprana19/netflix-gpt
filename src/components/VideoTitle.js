import React from "react";

const VideoTitle = ({ title, overview }) => (
  <div className="pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black w-full aspect-video">
    <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
    <p className="py-6 text-lg w-1/4 hidden md:inline-block">{overview}</p>
    <div className="my-4 md:m-0">
      <button className="bg-white py-1 md:py-4 px-3 md:px-12 rounded-lg text-black hover:bg-opacity-80">
        ▶ Play
      </button>
      <button className="mx-2 bg-gray-500 bg-opacity-50 p-4 px-12 rounded-lg text-white hidden md:inline-block">
        More Info
      </button>
    </div>
  </div>
);

export default VideoTitle;
