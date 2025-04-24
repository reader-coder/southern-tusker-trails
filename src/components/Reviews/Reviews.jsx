import React from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButtonReviews";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtonsReviews";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./Reviews.module.css";
import { FaQuoteLeft } from "react-icons/fa6";
import { IKImage } from "imagekitio-react";
import { IKURL } from "../../lib";

const Reviews = () => {
  const reviews = [
    {
      id: 0,
      name: "Aarav Menon",
      review: "Southern Tusker Trails made our Munnar trek unforgettable. From scenic paths to kind guides, everything was perfect. Every moment felt curated. Truly a great escape into nature’s lap!"
    },
    {
      id: 1,
      name: "Neha Suresh",
      review: "Absolutely thrilling! The sunrise hike, campfire vibes, and great food made it amazing. Southern Tusker Trails blended safety, fun, and adventure into one unforgettable experience!"
    },
    {
      id: 2,
      name: "Rohit Varma",
      review: "Went with friends and had a blast! The entire trip was smooth—right from travel to camping. The team at Southern Tusker Trails handled everything with care. Loved the Munnar views too!"
    },
    {
      id: 3,
      name: "Divya Krishnan",
      review: "What a weekend! Southern Tusker Trails gave us great trails, cheerful guides, and cozy camps. The trek was full of fun, laughter, and memories. Highly recommended for a refreshing break!"
    },
    {
      id: 4,
      name: "Karan Nair",
      review: "Challenging yet fun! The climb, the views, and the vibe—everything was spot on. Southern Tusker Trails planned every detail well. Nature lovers, this is your perfect Munnar getaway!"
    },
    {
      id: 5,
      name: "Sneha Ramesh",
      review: "Our Munnar trek with Southern Tusker Trails was smooth and scenic. From pickup to camping, it was top-notch. The team’s warmth and planning made it a perfect escape into the wild."
    },
    {
      id: 6,
      name: "Vishnu Raj",
      review: "Best trekking experience ever! Southern Tusker Trails made it memorable with their detailed planning and lovely guides. Loved the bonfire nights and serene sunrise from the peaks!"
    },
    {
      id: 7,
      name: "Meera Thomas",
      review: "From the trails to the tents, every part was great! Southern Tusker Trails offered a fun, safe, and scenic adventure. Would surely return for another peaceful trek in the Munnar hills."
    }
  ];
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });

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
            Client Reviews
          </h3>
          <p className="font-[manrope] text-md md:text-lg lg:text-xl">
            Insights from explorers: Client reviews that speak volumes
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
              {reviews.map((item) => (
                <div className={styles.embla__slide} key={item.id}>
                  <div className={styles.embla__slide__number}>
                    <div className="w-full h-full flex flex-col">
                      <div className="w-full h-full bg-[#A5F211] px-8 py-4">
                        <FaQuoteLeft className="size-6 mb-6" />
                        <p className="font-[manrope] text-sm ">{item.review}</p>
                      </div>
                      <div className="h-40 w-full bg-black relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 flex flex-col items-center gap-2">
                          {/* Image container */}
                          <div className="rounded-full size-20 overflow-hidden">
                            <IKImage urlEndpoint={IKURL} path="user.png"/>
                          </div>
                          <p className="text-white font-[manrope]">{item.name}</p>
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
