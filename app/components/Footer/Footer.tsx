import Link from "next/link";
import Image from "next/image";

interface ProductType {
  id: number;
  section: string;
  link: { name: string; href: string }[];
}

interface SocialLinkType {
  imgSrc: string;
  link: string;
  width: number;
}

const socialLinks: SocialLinkType[] = [
  {
    imgSrc: "/images/Footer/facebook.svg",
    link: "https://www.facebook.com/avadhdesigud/",
    width: 10,
  },
  {
    imgSrc: "/images/Footer/insta.svg",
    link: "https://www.instagram.com/avadh_desi_gud?igsh=c213M2I5NDN1ODN5",
    width: 14,
  },
  {
    imgSrc: "/images/Footer/mail.svg",
    link: "mailto:avadhdesigud@gmail.com",
    width: 14,
  },
];

const products: ProductType[] = [
  {
    id: 1,
    section: "Company",
    link: [
      { name: "About Us", href: "#about-section" },
      { name: "Products", href: "#product-slider-section" },
      { name: "Certificates", href: "#certified-section" },
      { name: "Why Choose Us?", href: "/" },
    ],
  },
  {
    id: 2,
    section: "Contact",
    link: [
      { name: "+91 9099947166", href: "tel:+919099947166" },
      {
        name: "Nr Woods At Sasan Resort, Sasan Road, Borvav Gir, Gir Somnath, Gujarat-362150",
        href: "https://www.google.com/maps/place/Avadh+Desi+Gud/@21.1230492,70.5659348,17z/data=!3m1!4b1!4m6!3m5!1s0x3be2b7edd5ef46e5:0x98522ccefc61f40a!8m2!3d21.1230492!4d70.5685097!16s%2Fg%2F11qmrd_l56?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
      },
      { name: "avadhdesigud@gmail.com", href: "mailto:avadhdesigud@gmail.com" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="mx-auto pt-40 ">
      <div className="bg-shadered pt-24 px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">
        {/* COLUMN-1 */}
        <div className="sm:col-span-6 lg:col-span-5">
          <div className="flex flex-shrink-0 items-center border-right">
            <Image
              src="/images/Logo/avadh-desi-gud-logo.png"
              alt="Avadh Desi Gud"
              width={120}
              height={120}
            />
          </div>
          <h3 className="text-white text-xs font-semibold mt-5 mb-4 lg:mb-16">
            Taste Forever
          </h3>
          <div className="flex gap-4">
            {socialLinks.map((items, i) => (
              <Link href={items.link} key={i}>
                <div className="bg-white h-10 w-10 shadow-xl text-white rounded-full flex items-center justify-center footer-icons hover:bg-pink">
                  <Image
                    src={items.imgSrc}
                    alt={items.imgSrc}
                    width={items.width}
                    height={2}
                    className="sepiaa"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* COLUMN-2/3 */}
        {products.map((product) => (
          <div key={product.id} className="sm:col-span-2">
            <p className="text-white text-xl font-semibold mb-9">
              {product.section}
            </p>
            <ul>
              {product.link.map((link, index) => (
                <li key={index} className="mb-5">
                  <Link
                    href={link.href}
                    className="text-white text-base font-normal mb-6 space-links"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* All Rights Reserved */}
      <div className="py-5 bg-shadered md:flex items-center justify-between border-t border-t-white">
      <h4 className="text-white text-sm text-center md:text-start font-normal">
          @2023 - Avadh Desi Gud. All Rights Reserved by{" "}
          <Link href="https://avadhdesigud.com/" target="_blank">
            {" "}
            avadhdesigud.com
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default Footer;
