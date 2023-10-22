import React from "react";
import logo from "public/images/logo.jpg";
import social from "public/images/Social.svg";
import Image from "next/image";
import visa from "public/images/visa.svg";
import master from "public/images/master.svg";
import apple from "public/images/apple.svg";
import google from "public/images/google.svg";

const FooterLinks = () => {
  return (
    <div className="relative">
      <div className="bg-black w-[1320px] h-[180px] rounded-xl flex justify-center m-auto px-32 py-9 items-center absolute bottom-[510px] right-1/2 translate-x-1/2">
        <div className="flex w-full justify-between items-center">
          <div className="text-white font-bold text-5xl max-w-xl">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </div>
          <div className="flex flex-col gap-3 ">
            <input
              className="rounded-full border-none px-12 py-3 outline-none"
              type="text"
            />
            <button className="text-black bg-white rounded-full px-12 py-3">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center h-[600px] w-full m-auto bg-zinc-100 ">
        <div className="flex flex-row max-w-[1440px] w-full justify-between pt-44">
          <div className="max-w-[248px]">
            <Image
              src={logo}
              width={160}
              height={22}
              alt="logo"
              className="mr-[40px] pb-6"
            ></Image>
            <div className="pb-6 opacity-60">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </div>
            <Image
              src={social}
              width={148}
              height={28}
              alt="social"
              className="pb-6"
            />
          </div>
          <div className="">
            <h3 className="text-black text-xl font-bold uppercase leading-[18px] tracking-[3px] pb-6">
              Company
            </h3>
            <ul className="opacity-60 flex flex-col gap-2">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>
          <div>
            <h3 className="text-black text-xl font-bold uppercase leading-[18px] tracking-[3px] pb-6">
              Help
            </h3>
            <ul className="opacity-60 flex flex-col gap-2">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="text-black text-xl font-bold uppercase leading-[18px] tracking-[3px] pb-6">
              FAQ
            </h3>
            <ul className="opacity-60 flex flex-col gap-2">
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
          <div>
            <h3 className="text-black text-xl font-bold uppercase leading-[18px] tracking-[3px] pb-6">
              Resources
            </h3>
            <ul className="opacity-60 flex flex-col gap-2">
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row justify-between border-t-2 w-[1440px] mt-24">
          <h6 className="opacity-60 pt-5">
            Shop.co © 2000-2023, All Rights Reserved
          </h6>
          <div className=" flex flex-row ">
            <Image src={visa} height={50} width={70} alt="visa"></Image>
            <Image src={master} height={50} width={70} alt="visa"></Image>
            <Image src={apple} height={50} width={70} alt="visa"></Image>
            <Image src={google} height={50} width={70} alt="visa"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
