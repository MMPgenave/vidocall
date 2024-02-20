import { useState } from "react";
import "./App.css";
import AgoraUIKit from "agora-react-uikit";

function App() {
  const [videoCall, setVideoCall] = useState(false);

  const rtcProps = {
    appId: "f95c1defe4ad4fa7a230e8164a3153e6",
    channel: "f",
    token:
      "007eJxTYCiRWvno3tlJIfMv7TP50/ZQO6Gd89mMM15BL/ZK7PyxwPimAkOapWmyYUpqWqpJYopJWqJ5opGxQaqFoZlJorGhqXGq2bNdl1MbAhkZIvfPZGFkgEAQn5EhjYEBAAzNIoU=",
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall ? (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Join</h3>
  );
}

export default App;
