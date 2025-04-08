import React from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButtonReviews";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtonsReviews";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./Reviews.module.css";
import { Quote } from "lucide-react";
import { FaQuoteLeft } from "react-icons/fa6";
import { IKImage } from "imagekitio-react";
import { IKURL } from "../../lib";

const Reviews = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  return (
    <div className="h-fit px-8 lg:px-20 xl:px-32 2xl:px-56 py-20 xl:py-24 2xl:py-40 flex flex-col gap-14">
      {/* Heading and nav buttons container */}
      <div className="w-full flex flex-col md:flex-row md:justify-between gap-5">
        <div className="flex flex-col xl:items-start gap-6">
          <h3 className="font-[manrope] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Customer Reviews
          </h3>
          <p className="font-[manrope] text-md md:text-lg lg:text-xl">
            Insights from Explorers: Customer Reviews that Speak Volumes
          </p>
        </div>
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
      <div>
        <section className={styles.embla}>
          <div className={styles.embla__viewport} ref={emblaRef}>
            <div className={styles.embla__container}>
              {slides.map((index) => (
                <div className={styles.embla__slide} key={index}>
                  <div className={styles.embla__slide__number}>
                    <div className="w-full h-full flex flex-col">
                      <div className="w-full h-full bg-[#A5F211] px-8 py-4">
                        <FaQuoteLeft className="size-6 mb-6" />
                        <p className="font-[manrope] text-sm">Tours and Travel was an absolute adventure extravaganza! From the moment we landed to the last goodbye, every detail was meticulously planned. The itinerary was diverse</p>
                      </div>
                      <div className="h-40 w-full bg-black relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 flex flex-col items-center gap-2">
                          {/* Image container */}
                          <div className="rounded-full size-20 overflow-hidden">
                            <img
                              className="object-cover"
                              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt="review"
                            />
                          </div>
                          <p className="text-white font-[manrope]">MATHEWS</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.embla__controls}>
            <div className={styles.embla__dots}>
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={`${styles.embla__dot} ${
                    index === selectedIndex
                      ? styles["embla__dot--selected"]
                      : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Reviews;
