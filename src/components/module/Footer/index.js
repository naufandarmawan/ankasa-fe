import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="px-40 py-16 flex flex-col gap-10">
      <div className="flex gap-20">
        <div className="flex flex-col gap-8">
          <p>Ankasa</p>
          <p className="font-normal text-sm text-[#6B6B6B] leading-8">
            Find your Flight and explore the world with us. We will take care of the rest
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <p className="font-medium text-base text-black">Features</p>
          <div className="flex flex-col gap-5">
            <p className="font-normal text-sm text-[#6B6B6B]">Find Ticket</p>
            <p className="font-normal text-sm text-[#6B6B6B]">My Booking</p>
            <p className="font-normal text-sm text-[#6B6B6B]">Chat</p>
            <p className="font-normal text-sm text-[#6B6B6B]">Notification</p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <p className="font-medium text-base text-black">Download Angkasa app</p>
          <div>
            <p>App Store</p>
            <p>Google Play</p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <p className="font-medium text-base text-black">Follow Us</p>
          <div className="flex gap-5">
            <p>FB</p>
            <p>TW</p>
            <p>IG</p>
            <p>YT</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <p className="font-normal text-base text-[#6B6B6B] leading-8">© Ankasa. All Rights Reserved.</p>
        <div className="flex gap-2 items-center">
          <p className="font-normal text-sm text-[#595959]">Pin</p>
          <p className="font-normal text-sm text-[#6B6B6B]">Jakarta Indonesia</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
