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
      <div className="fixed bottom-0 left-0 w-full z-carpet h-32 lg:h-64 bg-gallery-red"></div>

      {/* Gallery bench */}
      <div className="fixed bottom-0 mb-20 left-1/2 z-bench transform -translate-x-1/2 w-56 min-w-56 sm:w-64 lg:left-3/4 lg:mb-48 lg:w-80 xl:w-96">
        <img src={bench} alt="Gallery Bench" className="w-full h-auto" />
      </div>

      {/* Main content container */}
      <div className="h-screen overflow-y-auto pb-40 lg:pb-40">
        <div className="relative px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16">
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
          <div className="mt-16 sm:mt-20 lg:mt-24 relative ">
            {/* Main large artwork frame - positioned organically */}
            <div className="flex justify-center lg:justify-start lg:ml-8 xl:ml-16">
              <div className="flex relative w-full aspect-[3/2] max-w-[276px] sm:max-w-[345px] lg:max-w-[420px] lg:transform lg:translate-x-3/8 xl:max-w-[500px] xl:translate-x-1/4">
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

            {/* TODO: xl positioning  */}
            <div className="flex mt-12 mb-8 justify-center lg:mt-0 lg:block lg:absolute lg:top-8 lg:right-60 xl:flex xl:mt-0">
              <Writeup />
            </div>

            {/* TODO: xl positioning */}
            <div className="flex justify-center lg:justify-start lg:mt-20 xl:ml-60">
              <div className="grid grid-cols-2 gap-8 max-w-48 mt-12 mb-8 sm:mt-0 xl:gap-x-40">
                <div className="lg:relative lg:left-[40%] xl:left-[60%]">
                  <SocialMediaFrame
                    platform="github"
                    url="https://github.com/kaoshannon"
                    frameImage={frameSquare1}
                    iconImage={github}
                  />
                </div>
                <div className="lg:relative lg:left-[40%] xl:left-[60%]">
                  <SocialMediaFrame
                    platform="linkedin"
                    url="https://linkedin.com/in/kaoshannon"
                    frameImage={frameSquare2}
                    iconImage={linkedin}
                  />
                </div>
                <div className="lg:relative lg:left-[80%] xl:left-[100%]">
                  <SocialMediaFrame
                    platform="substack"
                    url="https://poppp.substack.com/"
                    frameImage={frameSquare3}
                    iconImage={substack}
                  />
                </div>
                <div className="lg:relative lg:left-[100%] xl:left-[120%]">
                  <SocialMediaFrame
                    platform="instagram"
                    url="https://instagram.com/kaoshannon"
                    frameImage={frame1}
                    iconImage={instagram}
                  />
                </div>
              </div>
            </div>

            {/* YouTube video frame - offset from main frame */}
            <div className="hidden mt-8 sm:mt-12 md:top-16 md:right-48 lg:mt-0 lg:block lg:absolute lg:top-48 lg:right-40 xl:mr-60 2xl:top-20 2xl:right-80">
              <div className="flex justify-center lg:justify-end">
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/embed/49LiLYefg30?si=lS_yKP5QWNT9I59Z",
                      "_blank"
                    )
                  }
                >
                  <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
                    <div className="relative w-full aspect-[3/2] sm:aspect-[3/2] lg:w-[400px] lg:h-full xl:w-[480px] xl:h-full flex items-center justify-center">
                      <img
                        src={frame2}
                        alt="Ornate Frame"
                        className="absolute inset-0 w-full h-full z-20 pointer-events-none"
                      />
                      <iframe
                        className="relative z-10 w-4/5 h-2/3 lg:w-[320px] lg:h-[200px] xl:w-[360px] xl:h-[220px]"
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
