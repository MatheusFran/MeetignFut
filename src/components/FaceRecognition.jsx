import React, { useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';

export const FaceRecognition = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Função para carregar o modelo e realizar a detecção
    const loadFaceRecognition = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
      await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
      await faceapi.nets.faceRecognitionNet.loadFromUri('/models');

      const video = videoRef.current;

      navigator.getUserMedia(
        { video: {} },
        async stream => {
          video.srcObject = stream;
          setInterval(async () => {
            const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
              .withFaceLandmarks()
              .withFaceDescriptors();

            // Aqui você pode comparar os descritores faciais com seu banco de dados conhecido
            console.log(detections);
          }, 100);
        },
        err => console.error(err)
      );
    };

    loadFaceRecognition();
  }, []);

  return (
    <div>
      <h1>Reconhecimento Facial</h1>
      <video ref={videoRef} width="640" height="480" autoPlay></video>
      <canvas id="canvas" width="640" height="480"></canvas>
    </div>
  );
};


