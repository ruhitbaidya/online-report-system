import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
type TslideImg = {
  image: string[];
};
const SlidersShoen = ({ image }: TslideImg) => {
  return (
    <div className="w-[80px] h-[80px]">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {image?.map((img) => (
          <SwiperSlide>
            <img
              className="w-[80px] h-[80px] object-cover rounded-lg"
              src={img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlidersShoen;
