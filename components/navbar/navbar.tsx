import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { FaApple } from "react-icons/fa";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogSubtitle,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from "@/components/ui/dialog";
import { BiLogoPlayStore } from "react-icons/bi";
// import QRCode from "qrcode.react";

const Navbar = () => {
  return (
    <nav className="flex max-w-full z-50 backdrop-blur-lg sticky top-0 items-center py-6 justify-between px-6 md:px-12">
    <Link href="/" className="text-4xl font-bold">
      <Image src={"/logo.png"} height={110} width={140} alt="logo of sbazar" className="object-cover text-white" />
    </Link>


    <Dialog
      transition={{
        type: "spring",
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <DialogTrigger
        style={{
          borderRadius: "12px",
        }}
      >
        <Button className="rounded-2xl bg-[#BC1E3A] shadow-md flex py-6 items-center">
          <div className="flex items-center justify-center gap-1">
            <FaApple size={24} />
            <BiLogoPlayStore size={24} />
          </div>
          {/* <p></p> */}
        </Button>
      </DialogTrigger>
      <DialogContainer>
        <DialogContent
          style={{
            borderRadius: "24px",
          }}
          className="flex flex-col items-center p-8 bg-white justify-center sm:w-[500px] overflow-hidden"
        >
          <DialogTitle className="text-3xl font-bold mb-6 text-zinc-900">
            Scan to Download SBazar
          </DialogTitle>
          <Image 
          src="/qr-code.png"
          height={300}
          width={300}
          alt="qr-code-image"
          />
          <p className="mt-6 text-zinc-600 text-center">
            Scan this QR code with your mobile device to download the SBazar app.
          </p>
        </DialogContent>
      </DialogContainer>
    </Dialog>
  </nav>
  );
};

export default Navbar;
