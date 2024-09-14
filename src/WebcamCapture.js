import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { RadioButtonUnchecked } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setCameraImage } from "./features/cameraSlice";
import { useNavigate } from "react-router-dom";
import "./WebcamCapture.css";

function WebcamCapture() {
  const webcamRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    dispatch(setCameraImage(imageSrc));
    navigate("/preview");
  }, [webcamRef]);
  return (
    <div className="webcamCapture">
      <Webcam
        audio={false}
        videoConstraints={videoConstraints}
        screenshotFormat="image/jpeg"
        height={videoConstraints.height}
        width={videoConstraints.width}
        ref={webcamRef}
      />

      <RadioButtonUnchecked
        onClick={capture}
        className="webcamCapture__button"
        fontSize="large"
      />
    </div>
  );
}

export default WebcamCapture;

const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user",
};
