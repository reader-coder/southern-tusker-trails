import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./AdventureCarousel.module.css";
import { PrevButton, NextButton, usePrevNextButtons } from "./ArrowButtons";
import { IKImage } from "imagekitio-react";
import { IKURL } from "../../lib";

const AdventureCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentDesc, setCurrentDesc]=useState(null)

  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        const index = emblaApi.selectedScrollSnap();
        setCurrentSlide(index);
        setCurrentDesc(adventureList[index+1]?.desc || adventureList[0]?.desc);
      };
      emblaApi.on("select", onSelect);
      onSelect(); // Set initial state on mount
    }
  }, [emblaApi]);
  
  
  // useEffect(() => {
  //   if (emblaApi) console.log(emblaApi.selectedScrollSnap());
  // }, [emblaApi]);

  const adventureList = [
    {
      id: 0,
      name: "Zipline",
      imgPath: "zipline",
      desc: "Ever wondered what it feels like to fly? Ziplining is probably the closest you can get! It’s that perfect mix of thrill, speed, and stunning views all rolled into one adventure. And if you’re looking for the ultimate zipline experience in India, Kolukkumalai should be on your list. Why? Because it’s home to India’s longest zipline — a jaw-dropping 1.8 km ride right above rolling tea plantations and misty mountain valleys. Imagine gliding through the clouds with the wind in your face and breathtaking scenery all around — now that’s an adventure worth bragging about!",
    },
    {
      id: 1,
      name: " Mountaineering",
      imgPath: "mountaneering.jpg",
      desc: "If climbing heights and chasing views sounds like your kind of adventure, then mountaineering in Munnar is something you shouldn’t miss! Known for its rolling hills, lush tea gardens, and misty peaks, Munnar offers some fantastic routes for those who love to explore on foot — and upwards. The rugged terrain, rocky trails, and steep climbs here add just the right dose of challenge for adventure seekers. And the reward? Stunning panoramic views of the Western Ghats, peaceful hilltop moments, and that unbeatable feeling of standing above the clouds. Whether you’re a beginner looking for a fun climb or an experienced trekker chasing new heights, Munnar has a mountain waiting for you!",
    },
    {
      id: 2,
      name: "  Rock climbing & Rappelling",
      imgPath: "rock-climbing.jpg",
      desc: "Looking to test your strength, balance, and a little bit of courage? Rock climbing and rappelling in Munnar offer the perfect adventure combo! The rocky cliffs around Munnar, surrounded by lush greenery and misty hills, create an exciting natural playground for adventure lovers. Climbing up these rugged rock faces gives you that full-body challenge — every grip, every step pushing you closer to the top. And once you’ve conquered the climb, it’s time for the real thrill — rappelling down! Lean back, trust the rope, and enjoy that heart-racing descent with stunning views all around. It’s the perfect way to step out of your comfort zone and create memories that’ll stick long after the climb is over!",
    },
    {
      id: 3,
      name: " kayaking",
      imgPath: "kayaking",
      desc: "If peaceful waters with a hint of adventure sound like your kind of vibe, kayaking in Munnar is just the thing to try! Away from the busy hill stations and crowded viewpoints, Munnar’s calm lakes and scenic reservoirs offer the perfect setting to paddle your way through nature. Whether you’re gliding across still waters, floating past lush greenery, or simply soaking in the mountain reflections on the surface, kayaking here is both relaxing and adventurous. It’s a great way to slow down, connect with nature, and enjoy Munnar from a whole new perspective — one gentle paddle at a time!",
    },
    {
      id: 4,
      name: " Mountain cycling",
      imgPath: "mountain-biking",
      desc: "There’s something magical about cycling through the hills of Munnar — cool mountain breeze on your face, endless stretches of tea gardens on either side, and winding roads that call out to every adventure lover. Riding through these scenic trails is not just about fitness or speed; it’s about soaking in the beauty of Munnar at your own pace. Whether you’re cruising downhill, pedalling past misty valleys, or taking a break to sip fresh tea straight from a plantation, cycling here feels like freedom on two wheels. Every turn brings a new view, every climb a little challenge — and every moment, pure joy.",
    },
  ];

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
      <div className="w-full max-w-[70rem] h-full relative pb-6 md:pb-0">
        <section className={styles.embla}>
          <div className={styles.embla__viewport} ref={emblaRef}>
            <div className={styles.embla__container}>
              {adventureList.map((item) => (
                <div className={styles.embla__slide} key={item.id}>
                  <div className={styles.embla__slide__number}>
                    <div className="w-full h-full flex flex-col gap-3 items-center">
                      <div className="w-full h-full overflow-hidden">
                        <IKImage
                          urlEndpoint={IKURL}
                          path={item.imgPath}
                          alt={item.name}
                          className="h-full w-full object-cover rounded-4xl"
                        />
                      </div>
                      <p className="font-[manrope] text-lg lg:text-xl xl:text-2xl text-center">
                        {item.name}
                      </p>
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
      <div>
        <p className="font-[manrope] text-center">
          {currentDesc}
        </p>
      </div>
    </div>
  );
};

export default AdventureCarousel;
