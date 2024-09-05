"use client";
import { useState } from "react";
import SvgPic from '../components/SvgPic';
import SvgTile from "@/components/SvgTile";

export default function Home() {
  const [selectedSection, setSelectedSection] = useState("About Me");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([
    "/default.jpg",
    "https://s.itl.cat/pngfile/s/298-2982121_wallpaper-melbourne-australia-skyscrapers-night-ipad-pro-wallpaper.jpg",
    "/default.jpg",
    "https://e0.pxfuel.com/wallpapers/722/404/desktop-wallpaper-city-skyline-skyscrapers-night-buildings.jpg",
    "/default.jpg",
  ]);

  const [activeButton, setActiveButton] = useState(null);

  const sections = ["About Me", "Experiences", "Recommended"];
  const containerWidth = 614;
  const sectionWidth = containerWidth / sections.length;
  const highlightWidth = 195;
  const offset = 6.5;
  const selectedIndex = sections.indexOf(selectedSection);
  const translateX = selectedIndex * sectionWidth + (sectionWidth - highlightWidth) / 2 + offset;

  const handleClick = (section) => {
    setSelectedSection(section);
  };

  const handleNext = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1);
      setActiveButton('next');
      setTimeout(() => setActiveButton(null), 200); 
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setActiveButton('prev');
      setTimeout(() => setActiveButton(null), 200); 
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages([...images, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const hoverStyles = {
    boxShadow: `
      4px 4px 25px 7px rgba(0, 0, 0, 0.5),  /* Bottom and right shadow */
      -1px -1px 1px rgba(0, 0, 0, 0.1)  /* Less shadow on top and left */
    `,
  };
  
  return (
    <div className="relative h-screen w-screen opacity-100">
      <div className="absolute left-[1619px] top-[207px] z-50">
        <svg width="18" height="74" viewBox="0 0 18 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_2267_3337)">
            <rect x="1" y="1" width="8" height="64" rx="4" fill="url(#paint0_linear_2267_3337)" />
          </g>
          <defs>
            <filter id="filter0_d_2267_3337" x="0.0999999" y="0.0999999" width="17.8" height="73.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="4" dy="4" />
              <feGaussianBlur stdDeviation="2.45" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2267_3337" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2267_3337" result="shape" />
            </filter>
            <linearGradient id="paint0_linear_2267_3337" x1="-9" y1="8.5" x2="10.3151" y2="60.0069" gradientUnits="userSpaceOnUse">
              <stop stop-color="#888989" />
              <stop offset="1" stop-color="#4A4E54" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="inline-block absolute top-[565px] left-[953px] z-50">
        <div className="inline-block height">
          <div className="flex gap-4 p-2 ml-2.5 justify-center">
            <div className="grid grid-cols-3 gap-6 justify-center items-center px-2">
              {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image}
                    className="h-[179px] w-[190px] rounded-2xl transition-transform duration-500 transform grayscale hover:scale-110 hover:-rotate-[2deg] hover:opacity-100 opacity-25 hover:grayscale-0"
                    style={{ boxShadow: 'none' }} 
                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = hoverStyles.boxShadow}
                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-[935px] top-[113px] z-50">
        <SvgPic />
      </div>
      <div className="absolute left-[935px] top-[470px] z-50">
        <SvgPic />
      </div>

      <div
        className="h-[316px] w-[720px] bg-[#363C43] absolute left-[922px] top-[453px] rounded-[20px]"
        style={{
          boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.25)',
          boxSizing: 'border-box',
        }}
      >
        <div className="absolute top-[20px] left-[51px] h-[62px] w-[149px] bg-[#171717] rounded-[20px] flex justify-center items-center">
          <div className="text-white text-[20px] font-[500]">Gallery</div>
        </div>
        <div
          className="shadow-inner shadow-[#a7a4a4b5] absolute left-[381px] top-[30px] h-[46px] w-[131.32px] bg-[#3F454C] rounded-[104px] flex justify-center items-center relative cursor-pointer hover:bg-[#4F555C]"
          style={{
            boxShadow: `
              inset 0px 3.26px 3.26px 0px rgba(255, 255, 255, 0.15),
              inset 0px 0px 48.91px 0px rgba(255, 255, 255, 0.05),
              9px 10px 7.1px 0px rgba(0, 0, 0, 0.4),
              -0.5px -0.5px 6.9px 0px rgba(255, 255, 255, 0.25)
            `,
          }}
        >
          <div className="text-white text-[12px] uppercase font-[600]">+ Add Image</div>
          <input
            type="file"
            accept="image/*"
            className="absolute opacity-0 cursor-pointer"
            onChange={handleImageUpload}
          />
        </div>

        <button onClick={handleNext}>
          <div
            className={`h-[45px] w-[45px] rounded-full absolute left-[612px] top-[32px] ${activeButton === 'next' ? 'bg-gradient-to-r from-[#95BCE9] to-[#161718]' : 'bg-gradient-to-b from-[#303439] to-[#161718]'} flex justify-center items-center shadow-[2px_8px_22px_5px_black]`}
            style={{
              boxShadow: '4px 5px 30px 5px #101213, -5px -3px 30px -10px #96BEE7',
            }}
          >
            <div className="text-[#6F787C] text-2xl">-&gt;</div>
          </div>
        </button>
        <button onClick={handlePrev}>
          <div
            className={`h-[45px] w-[45px] rounded-full absolute left-[549px] top-[32px] ${activeButton === 'prev' ? 'bg-gradient-to-r from-[#95BCE9] to-[#161718]' : 'bg-gradient-to-b from-[#303439] to-[#161718]'} flex justify-center items-center shadow-[2px_8px_22px_5px_black]`}
            style={{
              boxShadow: '4px 5px 30px 5px #101213, -5px -3px 30px -10px #96BEE7',
            }}
          >
            <div className="text-[#6F787C] text-2xl">&lt;-</div>
          </div>
        </button>

        <div className="absolute left-[15px] top-[158px] z-50">
          <SvgTile />
        </div>

        {selectedImage && (
          <div className="absolute left-[200px] top-[158px] z-50">
            <img src={selectedImage} alt="Selected" className="h-[100px] w-[100px] rounded-lg object-cover" />
          </div>
        )}
      </div>

      <div className="absolute left-[976px] top-[433px] w-[652px] h-[4px] flex justify-center items-center flex-col">
        <div className="w-[85%] bg-[#363C43] h-[4px] rounded-full" />
        <div className="w-[85%] h-[4px] bg-black rounded-full opacity-40 blur-[1px]" />
      </div>

      <div className="h-[316px] w-[720px] bg-[#363C43] absolute left-[922px] top-[96px] rounded-[20px]">
        <div className="absolute left-[15px] top-[158px] z-50">
          <SvgTile />
        </div>

        <div className="h-[62px] w-[614px] left-[50px] top-[17px] bg-[#171717] rounded-[23px] flex items-center relative">
          <div
            className="absolute left-[-6.5px] top-[6px] h-[49px] w-[195px] bg-[#28292F] rounded-[16px] transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(${translateX}px)`,
              boxShadow: `
                -8.43px -16.87px 50.6px -16.87px #485B71,
                13.49px 16.87px 67.47px 8.43px #0A0A0A`,
              zIndex: 1,
            }}
          />

          {sections.map((section) => (
            <div
              key={section}
              className="cursor-pointer p-2 flex-1 text-center relative z-10 transition-colors duration-500 font-[500]"
              style={{
                color: section === selectedSection ? 'white' : '#9DA8AE',
              }}
              onClick={() => handleClick(section)}
            >
              {section}
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute bg-[#363C43] rounded-lg p-4"
        style={{
          width: '611px',
          height: '175px',
          left: '975px',
          top: '190px',
          color: '#969696',
          fontSize: '20px',
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          textAlign: 'left',
        }}
      >
        Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.<br /><br />
        I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years.
      </div>

      <div className="absolute left-[976px] top-[790px] w-[652px] h-[4px] flex justify-center items-center flex-col">
        <div className="w-[85%] bg-[#363C43] h-[4px] rounded-full" />
        <div className="w-[85%] h-[4px] bg-black rounded-full opacity-40 blur-[1px]" />
      </div>
    </div>
  );
}
