"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import itm1 from "../../../public/images/Benefits/blood.png";
import itm2 from "../../../public/images/Benefits/skin.png";
import itm3 from "../../../public/images/Benefits/hemoglobin.png";
import itm4 from "../../../public/images/Benefits/metabolism.png";
import itm5 from "../../../public/images/Benefits/immunity.png";
import itm6 from "../../../public/images/Benefits/digestion.png";

const benefits = [
  {
    id: 1,
    name: "Purifies Blood",
    image: "/images/Benefits/blood.png",
  },
  {
    id: 2,
    name: "Improve Skin Health",
    image: "/images/Benefits/skin.png",
  },
  {
    id: 3,
    name: "Increase Hemoglobin",
    image: "/images/Benefits/hemoglobin.png",
  },
  {
    id: 4,
    name: "Increase Metabolism",
    image: "/images/Benefits/metabolism.png",
  },
  {
    id: 5,
    name: "Improve Immune System",
    image: "/images/Benefits/immunity.png",
  },
  {
    id: 6,
    name: "Improve Digestion",
    image: "/images/Benefits/digestion.png",
  },
];

const BenefitsOfJaggery = () => {
  return (
    <div className="bg-yellow-50 pt-40" id="benefits-section">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title Section */}
        <div className="text-center mb-14">
          <Fade
            direction={"up"}
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h3 className="text-pink text-lg font-normal mb-3 ls-51 uppercase">
              Benefits
            </h3>
          </Fade>
          <Fade
            direction={"up"}
            delay={800}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <p className="text-3xl lg:text-5xl font-semibold text-lightgrey">
              General Benefits of Jaggery as per <br /> Ayurveda Samhita
            </p>
          </Fade>
        </div>

        {/* Grid layout for benefits */}
        <Fade
          direction={"up"}
          delay={1000}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center place-items-center">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="flex flex-col items-center text-center"
              >
                {/* Image for each benefit */}
                <Image
                  src={benefit.image}
                  alt={benefit.name}
                  width={150}
                  height={150}
                  className="object-contain mb-4"
                />
                {/* Benefit name */}
                <h3 className="text-xl font-semibold text-brown-900">
                  {benefit.name}
                </h3>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default BenefitsOfJaggery;
