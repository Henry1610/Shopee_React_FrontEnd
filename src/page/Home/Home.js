import Banner from "../../components/Banner";
import Navbar from "../../layouts/Navbar";
import Wrapper from "../../components/Wrapper";
import CategoryList from "../../components/CategoryList/CategoryList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import ProductList from "../../components/CategoryList/ProductList";
import Footer from "../../layouts/Footer/Footer";
import Commit from "../../components/Commit";
const imagesBanner = [
    "https://cf.shopee.vn/file/vn-11134258-7ras8-m5184szf0klz56_xxhdpi",
    "https://cf.shopee.vn/file/sg-11134258-7rd4e-m6rq5u5jrr8b35_xxhdpi",
    "https://cf.shopee.vn/file/sg-11134258-7rd6t-m6p450fby2uqe7_xxhdpi",
    "https://cf.shopee.vn/file/sg-11134258-7rd5v-m6q96aaeq83t45_xxhdpi",
    "https://cf.shopee.vn/file/sg-11134258-7rd3v-m6p9b9yz5ij08a_xxhdpi",
    "https://cf.shopee.vn/file/sg-11134258-7rd5r-m6p9bc8tv3wybe_xxhdpi",
    "https://cf.shopee.vn/file/vn-11134258-7ra0g-m6p3qwtspq2g73_xxhdpi",
    "https://cf.shopee.vn/file/sg-11134258-7rd45-m6ru35iyz5ex92_xxhdpi",
    "https://cf.shopee.vn/file/sg-11134258-7rd4y-m6p9hoevxgnveb_xxhdpi"
];

function Home() {
    return (
        <div className="h-[2000px]">
            <Navbar />
            <Banner images={imagesBanner} />

            <Wrapper>
                <CategoryList />

                {/* Shopee Mall Section */}

                <div className="mt-8 bg-white p-4">
                    <div className="flex flex-wrap items-center justify-between">
                        {/* Tiêu đề & Icon */}
                        <div className="flex flex-wrap items-center font-semibold text-xl sm:text-lg">
                            <div className="mr-6 border-r-2 border-gray pr-4 m-3 sm:m-2 sm:pr-2 sm:border-r sm:mr-2">
                                <h2 className="text-2xl font-bold text-[#EE4D2D] sm:text-lg">SHOPEE MALL</h2>
                            </div>

                            {/* Danh sách ưu đãi */}
                            <div className="flex gap-6 flex-wrap sm:gap-3 sm:text-sm">
                                {[
                                    {
                                        img: "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepagefe/6c502a2641457578b0d5.png",
                                        text: "Trả hàng miễn phí 15 ngày",
                                    },
                                    {
                                        img: "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepagefe/511aca04cc3ba9234ab0.png",
                                        text: "Hàng chính hãng 100%",
                                    },
                                    {
                                        img: "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepagefe/16ead7e0a68c3cff9f32.png",
                                        text: "Miễn phí vận chuyển",
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-2 sm:gap-1">
                                        <img className="w-6 sm:w-5" src={item.img} alt={item.text} />
                                        <span className="text-base sm:text-xs">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Nút "Xem tất cả" */}
                        <div className="flex items-center text-[#EE4D2D] font-medium hover:underline cursor-pointer sm:text-sm">
                            <span className="text-lg sm:text-base">Xem tất cả</span>
                            <FontAwesomeIcon icon={faCircleChevronRight} className="ml-1 sm:text-sm" />
                        </div>
                    </div>

                    <div className="grid grid-cols-6 bg-white border-t-2 border-gray p-3">
                        {/* Ảnh lớn bên trái */}
                        <div className="col-span-2 shadow-lg flex justify-center items-center">
                            <img
                                className="w-full h-auto object-cover"
                                src="https://cf.shopee.vn/file/vn-11134258-7ras8-m4iespqewa2vee"
                                alt="Shopee Mall"
                            />
                        </div>

                        {/* Danh sách ưu đãi */}
                        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-4 col-span-4 content-center ml-3">
                            {[
                                {
                                    img: "https://down-vn.img.susercontent.com/file/5fb3f7b359a582f322ea39313e10260b@resize_w402_nl.webp",
                                    text: "Mua 1 tặng 1",
                                },
                                {
                                    img: "https://down-vn.img.susercontent.com/file/vn-50009109-7e80ab64bdc989f5c0862ed828f343a2@resize_w402_nl.webp",
                                    text: "Ưu đãi đến 50%",
                                },
                                {
                                    img: "https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lx6pdo1qwogrf1@resize_w402_nl.webp",
                                    text: "Mua 1 được 2",
                                },
                                {
                                    img: "https://down-vn.img.susercontent.com/file/vn-50009109-7ce7d5800afb2b6c80a7242236ec7409@resize_w402_nl.webp",
                                    text: "Mua là có quà",
                                },
                                {
                                    img: "https://down-vn.img.susercontent.com/file/vn-11134258-7ra0g-m6glb2udrprs42@resize_w402_nl.webp",
                                    text: "Mua 1 tặng 1",
                                },
                                {
                                    img: "https://down-vn.img.susercontent.com/file/be40023a9d9cff397a470460bc7a924d@resize_w402_nl.webp",
                                    text: "Deli siêu sale",
                                },
                                {
                                    img: "https://down-vn.img.susercontent.com/file/vn-11134258-7ras8-m4ycyi0ypc5414@resize_w402_nl.webp",
                                    text: "Mua 1 tặng 1",
                                },
                                {
                                    img: "https://down-vn.img.susercontent.com/file/vn-50009109-08a87dd1e828b4bef31dafa67d5300ec@resize_w402_nl.webp",
                                    text: "Quà mọi đơn",
                                },
                            ].map((item, index) => (
                                <div key={index} className="flex flex-col items-center relative">
                                    <img className="object-cover w-full h-auto" src={item.img} alt={item.text} />
                                    <div className="text-center text-sm text-[#EE4D2D] font-bold relative -mt-6 bg-white px-2">
                                        {item.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                <div className="my-4 bg-white border-b-2 border-[#EE4D2D] text-center p-4">
                    <span className="text-[#EE4D2D] text-xl font-bold ">GỢI Ý HÔM NAY</span>
                </div>
                <ProductList />
                <Commit />
                <Footer />
            </Wrapper>
        </div>
    );
}

export default Home;
