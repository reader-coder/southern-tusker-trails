import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { Sidebar } from "primereact/sidebar";
import { Menu, X } from "lucide-react";
import { IKImage } from "imagekitio-react";
import { IKURL } from "../../lib";
import "./Navbar.css";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true); // Trigger the animation when the component mounts
  }, []);
  return (
    <div
      className={`w-full absolute z-40 p-4 md:p-8 lg:px-16 xl:px-24 2xl:px-36 flex items-center justify-between ${
        animate ? "navAnimation" : ""
      }`}
    >
      <Sidebar
        position="right"
        visible={visible}
        onHide={() => setVisible(false)}
        className="bg-white"
        blockScroll={true}
        showCloseIcon={false}
        maskClassName="overlay"
      >
        <div className="w-full p-4 md:py-8 flex justify-end">
          <button
            className="cursor-pointer bg-[#A5F211]"
            onClick={() => setVisible(false)}
          >
            <X className="size-7 lg:size-10" />
          </button>
        </div>
        <div className="w-full flex items-center justify-center">
          <Link to={"/"} onClick={() => setVisible(false)}>
            <IKImage
              urlEndpoint={IKURL}
              path="ST L3.png"
              className="w-32 lg:w-36"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-5 py-6 px-6 text-2xl font-[manrope]">
          <Link to={"/trekking"} onClick={() => setVisible(false)}>
            Trekking
          </Link>
          <Link to={"/camping"} onClick={() => setVisible(false)}>
            Camping
          </Link>
          <Link to={"/adventure-activities"} onClick={() => setVisible(false)}>
            Adventures
          </Link>
          <Link to={"/nature-education"} onClick={() => setVisible(false)}>
            Nature Education
          </Link>
          <Link to={"/glamping"} onClick={() => setVisible(false)}>
            Glamping
          </Link>
        </div>
      </Sidebar>
      <Link to={"/"}>
        <IKImage
          urlEndpoint={IKURL}
          path="ST L2.png"
          className="w-20 object-fill"
        />
      </Link>
      <button
        className="bg-[#A5F211] rounded-full p-2 size-10
     cursor-pointer"
        onClick={() => setVisible(true)}
      >
        <Menu className="size-6" />
      </button>
    </div>
  );
};

export default Navbar;
