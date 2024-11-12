import Link from "next/link";
import Image from "next/image";
import whatsappIcon from "../../../public/images/Whatsapp/whatsapp.svg";

const WhatsAppButton = () => {
  return (
    <div>
      {/* Fixed WhatsApp Icon */}
      <Link href="https://wa.me/+919099947166" legacyBehavior passHref>
        <a target="_blank" rel="noopener noreferrer">
          <div className="fixed bottom-5 right-5 z-50 bg-green-500 rounded-full p-3 hover:bg-green-600 transition">
            <Image
              src={whatsappIcon} // WhatsApp icon
              alt="WhatsApp"
              width={50}
              height={50}
            />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default WhatsAppButton;
