"use client";
import Image from "next/image";
import Slider from "react-slick";
import { Fade } from "react-awesome-reveal";
import product1 from "../../../public/images/Products/jaggery.png";
import product2 from "../../../public/images/Products/jaggery-cubes.png";
import product3 from "../../../public/images/products/jaggery-powder.png";
import product4 from "../../../public/images/products/kakavi.png";
import product5 from "../../../public/images/Products/dryfruit-jaggery.png";

const ProductSlider = () => {
  const products = [
    {
      id: 1,
      name: "Jaggery",
      image: product1,
      link: "https://amzn.in/d/9XuhKD1",
    },
    {
      id: 2,
      name: "Jaggery Cubes",
      image: product2,
      link: "https://amzn.in/d/5n39qkj",
    },
    {
      id: 3,
      name: "Jaggery Powder",
      image: product3,
      link: "https://amzn.in/d/2guqkwR",
    },
    {
      id: 4,
      name: "Kakavi(Liquid Jaggery)",
      image: product4,
      link: "https://amzn.in/d/463ADWl",
    },
    {
      id: 5,
      name: "Dryfruit Jaggery",
      image: product5,
      link: "https://amzn.in/d/9XuhKD1",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative bg-shadered py-10" id="product-slider-section">
      <div className="mx-auto max-w-7xl lg:pt-10 sm:pb-16 px-6">
        <h2 className="text-white text-lg font-normal mb-3 ls-51 uppercase text-center">
          Our Products
        </h2>
        <Fade direction={"up"} delay={400} cascade damping={1e-1} triggerOnce={true}>
          <Slider {...settings} className="relative">
            {products.map((product) => (
              <div key={product.id} className="px-4">
                <div className="p-4 bg-white rounded-lg shadow-lg flex flex-col items-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="object-contain mb-4"
                  />
                  <h3 className="text-2xl font-semibold text-black text-center mb-2">
                    {product.name}
                  </h3>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-medium rounded-full text-white py-3 px-6 bg-pink lg:px-10"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </Fade>
      </div>
    </div>
  );
};

export default ProductSlider;
