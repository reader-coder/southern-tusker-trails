// EmblaCarousel.jsx
import React from "react";
import styles from "./TrekkingDestinations.module.css";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtonsTrekkingDestinations";
import useEmblaCarousel from "embla-carousel-react";
import { MapPin } from "lucide-react";
import { IKImage } from "imagekitio-react";
import { IKURL } from "../../lib";

const TrekkingDestinations = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const slides = [
    {
      id: 0,
      imgPath: "Letchmi_hills", 
      name: "Letchmi Hills"
    },
    {
      id: 1,
      imgPath: "Chokramudi-Peak.jpg", // Add image path
      name: "Chokkarmudi"
    },
    {
      id: 2,
      imgPath: "top-valley", // Add image path
      name: "Top Valley"
    },
    {
      id: 3,
      imgPath: "Meeahapullimala.jpg", // Add image path
      name: "Meesapulimalai"
    },
    {
      id: 4,
      imgPath: "kolukumalai", // Add image path
      name: "Kolukkumalai"
    },
    {
      id: 5,
      imgPath: "chinnar", // Add image path
      name: "Chinnar Wildlife Sanctuary"
    },
    {
      id: 6,
      imgPath: "pambadum_shola.jpg", // Add image path
      name: "Pambadum Shola National Park"
    }
  ];
  

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="h-fit px-8 lg:pl-20 xl:pl-32 2xl:pl-56 py-20 xl:py-24 2xl:py-30 flex flex-col gap-12 overflow-x-hidden  2xl:flex 2xl:w-full 2xl:justify-center [@media(min-width:2000px)]:items-center [@media(min-width:2000px)]:px-56">
      {/* Heading and nav buttons container */}
      <div className="w-full flex flex-col items-center md:flex-row md:justify-between gap-5 pr-0 lg:pr-10 xl:pr-20 2xl:pr-40 [@media(min-width:2000px)]:max-w-[1600px]">
        <h3 className="font-[manrope] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          Trekking Destinations
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
                    <div className="w-full h-full py-4 flex flex-col justify-end items-center gap-2.5">
                      <IKImage
                        urlEndpoint={IKURL}
                        path={item.imgPath ||"campingDest2.png"}
                        className="rounded-full min-h-[500px] object-cover"
                      />
                      <span className="rounded-xl px-6 flex items-center gap-2 py-2 w-fit bg-[#A5F211]">
                        <MapPin className="size-5" />
                        <h5 className="font-[manrope] text-sm md:text-xl">
                          {item.name}
                        </h5>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TrekkingDestinations;
