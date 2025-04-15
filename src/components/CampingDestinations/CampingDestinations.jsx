// EmblaCarousel.jsx
import React from "react";
import styles from "./CampingDestinations.module.css";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtonsCampingDestinations";
import useEmblaCarousel from "embla-carousel-react";
import { MapPin } from "lucide-react";

const CampingDestinations = () => {
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
    <div className="h-fit px-8 lg:pl-20 xl:pl-32 2xl:pl-56 py-20 xl:py-24 2xl:py-30 flex flex-col gap-6 overflow-x-hidden  2xl:flex 2xl:w-full 2xl:justify-center [@media(min-width:2000px)]:items-center [@media(min-width:2000px)]:px-56">
      {/* Heading and nav buttons container */}
      <div className="w-full flex flex-col items-center md:flex-row md:justify-between gap-5 pr-0 lg:pr-10 xl:pr-20 2xl:pr-40 [@media(min-width:2000px)]:max-w-[1600px]">
        <h3 className="font-[manrope] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          Camping Destinations
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
                    <div
                      className="w-full h-full py-4 flex flex-col justify-end bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${item.imgPath})` }}
                    >
                      <div className="bg-[#A5F211] w-fit px-4 py-2 flex items-center gap-1.5 rounded-tr-2xl rounded-br-2xl">
                        <MapPin className="size-5" />
                        <p className="font-[manrope] text-sm sm:text-lg md:text-xl">
                          {item.name}
                        </p>
                      </div>
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

export default CampingDestinations;
