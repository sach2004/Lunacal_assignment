import { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://wallpaper.forfun.com/fetch/02/025f165ab54fbef0c6f520ba048857da.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbdMMDF1lSj4pxrNeB3xFPfewV5Ki5_8R47A&s",
    "https://wallpapers.com/images/featured/skyscraper-8scefc1q0icwddbz.jpg",
    "https://s.itl.cat/pngfile/s/298-2982121_wallpaper-melbourne-australia-skyscrapers-night-ipad-pro-wallpaper.jpg",
    "https://e0.pxfuel.com/wallpapers/722/404/desktop-wallpaper-city-skyline-skyscrapers-night-buildings.jpg",
    "https://wallpaper.forfun.com/fetch/02/025f165ab54fbef0c6f520ba048857da.jpeg",
  ];

  return (
    <div className="inline-block height">
      <div className="flex gap-4 p-2 ml-2.5 justify-center">

        <div className="grid grid-cols-3 gap-6 justify-center items-center px-2">
          {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                className="h-[179px] w-[190px] rounded-2xl transition-transform duration-500 
                transform grayscale hover:scale-110 hover:-rotate-[2deg] hover:opacity-100 opacity-25 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
