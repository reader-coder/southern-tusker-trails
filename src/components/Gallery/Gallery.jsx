import { IKImage } from "imagekitio-react";
import React from "react";
import { Galleria } from "primereact/galleria";
import { IKURL } from "../../lib";

const Gallery = () => {
  const images = [
    { path: "1.JPG" },
    { path: "2.JPG" },
    { path: "3.JPG" },
    { path: "4.JPG" },
    { path: "5.jpg" },
    { path: "6.jpg" },
    { path: "7.jpg" },
    { path: "8.jpg" },
    { path: "9.jpg" },
    { path: "10.jpg" },
    { path: "11.jpg" },
    { path: "12.jpg" },
    { path: "13.JPG" },
    { path: "14.JPG" },
    { path: "15.JPG" },
    { path: "16.JPG" },
    { path: "17.JPG" },
    { path: "18.JPG" },
    { path: "19.jpg" },
    { path: "20.heif" },
    { path: "21.heif" },
    { path: "22.jpeg" },
    { path: "23.heif" },
    { path: "24.heif" },
    { path: "25.jpg" },
    { path: "26.jpg" },
    { path: "27.jpg" },
    { path: "28.jpg" },
    { path: "29.jpg" },
    { path: "30.jpg" },
    { path: "31.jpg" },
    { path: "32.jpg" },
    { path: "33.jpg" },
    { path: "34.jpg" },
    { path: "35.jpg" },
    { path: "36.jpg" },
    { path: "37.jpg" },
    { path: "38.jpg" },
    { path: "39.jpg" },
    { path: "40.heif" },
    { path: "41.jpg" },
    { path: "42.jpg" },
    { path: "43.jpg" },
    { path: "44.jpg" },
    { path: "45.jpg" },
    { path: "46.jpg" },
    { path: "47.jpg" },
    { path: "48.JPG" },
    { path: "49.JPG" },
    { path: "50.JPG" },
    { path: "51.JPG" },
    { path: "52.JPG" },
    { path: "53.JPG" },
    { path: "54.JPG" },
    { path: "55.JPG" },
    { path: "56.JPG" },
    { path: "57.JPG" },
    { path: "58.jpg" },
    { path: "59.jpg" },
    { path: "60.jpg" },
  ];

  const responsiveOptions = [
    {
      breakpoint: "991px",
      numVisible: 4,
    },
    {
      breakpoint: "767px",
      numVisible: 3,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
    },
  ];

  const itemTemplate = (item) => {
    return (
      <IKImage urlEndpoint="https://ik.imagekit.io/gzqqjuhn9/Gallery/" path={item.path} style={{ width: "100%",minHeight:"400px" ,maxHeight:"600px", objectFit:"cover", borderRadius:"20px", marginBottom:"20px" }} />
    );
  };

  const thumbnailTemplate = (item) => {
    return <IKImage urlEndpoint="https://ik.imagekit.io/gzqqjuhn9/Gallery/" path={item.path} />;
  };

  return (
    <div className="h-fit px-8 lg:px-20 xl:px-32 2xl:px-56 bg-[url(https://ik.imagekit.io/gzqqjuhn9/popularActivitiesBG.png?updatedAt=1744085620695)] bg-center bg-no-repeat py-20 xl:py-24 2xl:py-40 flex flex-col gap-20">
      <div className="flex flex-col items-center justify-center xl:items-start gap-6">
        <h3 className="font-[manrope] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          Gallery
        </h3>
        <p className="font-[manrope] text-md md:text-lg lg:text-xl xl:2xl text-center md:text-left">
          Where every trail tells a story
        </p>
      </div>
      <div className="flex justify-center xl:px-40">
        <Galleria
          value={images}
          responsiveOptions={responsiveOptions}
          numVisible={5}
          style={{ width:"100%", }}
          item={itemTemplate}
          thumbnail={thumbnailTemplate}
        />
      </div>
    </div>
  );
};

export default Gallery;
