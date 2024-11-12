"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import cert1 from "../../../public/images/Certified/fssai.png";
import cert2 from "../../../public/images/Certified/ISO.png";
import cert3 from "../../../public/images/Certified/msme.png";
import cert4 from "../../../public/images/Certified/gst.png";

const certifications = [
  { id: 1, image: cert1 },
  { id: 2, image: cert2 },
  { id: 3, image: cert3 },
  { id: 4, image: cert4 },
];

const CertifiedSection = () => {
  return (
    <div className="bg-gray-50 pt-40" id="certified-section">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title Section */}
        <div className="text-center mb-14">
          <Fade
            direction={"up"}
            delay={800}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <p className="text-3xl lg:text-5xl font-semibold text-lightgrey">
              Certified By
            </p>
          </Fade>
        </div>

        {/* Grid layout for certifications */}
        <Fade
          direction={"up"}
          delay={1000}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center place-items-center">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex items-center justify-center">
                {/* Image for each certification */}
                <Image
                  src={cert.image}
                  alt={`Certification ${cert.id}`}
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default CertifiedSection;
