import React from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'

import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtonsUpcoming'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './UpcomingPackages.module.css'


const UpcomingPackages = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)


  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)
  return (
    <div className='bg-[url(https://ik.imagekit.io/gzqqjuhn9/upcomingBG.png?updatedAt=1744002190078)] bg-cover bg-no-repeat bg-center h-[800px] xl:h-[600px] flex flex-col xl:flex-row gap-20 items-center justify-between pt-20 md:pt-30 pb-10  xl:pl-32 2xl:pl-40'>
      <div className='h-full w-full px-8 lg:pl-20 flex flex-col items-center justify-center md:items-start gap-6'>
        <h3 className='font-[manrope] text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold'>Upcoming Packages</h3>
        <p className='text-white font-[manrope] text-md md:text-lg lg:text-xl xl:2xl text-center md:text-left'>Our meticulously curated itineraries promise unforgettable experiences, from breathtaking landscapes to vibrant cultures.</p>
      </div>
    <section className={styles.upcomingPackages}>
  <div className={styles.upcomingPackages__viewport} ref={emblaRef}>
    <div className={styles.upcomingPackages__container}>
      {slides.map((item,index) => (
        <div className={styles.upcomingPackages__slide} key={index}>
          <div className={styles.upcomingPackages__slide__number}>
            <div className={`w-full h-full rounded-[1.8rem] flex flex-col justify-end p-4 gap-2 bg-cover bg-center`} style={{backgroundImage:`url(${item.img})`}}>
            <p className='text-white text-xl sm:text-3xl font-[manrope]'>{item.plan}</p>
            <p className='text-white text-lg font-[manrope] font-light'>{item.people}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  <div className={styles.upcomingPackages__controls}>
    <div className={styles.upcomingPackages__buttons}>
      <PrevButton
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
        className={`${styles.upcomingPackages__button} ${styles['upcomingPackages__button--prev']}`}
      />
      <NextButton
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
        className={`${styles.upcomingPackages__button} ${styles['upcomingPackages__button--next']}`}
      />
    </div>
  </div>
</section>
    </div>
  )
}

export default UpcomingPackages