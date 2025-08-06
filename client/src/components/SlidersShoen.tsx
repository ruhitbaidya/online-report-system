import Zoom from "react-medium-image-zoom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "react-medium-image-zoom/dist/styles.css";
type TslideImg = {
  image: string[];
};
const SlidersShoen = ({ image }: TslideImg) => {
  return (
    <div className="w-[80px] h-[80px]">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {image?.map((img) => (
          <SwiperSlide>
            {/* <img
              className="w-[80px] h-[80px] object-cover rounded-lg"
              src={img}
            /> */}
            <Zoom>
              <img
                className="w-[50px] h-[50px]"
                alt="That Wanaka Tree, New Zealand by Laura Smetsers"
                src={img}
                width="500"
              />
            </Zoom>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlidersShoen;
