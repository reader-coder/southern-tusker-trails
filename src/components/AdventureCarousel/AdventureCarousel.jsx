import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./AdventureCarousel.module.css";
import { PrevButton, NextButton, usePrevNextButtons } from "./ArrowButtons";
import { IKImage } from "imagekitio-react";
import { IKURL } from "../../lib";

const AdventureCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });
  const SLIDE_COUNT = 6;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="h-fit px-8 lg:px-20 xl:px-32 2xl:px-56 py-20 xl:py-24 2xl:py-40 flex flex-col items-center gap-12">
      <h3 className="font-[manrope] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
        Our Adventure Activities
      </h3>
      <div className="w-full max-w-[70rem] h-full relative">
        <section className={styles.embla}>
          <div className={styles.embla__viewport} ref={emblaRef}>
            <div className={styles.embla__container}>
              {slides.map((index) => (
                <div className={styles.embla__slide} key={index}>
                  <div className={styles.embla__slide__number}>
                    <div className="w-full h-full flex flex-col gap-3 items-center">
                      <IKImage
                        urlEndpoint={IKURL}
                        path="adventureBG.webp"
                        className="w-full h-full object-cover rounded-4xl"
                      />
                      <p className="font-[manrope] text-2xl">Zip Lining</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="w-full flex justify-center absolute md:top-[40%] left-0 z-20">
          <div className="max-w-[70rem] w-full flex justify-between ">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
        {/* Overlay left */}
        <div className="absolute hidden md:block top-0 left-0 h-full w-[20%] bg-gradient-to-r from-white to-transparent z-10"></div>
        {/* Overlay right */}
        <div className="absolute hidden md:block top-0 right-0 h-full w-[20%] bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </div>
  );
};

export default AdventureCarousel;
