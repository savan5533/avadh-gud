"use client";
import Image from "next/image";
import itm1 from "../../../public/images/WhyChooseUs/chemicalfree.png";
import itm2 from "../../../public/images/WhyChooseUs/hygiene.png";
import itm3 from "../../../public/images/WhyChooseUs/natural.png";
import itm4 from "../../../public/images/WhyChooseUs/curdletea.png";

const features = [
  { 
    img: itm1, 
    title: "No Chemical & Preservatives",
    alt: "No Chemical & Preservatives icon"
  },
  { 
    img: itm2, 
    title: "Made in Hygienic Conditions",
    alt: "Hygienic Conditions icon"
  },
  { 
    img: itm3, 
    title: "100% Pure & Natural",
    alt: "Pure & Natural icon"
  },
  { 
    img: itm4, 
    title: "Does Not Curdle Tea",
    alt: "No Curdling icon"
  }
];

const WhyChooseUs = () => {
  return (
    <div className="relative  pt-40" id="why-choose-us-section">
      <div className="mx-auto bg-shadered lg:pt-10 py-6 sm:pb-16 px-6">
        <h2 className="text-white text-lg font-normal mb-3 ls-51 uppercase text-center">
          Why Choose Us
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-shadered max-w-5xl mx-auto px-4 pt-2">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center bg-darkyellow p-6 rounded-lg w-full md:w-1/4 h-[220px] min-h-[220px]"
            >
              <div className="mb-4">
                <Image src={feature.img} alt={feature.alt} width={100} height={100} />
              </div>
              <h4 className="text-lg font-medium text-black">{feature.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
