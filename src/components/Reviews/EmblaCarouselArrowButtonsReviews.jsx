import React, { useCallback, useEffect, useState } from 'react'
import styles from './Reviews.module.css'
import { FaPlay } from 'react-icons/fa6'

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

export const PrevButton = ({ className = '', ...restProps }) => (
  <button
    type="button"
    {...restProps}
    className={`${styles.embla__button} ${styles['embla__button--prev']} ${className}`}
  >
   <FaPlay className='text-white rotate-180'/>
  </button>
)

export const NextButton = ({ className = '', ...restProps }) => (
  <button
    type="button"
    {...restProps}
    className={`${styles.embla__button} ${styles['embla__button--next']} ${className}`}
  >
    <FaPlay className='text-white'/>
  </button>
)
