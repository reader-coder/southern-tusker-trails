import { IKImage } from "imagekitio-react";
import React from "react";
import { IKURL } from "../../lib";
import { Link } from "react-router";
import { FaInstagram } from "react-icons/fa6";
import { Copyright } from "lucide-react";

const Footer = () => {
  const footerItems = [
    { id: 0, name: "Home", path: "/" },
    { id: 1, name: "Trekking", path: "/trekking" },
    { id: 2, name: "Camping", path: "/camping" },
    { id: 3, name: "Adventure Activities", path: "/adventure-activities" },
    { id: 4, name: "Nature Education", path: "/nature-education" },
  ];
  return (
    <div className="h-fit px-8 lg:px-20 xl:px-32 2xl:px-56 pt-20 xl:pt-24 2xl:pt-40 bg-[url(https://ik.imagekit.io/gzqqjuhn9/footerBG.png)] bg-cover bg-center bg-no-repeat flex flex-col gap-24">
      {/* Top */}
      <div className="flex flex-col md:grid md:grid-cols-2 gap-10 xl:grid-cols-4 xl:gap-10 2xl:gap-10">
        {/* Left */}
        <div className="flex flex-col gap-4">
          <IKImage
            urlEndpoint={IKURL}
            path="ST L3.png"
            className="w-20 object-fill"
          />
          <p className="font-[manrope] text-md">
            Explore the world with us! Contact our travel experts for
            personalized assistance, travel tips, and booking inquiries. Your
            journey begins with a simple message or call.
          </p>
        </div>
        {/* Middle */}
        <div className="flex flex-col gap-4">
          <h4 className="font-[manrope] font-semibold text-xl">Navigation</h4>
          <div className="flex flex-col md:flex-row flex-wrap xl:flex-col flex-nowrap gap-6">
            {footerItems.map((item) => (
              <Link className="font-[manrope]" key={item.id} to={item.path}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        {/* Right */}
       <div className="flex flex-col gap-4">
          <h4 className="font-[manrope] font-semibold text-xl">Contact Details</h4>
          <div className="flex flex-col gap-2 text-lg font-[manrope]">
            <a href="tel:9633996929">9633996929</a>
            <a href="mailto:southerntuskertrails@gmail.com">southerntuskertrails@gmail.com</a>
            <p>521/09, Kuttiyar valley, Munnar</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-[manrope] font-semibold text-xl">Follow us on</h4>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/southerntuskertrails"
              target="_blank"
              className="inline"
            >
              <div className="p-3 rounded-full border-2 border-black">
                <FaInstagram className="size-6" />
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="py-6 flex flex-col md:flex-row gap-2 items-center md:justify-between text-sm md:text-lg">
        <p className="flex gap-1 items-center font-[manrope]">
          <Copyright className="size-4" />
          {new Date().getFullYear()} {"Southern Tusker Trails India"}
        </p>
        <p className="font-[manrope]">
          Powered by{" "}
          <a className="font-bold" href="https://codesvera.com/" target="_blank">
            Codesvera
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
