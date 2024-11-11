import { useEffect } from "react";
// import Appointlet from "@appointlet/appointlet.js";
// import "@appointlet/appointlet.js/dist/appointlet.min.css";
import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  // Initialize Appointlet with your scheduling page URL
  // const Appointlet = require('@appointlet/appointlet.js');

  // const appointlet = new Appointlet("https://appt.link/meet-with-febble-003-Azd48qiR/phone-call");

  // const handleScheduleCall = async () => {
  //   try {
  //     const meetingData = await appointlet.openModal();
  //     if (meetingData) {
  //       console.log("Meeting scheduled:", meetingData);
  //       // Handle successful scheduling here (e.g., show confirmation to user)
  //     } else {
  //       console.log("Scheduling was canceled.");
  //       // Handle the case where the user canceled scheduling
  //     }
  //   } catch (error) {
  //     console.error("Failed to open Appointlet modal:", error);
  //   }
  // };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Fundryft: Prepare | Present | Grow
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Empowering startups to secure funding by preparing investor-ready data rooms with all essential documentation
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="https://omniform1.com/forms/v1/landingPage/673271b91d1247c5759ce7d4/67327eb6f692ad244ffa0acd"
                  >
                    <span className="relative inline-flex items-center">
                      Get Started
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
{/*                 <div data-aos="fade-up" data-aos-delay={600}>
                  <button
                    className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    onClick={handleScheduleCall}
                  >
                    Schedule Call
                  </button>
                </div> */}
              </div>
            </div>
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="videos//video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}
