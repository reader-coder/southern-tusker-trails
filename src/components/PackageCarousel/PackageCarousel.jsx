// EmblaCarousel.jsx
import React, { useState } from "react";
import styles from "./PackageCarousel.module.css";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtonsPackageCarousel";
import useEmblaCarousel from "embla-carousel-react";
import { MapPin, X } from "lucide-react";
import { IKImage } from "imagekitio-react";
import { IKURL } from "../../lib";
import PackageLineItem from "./PackageLineItem";
import { FaFilePdf } from "react-icons/fa6";

const PackageCarousel = ({slides}) => {
  const [sidebar, setSidebar] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });


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
          Packages
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
                          path={item.imgPath}
                          className="h-full object-cover w-full object-center"
                        />
                      </div>
                      {/* Package Name */}
                      <h4 className="font-[manrope] text-xl lg:text-2xl">
                        {item.name}
                      </h4>
                      {/* Package information */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <MapPin className="size-5" />
                          <p className="font-[manrope] text-sm">
                            {item.location}
                          </p>
                        </div>
                        <div className="w-fit px-4 py-2 border-1 border-black rounded-md">
                          <p className="font-[manrope] text-sm">{item.duration}</p>
                        </div>
                      </div>
                      {/* Price information */}
                      {
                        item.rate &&
                        <div className="flex items-end">
                        <p className="text-2xl lg:text-4xl font-[manrope] font-semibold">₹{item.rate}</p>
                        <p className="text-xl font-[manrope] text-gray-500">
                          /Person
                        </p>
                      </div>
                      }
                      {/* Inclusions */}
                      <div className="mt-3 flex flex-col gap-2">
                        {
                          item.highlights?.map((highlightItem, index)=>(
                            <PackageLineItem key={index}
                            text={highlightItem}
                          />
                          ))
                        }

                      </div>
                      <div className="flex justify-center">
                        <a
                          href={item.pdfLink}
                          target="_blank"
                          className="bg-[#a5f211] w-full px-3 py-2 rounded-md font-[manrope] text-center text-xl mt-2 cursor-pointer"
                        >
                          View more
                        </a>
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
      {/* {sidebar && (
        <div
          onClick={() => setSidebar((prev) => !prev)}
          className="fixed top-0 left-0 w-full h-screen backdrop-blur-md z-10 pointer-events-all"
        ></div>
      )}
      <div
        className={`fixed top-0 ${
          sidebar ? "right-0" : "-right-[100%]"
        } w-full md:w-[75%] h-screen bg-white
         z-20 transition-all duration-300 shadow-2xl`}
      >
        <div className="relative w-full h-full px-4 py-4 lg:py-8 xl:py-10 md:px-4 lg:px-8 xl:px-16 2xl:px-20">
          <div className="w-full flex justify-end lg:py-4">
            <button
              onClick={() => setSidebar((prev) => !prev)}
              className="bg-[#a5f211] w-fit px-3 py-2 rounded-md font-[manrope] text-xl mt-2 cursor-pointer"
            >
              <X />
            </button>
          </div>
          <div className="h-full overflow-y-scroll">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              velit, esse earum eveniet sapiente nostrum voluptates ut animi
              libero vitae porro nam maiores sed officiis ipsum eum ducimus
              numquam sint sit accusamus quasi pariatur. Perferendis id
              molestias aperiam nemo accusamus sequi ad ratione minima beatae
              temporibus nobis, porro in. Sapiente consequuntur ipsum excepturi
              inventore, mollitia, sit nemo voluptatem aliquid temporibus, culpa
              consequatur aspernatur? Adipisci facilis cumque beatae laudantium
              ad aliquam quisquam, quos expedita praesentium! Odio laborum
              maxime eligendi dicta placeat corrupti fugit ipsa ipsum optio
              repellendus, illo laboriosam tenetur? A aspernatur unde pariatur
              accusantium neque commodi quidem, expedita quisquam nisi labore
              iure inventore ducimus quos eveniet deserunt voluptates modi
              cumque, reprehenderit maxime consequuntur hic similique? Minima
              temporibus nostrum, quam eos cumque, voluptatem earum aut dolor
              saepe cum sed cupiditate incidunt accusantium, quibusdam id
              mollitia nesciunt labore maiores at. Perspiciatis sint, eligendi
              voluptatum quisquam quidem fuga! Aspernatur delectus accusantium
              at vitae asperiores adipisci maiores sed. Vel aliquid laborum
              adipisci beatae rerum assumenda corporis! Nam distinctio quo
              placeat odit animi harum possimus totam tempora eveniet quidem
              explicabo culpa velit veritatis impedit, laudantium ullam!
              Perspiciatis esse illum aperiam officia necessitatibus non, hic
              quasi molestias quis autem alias assumenda voluptas. Veniam modi
              facere ipsum? In natus corrupti, aliquid ab doloremque perferendis
              tempore esse eos maxime quia similique facilis autem officia
              quaerat, repellat ipsum. Amet, totam explicabo dolorum
              voluptatibus sint dolor ipsam atque modi omnis eius, maiores
              quidem officiis corporis qui pariatur quas, accusantium sit vitae
              eos animi voluptas accusamus! Dolores, deleniti vitae? Soluta
              mollitia natus quis quibusdam. Autem pariatur fugit quisquam atque
              nam animi eos, ipsam vero aliquam, nihil nulla ea vitae deserunt,
              harum vel maxime beatae sequi laboriosam maiores suscipit quam
              praesentium ab. Praesentium quia odit eos aspernatur quas totam
              necessitatibus fugit modi veniam aliquam, facere, provident vero
              repellendus optio cupiditate eligendi deserunt corporis quisquam
              blanditiis debitis nostrum esse. Dignissimos rerum quod omnis
              neque ratione labore esse asperiores totam facilis sapiente,
              dolorum sint voluptas possimus, sequi ad repellendus iure aut
              accusantium tempora est, tenetur eius quia. Laboriosam vel odio
              nemo, mollitia consequuntur sed ipsum inventore quo ea, molestiae,
              asperiores ipsa delectus facilis possimus deserunt pariatur
              dignissimos beatae nesciunt consequatur quos? Animi est hic
              tempora totam expedita in aliquid molestiae non consequatur natus
              nisi ipsam, laborum itaque eligendi perferendis fugiat aut illum
              nemo, temporibus veritatis doloremque at corrupti neque? Numquam,
              corporis? Alias repellendus culpa deleniti sequi non architecto
              consequuntur corrupti! Explicabo itaque eligendi quod deserunt
              unde, excepturi porro error labore repellendus impedit aut nemo
              accusamus harum vero doloribus aspernatur vel debitis et, esse
              provident sequi, non obcaecati magnam. In esse placeat omnis.
              Commodi itaque totam ipsum aperiam sit quibusdam vero ex labore
              error optio. Deleniti id quas hic est. Reprehenderit vel et
              commodi sint soluta ea. Molestias ullam doloribus eum corrupti
              temporibus aut itaque perferendis alias dolor, rem vitae placeat
              qui quam aliquid maiores sequi fugiat vel porro est. Iusto ratione
              ducimus, aliquam reprehenderit, quasi autem molestiae vitae
              temporibus est magnam accusantium optio perspiciatis libero
              repudiandae beatae sed cum assumenda. Eveniet, accusantium! Eius,
              facilis?
            </p>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[50%] py-20 bg-gradient-to-t from-white to-transparent flex items-end justify-center">
            <a
              href="https://ik.imagekit.io/gzqqjuhn9/PDF/Yellapetty%20camp.pdf"
              target="_blank"
              onClick={() => setSidebar((prev) => !prev)}
              className="bg-[#a5f211] w-fit px-3 py-2 rounded-md font-[manrope] text-xl mt-2 cursor-pointer flex items-center gap-2"
            >
              <span>
                <FaFilePdf />
              </span>
              View more
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default PackageCarousel;
