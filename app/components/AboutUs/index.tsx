"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const AboutUs = () => {
  return (
    <div className="relative" id="about-section">
      <div className="mx-auto max-w-7xl lg:pt-20 sm:pb-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5">
          <div className="col-span-6 flex justify-start">
            <Image
              src="/images/AboutUs/avadh-desi-gud-products.png"
              alt="Avadh Desi Gud Products"
              width={636}
              height={808}
            />
          </div>

          <div className="col-span-6 flex flex-col justify-center">
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h2 className="text-pink text-lg font-normal mb-3 ls-51 uppercase text-start">
                About Us
              </h2>
            </Fade>
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h3 className="text-3xl lg:text-5xl font-semibold text-black text-start">
                Avadh Desi Gud
              </h3>
            </Fade>
            <Fade
              direction={"up"}
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="text-black md:text-lg font-normal mb-10 text-start mt-2">
                Welcome to Avadh Desi Gud, the trusted name in Sasan Gir for
                100% natural, premium-quality jaggery since 1990. Our jaggery is
                crafted using a traditional wood-fired process that brings out a
                rich, authentic flavor, ensuring a product that is as pure as it
                is delicious. <br />
                <br />
                We prioritize hygiene and quality in every batch, delivering
                jaggery free from chemicals and additives. Explore our range of
                jaggery in various flavors and convenient packaging options,
                perfect for adding a touch of wholesome sweetness to your life.
              </p>

              <p className="text-black md:text-lg font-semibold mb-10 text-start mt-1">
                Experience the best jaggery in Sasan Gir—only with Avadh Desi
                Gud.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
