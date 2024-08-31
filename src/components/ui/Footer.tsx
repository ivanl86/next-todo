import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <footer className="flex flex-col justify-center items-center text-center w-full h-full sm:h-24 sm:px-4 gap-2">
      <div className="flex gap-2">
        <Link
          href="https://www.linkedin.com/in/ivan-leung-42a6142b2"
          target="_blank"
        >
          <IoLogoLinkedin size={20} className="text-gray-600" />
        </Link>
        <Link href="https://github.com/ivanl86" target="_blank">
          <IoLogoGithub size={20} className="text-gray-600" />
        </Link>
        <Link href="mailto:ivanl8866@gmail.com" target="_blank">
          <EnvelopeIcon className="w-5 text-gray-600" />
        </Link>
      </div>
      <p className="flex text-sm text-gray-600">
        Copyright &copy;{" "}
        {`${new Date().getFullYear()} Ivan Leung. All rights reserved.`}
      </p>
    </footer>
  );
};

export default Footer;
