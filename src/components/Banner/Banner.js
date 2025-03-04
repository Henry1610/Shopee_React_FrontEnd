import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import module Swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Banner({ images }) {
    const voucher = [
        {
            image: "https://cf.shopee.vn/file/vn-50009109-5bf65d4dc0eb8f6b42074751e8b736a7_xhdpi",
            title: "Hàng chọn giá hời"
        },
        {
            image: "https://cf.shopee.vn/file/vn-50009109-8a387d78a7ad954ec489d3ef9abd60b4_xhdpi",
            title: "Mã giảm giá"
        },
        {
            image: "https://cf.shopee.vn/file/vn-11134258-7ras8-m3bzd4cdkkdd1c_xhdpi",
            title: "Miễn phí ship - Có Shopee"
        },
        {
            image: "https://cf.shopee.vn/file/vn-50009109-c02353c969d19918c53deaa4ea15bdbe_xhdpi",
            title: "Shopee Style Voucher 30%"
        },
        {
            image: "https://cf.shopee.vn/file/vn-11134258-7ra0g-m6f7wgeam6ch1c_xhdpi",
            title: "Voucher giảm đến 1 triệu"
        },
        {
            image: "https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi",
            title: "Khung giờ săn sale"
        },
        {
            image: "https://cf.shopee.vn/file/a08ab28962514a626195ef0415411585_xhdpi",
            title: "Hàng quốc tế"
        },
        {
            image: "https://cf.shopee.vn/file/vn-11134258-7ra0g-m6ow0co1pmqgd6_xhdpi",
            title: "Nạp thẻ, Dịch vụ & Vé tàu hỏa"
        },

    ]
    return (
        <div className="flex justify-center bg-white">
            <div className="grid grid-cols-10 py-7 px-40 max-w-[1200px] gap-1">

                {/* Phần Swiper (chiếm 6 cột) */}
                <div className="col-span-7 flex items-center justify-center">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                        grabCursor={true}
                        freeMode={true}
                        centeredSlides={true}
                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index} className="overflow-hidden">
                                <img
                                    src={img}
                                    alt={`Slide ${index}`}
                                    className="w-full h-[200px] object-fill rounded-sm"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Phần ảnh bên phải (chiếm 4 cột) */}
                <div className="col-span-3 flex flex-col gap-1">
                    <img
                        className="w-full h-1/2 object-fill rounded-sm"
                        src="https://cf.shopee.vn/file/sg-11134258-7rd3t-m6q96emwd9hw36_xhdpi"
                        alt="Banner 1"
                    />
                    <img
                        className="w-full h-1/2 object-fill rounded-sm"
                        src="https://cf.shopee.vn/file/sg-11134258-7rd6p-m6q9co7g9ti399_xhdpi"
                        alt="Banner 2"
                    />
                </div>
                <div className="col-span-10 grid grid-cols-4 gap-4 mt-4 ">
                {                   
                    voucher.map((item, index) => {
                        return (<div key={index} className="flex flex-col items-center bg-white shadow-md p-3 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer">
                            <div>
                                <img className="w-20 h-20 object-contain" src={item.image}  alt="ảnh lỗi" />
                            </div>
                            <div className="text-sm font-medium mt-2 text-center"> {item.title}</div>
                        </div>)
                    })
                }
                </div>
                
            </div>
        </div>
    );
};
