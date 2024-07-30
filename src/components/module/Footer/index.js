import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <ul className="bg-blue-50 flex gap-6 justify-center p-6 max-lg:flex-col max-lg:p-4 max-lg:gap-4 max-lg:pb-16">
      <li>
        <Link className="font-medium text-base text-[#707070]" href="">
          Footer
        </Link>
      </li>
    </ul>
  );
};

export default Footer;
