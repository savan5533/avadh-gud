"use client"
import Image from 'next/image';

const HeroSection = () => {
    return (
        <div className="relative bg-yellow-100 overflow-hidden w-full h-[50vh] md:h-[75vh] lg:h-screen" id="hero-section">
            {/* Responsive Background Image */}
            <Image
                src="/images/HeroSection/gud-making-process.jpg"  // Use an image similar to the background in your reference
                alt="Gud Making Process"
                layout="fill"  // Covers the entire container
                sizes="100vw"  // Ensures image only scales to viewport width
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="w-full h-full"  // Ensures the image fills the container
            />
        </div>
    );
}

export default HeroSection;
