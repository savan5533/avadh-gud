"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const ExperienceSection = () => {
  return (
    <div className="relative mt-16 bg-white" id="experience-section">
      <div className="mx-auto max-w-5xl text-center px-6">
        <div className="absolute right-0 bottom-[-27%] block lg:hidden opacity-20">
          <Image
            src={"/public/images/AboutUs/sugarcane.png"}
            alt="sugarcane-crop-image"
            width={150} // Adjusted width for mobile
            height={240} // Adjusted height for mobile
          />
        </div>
        <div className="absolute right-0 bottom-[-123%] hidden lg:block">
          <Image
            src={"/public/images/AboutUs/sugarcane.png"}
            alt="sugarcane-crop-image"
            width={263} // Original width for desktop
            height={422} // Original height for desktop
          />
        </div>

        <div className="flex flex-col items-center">
          <Fade
            direction={"up"}
            delay={400}
            cascade
            damping={0.1}
            triggerOnce={true}
          >
            <Image
              src="/public/images/Logo/avadh-desi-gud-logo.png"
              alt="Avadh Desi Gud"
              width={150}
              height={150}
            />
            <h4 className="text-l font-semibold text-brown my-2">Since 1990</h4>
            <h2 className="text-3xl font-semibold text-brown mb-4">
              30+ Years of &quot;Gud&quot; Experience
            </h2>
            <p className="text-md text-gray-600 max-w-lg">
              Avadh Desi Gud is India’s Natural jaggery brand, bringing you the
              true, unrefined taste of nature.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
