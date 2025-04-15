// EmblaCarousel.jsx
import React, { useState } from "react";
import styles from "./PackageCarousel.module.css";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtonsPackageCarousel";
import useEmblaCarousel from "embla-carousel-react";
import { MapPin } from "lucide-react";
import { IKImage } from "imagekitio-react";
import { IKURL } from "../../lib";
import PackageLineItem from "./PackageLineItem";

const PackageCarousel = () => {
  const [sidebar, setSidebar] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const slides = [
    {
      id: 0,
      imgPath: "https://ik.imagekit.io/gzqqjuhn9/campingDest1.png",
      name: "Chokramudi Peak Camping",
    },
    {
      id: 1,
      imgPath: "https://ik.imagekit.io/gzqqjuhn9/campingDest2.png",
      name: "Kundala Lake Camping",
    },
    {
      id: 2,
      imgPath: "https://ik.imagekit.io/gzqqjuhn9/campingDest3.png",
      name: "Mattupetty Dam Camping",
    },
    {
      id: 3,
      imgPath: "https://ik.imagekit.io/gzqqjuhn9/campingDest3.png",
      name: "Mattupetty Dam Camping",
    },
    {
      id: 4,
      imgPath: "https://ik.imagekit.io/gzqqjuhn9/campingDest3.png",
      name: "Mattupetty Dam Camping",
    },
  ];

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="h-fit px-8 lg:px-20 xl:px-32 2xl:px-56 py-20 xl:py-24 2xl:py-40 flex flex-col gap-6 overflow-x-hidden 2xl:flex 2xl:w-full 2xl:justify-center [@media(min-width:2000px)]:items-center">
      {/* Heading and nav buttons container */}
      <div className="w-full flex flex-col items-center md:flex-row md:justify-between gap-5 [@media(min-width:2000px)]:max-w-[1600px]">
        <h3 className="font-[manrope] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          Client Reviews
        </h3>

        <div className="w-full flex justify-center md:w-fit">
          <div className={styles.embla__buttons}>
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
              className={styles.embla__button}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
              className={styles.embla__button}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <section className={styles.embla}>
          <div className={styles.embla__viewport} ref={emblaRef}>
            <div className={styles.embla__container}>
              {slides.map((item) => (
                <div className={styles.embla__slide} key={item.id}>
                  <div className={styles.embla__slide__number}>
                    <div className="w-full flex flex-col gap-4">
                      <div className="h-[300px] lg:h-[400px] w-full ">
                        <IKImage
                          urlEndpoint={IKURL}
                          path="Package1.png"
                          className="h-full object-cover w-full object-center"
                        />
                      </div>
                      {/* Package Name */}
                      <h4 className="font-[manrope] text-xl lg:text-2xl">
                        Forest Camping
                      </h4>
                      {/* Package information */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <MapPin className="size-5" />
                          <p className="font-[manrope] text-sm">
                            Kolukkumala, Munnar
                          </p>
                        </div>
                        <div className="w-fit px-4 py-2 border-1 border-black rounded-md">
                          <p className="font-[manrope] text-sm">2D & 1N</p>
                        </div>
                      </div>
                      {/* Price information */}
                      <div className="flex items-end">
                        <p className="text-2xl lg:text-4xl font-[manrope] font-semibold">{`₹15,000`}</p>
                        <p className="text-xl font-[manrope] text-gray-500">
                          /Person
                        </p>
                      </div>
                      {/* Inclusions */}
                      <div className="mt-3 flex flex-col gap-2">
                        <PackageLineItem
                          text={"Ideal for nature lovers & families"}
                        />
                      </div>
                      <div className="flex justify-center">
                        <button
                          onClick={() => setSidebar((prev) => !prev)}
                          className="bg-[#a5f211] w-full px-3 py-2 rounded-md font-[manrope] text-xl mt-2 cursor-pointer"
                        >
                          View more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      {/* Overlay Sidebar */}
      <div
        className={`fixed top-0 ${
          sidebar ? "right-0" : "-right-[100%]"
        } w-[75%] h-screen bg-white
         z-20 transition-all duration-300 shadow-2xl`}
      ></div>
    </div>
  );
};

export default PackageCarousel;
