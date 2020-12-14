import React from "react";
import Lottie from "react-lottie";
import loadingdata from "../../assests/448-ripple-loading-animation.json";
import "./Loading.css";
const Loading = (props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingdata,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      className={`lottie-animation-container ${
        props.show ? "" : "close-animation"
      }`}
    >
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default Loading;
