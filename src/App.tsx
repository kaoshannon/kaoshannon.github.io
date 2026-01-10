import { Routes, Route } from "react-router-dom";
import bench from "./assets/images/bench.png";
import logo from "./assets/icons/logo.svg";
import hero from "./assets/photos/IMG_8173.jpg";
import frame1 from "./assets/images/frame-1.webp";
import frame2 from "./assets/images/frame-2.png";
import frameCircle from "./assets/images/frame-circular.png";

import Writeup from "./components/Writeup";

import SocialMediaFrame from "./components/SocialMediaFrame";
import frameSquare1 from "./assets/images/frame-square-1.png";
import frameSquare2 from "./assets/images/frame-square-2.png";
import frameSquare3 from "./assets/images/frame-square-3.png";
import instagram from "./assets/icons/instagram.webp";
import linkedin from "./assets/icons/linkedin.png";
import github from "./assets/icons/github.png";
import substack from "./assets/icons/substack.png";

import NavigationMenu from "./components/NavigationMenu";
import Theatre from "./pages/Theatre";
import Portfolio from "./pages/Portfolio";

function Gallery() {
  return (
    <div className="min-h-screen overflow-hidden absolute inset-0 bg-gallery-green z-background">
      {/* Red carpet at bottom */}
      <div className="fixed bottom-0 left-0 w-full z-carpet h-32 lg:h-48 bg-gallery-red"></div>

      {/* Gallery bench */}
      {/* TODO: fix shifting when h viewport changes */}
      <div className="fixed bottom-0 mb-20 left-1/2 z-bench transform -translate-x-1/2 w-56 min-w-56 sm:w-64 lg:left-3/4 lg:mb-24 lg:w-80">
        <img src={bench} alt="Gallery Bench" className="w-full h-auto" />
      </div>

      {/* Main content container */}
      <div className="h-screen overflow-y-auto pb-60 lg:pb-40">
        {/* Logo frame - top right */}
        <div className="absolute top-4 sm:top-8 lg:top-12 right-4 sm:right-8 lg:right-12">
          <div className="w-16 h-auto sm:w-20 lg:w-32">
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ top: "15%", left: "15%", right: "15%", bottom: "15%" }}
            >
              <div className="w-full h-full bg-emerald-800 rounded-full flex items-center justify-center z-background">
                <img
                  src={logo}
                  alt="logo"
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-16 lg:h-16 z-content"
                />
              </div>
            </div>
            <img
              src={frameCircle}
              alt="Ornate Frame"
              className="w-full h-auto relative z-frame"
            />
          </div>
        </div>

        {/* Main frames section - organic layout */}
        <div className="relative px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Top-left: Main large artwork frame */}
            <div className="flex justify-center">
              <div className="flex relative w-full aspect-[3/2] max-w-[276px] sm:max-w-[345px] lg:max-w-[420px]">
                <img
                  src={hero}
                  alt="Elephant photo"
                  className="relative max-w-full max-h-full object-contain z-0"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
                <img
                  src={frame1}
                  alt="Ornate Frame"
                  className="absolute w-full h-full rotate-90 z-10 pointer-events-none"
                />
              </div>
            </div>

            {/* Top-right: Writeup */}
            <div className="flex justify-center mt-12 mb-8 lg:justify-start">
              <Writeup />
            </div>

            {/* Bottom-left: Social media frames */}
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-8 max-w-48 lg:justify-center lg:width-full lg:flex lg:flex-horizontal lg:space-x-2 lg:mt-8">
                <div>
                  <SocialMediaFrame
                    platform="github"
                    url="https://github.com/kaoshannon"
                    frameImage={frameSquare1}
                    iconImage={github}
                  />
                </div>
                <div>
                  <SocialMediaFrame
                    platform="linkedin"
                    url="https://linkedin.com/in/kaoshannon"
                    frameImage={frameSquare2}
                    iconImage={linkedin}
                  />
                </div>
                <div>
                  <SocialMediaFrame
                    platform="substack"
                    url="https://substack.com/@kaoshannon"
                    frameImage={frameSquare3}
                    iconImage={substack}
                  />
                </div>
                <div>
                  <SocialMediaFrame
                    platform="instagram"
                    url="https://instagram.com/kaoshannon"
                    frameImage={frame1}
                    iconImage={instagram}
                  />
                </div>
              </div>
            </div>

            {/* Bottom-right: YouTube video frame */}
            <div className="hidden lg:flex lg:justify-start lg:mt-0">
              <div
                className="cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/embed/49LiLYefg30?si=lS_yKP5QWNT9I59Z",
                    "_blank"
                  )
                }
              >
                <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
                  <div className="relative flex items-center justify-center w-full aspect-[3/2] lg:w-[400px] lg:h-full">
                    <img
                      src={frame2}
                      alt="Ornate Frame"
                      className="absolute inset-0 w-full h-full z-20 pointer-events-none"
                    />
                    <iframe
                      className="relative z-10 w-4/5 h-2/3 lg:w-[320px] lg:h-[200px]"
                      style={{
                        border: "none",
                        display: "block",
                      }}
                      src="https://www.youtube.com/embed/49LiLYefg30?si=lS_yKP5QWNT9I59Z"
                      title="YouTube video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* TODO: fix to wall */}
            <NavigationMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Gallery />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/theatre" element={<Theatre />} />
    </Routes>
  );
}

export default App;
