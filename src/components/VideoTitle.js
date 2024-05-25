import React from "react";

const VideoTitle = ({ title, overview }) => (
  <div className="pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-full aspect-video">
    <h1 className="text-3xl font-bold">{title}</h1>
    <p className="py-6 text-lg w-1/4">{overview}</p>
    <div>
      <button className="bg-white p-4 px-12 rounded-lg text-black hover:bg-opacity-80">
        ▶ Play
      </button>
      <button className="mx-2 bg-gray-500 bg-opacity-50 p-4 px-12 rounded-lg text-white">
        More Info
      </button>
    </div>
  </div>
);

export default VideoTitle;
