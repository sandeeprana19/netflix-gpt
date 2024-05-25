import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div className="w-full overflow-hidden">
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/XeDbyVODQ5M?si=eJc8rgkw8S7UmtqK" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        webkitAllowFullScreen="webkitAllowFullScreen"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
