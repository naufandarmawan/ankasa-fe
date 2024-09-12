import {
  Facebook,
  Instagram,
  PlaceOutlined,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import GooglePlay from "../../../../public/google-play.png";
import AppStore from "../../../../public/app-store.png";
import AnkasaLogo from "../../../../public/logo.svg";

const Footer = () => {
  return (
    <div className="px-40 py-16 flex flex-col gap-10">
      <div className="flex gap-20 justify-between">
        <div className="flex flex-col gap-8">
          <Image src={AnkasaLogo} />
          <p className="font-normal text-sm text-[#6B6B6B] leading-8">
            Find your Flight and explore the <br />
            world with us. We will take care of the rest
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
          <p className="font-medium text-base text-black">
            Download Angkasa app
          </p>
          <div className="flex flex-col gap-5">
            <Image src={GooglePlay} />
            <Image src={AppStore} />
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <p className="font-medium text-base text-black">Follow Us</p>
          <div className="flex gap-5">
            <Facebook style={{ color: "#595959" }} sx={{ fontSize: 24 }} />
            <Twitter style={{ color: "#595959" }} sx={{ fontSize: 24 }} />
            <Instagram style={{ color: "#595959" }} sx={{ fontSize: 24 }} />
            <YouTube style={{ color: "#595959" }} sx={{ fontSize: 24 }} />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <p className="font-normal text-base text-[#6B6B6B] leading-8">
          © Ankasa. All Rights Reserved.
        </p>
        <div className="flex gap-2 items-center">
          <PlaceOutlined style={{ color: "#595959" }} sx={{ fontSize: 24 }} />
          <p className="font-normal text-sm text-[#6B6B6B]">
            Jakarta Indonesia
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
