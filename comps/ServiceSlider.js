"use client"
import Image from "next/image";
import Service1Icon from '../public/services/service-icon1.svg';
import Service2Icon from '../public/services/service-icon2.svg';
import Service3Icon from '../public/services/service-icon3.svg';
import { Swiper, SwiperSlide } from 'swiper/react'; // Corrected import

// Import Swiper styles and modules
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation'

const services = [
  {
    Image: Service1Icon,
    name: "Pharmacy",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis dicta, modi voluptate dolorum eaque quisquam quaerat cumque? Libero, accusamus corporis?",
    btnText: 'Explore',
  },
  {
    Image: Service2Icon,
    name: "Breed-specific Haircuts",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis dicta.",
    btnText: 'Explore',
  },
  {
    Image: Service3Icon,
    name: "Cloths",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis dicta, modi voluptate dolorum eaque quisquam quaerat cumque? Libero, accusamus corporis?",
    btnText: 'Explore',
  },
];

export default function ServiceSlider() {
  return (
    <Swiper
     slidesPerView={1} 
     spaceBetween={30} 
     navigation={true} 
     modules={[Navigation]} 
     breakpoints={{
       768: { 
        slidesPerView: 2,
       },
       }} 
     className="serviceSlider min-h-[680px]">
      {services.map((service, index) => {
        return( <>
        <SwiperSlide className="border border-primary/20 bg-cream min-h-[560px] rounded-[66px] py-16 px-8" key={index}>
       
            <Image className="mb-9" src={service.Image} />
            <div className="text-[26px] font-medium mb-4">{service.name}</div>
            <div className="text-[20px] mb-8">{service.description}</div>
            <button className="btn btn-primary">{service.btnText}</button>
        
        </SwiperSlide>
        </>)
})}
    </Swiper>
  );
}
