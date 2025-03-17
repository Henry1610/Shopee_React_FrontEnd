import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation,Autoplay } from "swiper/modules";
import './Category.css'
const defaultImages = {
  beauty: "https://down-vn.img.susercontent.com/file/ef1f336ecc6f97b790d5aae9916dcb72@resize_w320_nl.webp",
  fragrances: "https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857@resize_w320_nl.webp",
  furniture: "https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d@resize_w320_nl.webp",
  groceries: "https://down-vn.img.susercontent.com/file/c432168ee788f903f1ea024487f2c889@resize_w320_nl.webp",
  "home-decoration": "https://down-vn.img.susercontent.com/file/e4fbccba5e1189d1141b9d6188af79c0@resize_w320_nl.webp",
  "kitchen-accessories": "https://down-vn.img.susercontent.com/file/24b194a695ea59d384768b7b471d563f@resize_w320_nl.webp",
  laptops: "https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d@resize_w320_nl.webp",
  "mens-shirts": "https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b@resize_w320_nl.webp",
  "mens-shoes": "https://down-vn.img.susercontent.com/file/74ca517e1fa74dc4d974e5d03c3139de@resize_w320_nl.webp",
  "mens-watches": "https://down-vn.img.susercontent.com/file/vn-11134258-7ra0g-m792xzpo4v8z6c",
  "mobile-accessories": "https://down-vn.img.susercontent.com/file/vn-11134258-7ra0g-m791wj87h9v7a1",
  motorcycle: "https://down-vn.img.susercontent.com/file/vn-11134258-7ra0g-m792ysl1vuv063",
  "skin-care": "https://down-vn.img.susercontent.com/file/vn-11134258-7ra0g-m792ysl1vuv063",
  smartphones: "https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca@resize_w320_nl.webp",
  "sports-accessories": "https://down-vn.img.susercontent.com/file/6cb7e633f8b63757463b676bd19a50e4@resize_w320_nl.webp",
  sunglasses: "https://down-vn.img.susercontent.com/file/vn-11134258-7ra0g-m792ysl1vuv063",
  tablets: "https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d@resize_w320_nl.webp",
  tops: "https://down-vn.img.susercontent.com/file/36013311815c55d303b0e6c62d6a8139@resize_w320_nl.webp",
  vehicle: "https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334@resize_w320_nl.webp",
  "womens-bags": "https://down-vn.img.susercontent.com/file/fa6ada2555e8e51f369718bbc92ccc52@resize_w320_nl.webp",
  "womens-dresses": "https://down-vn.img.susercontent.com/file/75ea42f9eca124e9cb3cde744c060e4d@resize_w320_nl.webp",
  "womens-jewellery": "https://down-vn.img.susercontent.com/file/8e71245b9659ea72c1b4e737be5cf42e@resize_w320_nl.webp",
  "womens-shoes": "https://down-vn.img.susercontent.com/file/48630b7c76a7b62bc070c9e227097847@resize_w320_nl.webp",
  "womens-watches": "https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260@resize_w320_nl.webp"
};
function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category-list ") // Thay thế bằng URL API thực tế
      .then((response) => response.json())
      .then((data) => {
        const updatedCategories = data.map((name) => ({
          name,
          image: defaultImages[name]
        }));
        setCategories(updatedCategories);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);
  return (
    <div className="w-full bg-white mt-4 p-3 rounded-lg shadow-lg">
      <h1 className="text-xl text-[#EE4D2D] font-bold pb-4">DANH MỤC</h1>
      <Swiper
        className="custom-swiper-nav custom-swiper"

        modules={[Navigation, Autoplay]} // Thêm Autoplay vào modules
        navigation
        autoplay={{
          delay: 1000, 
          disableOnInteraction: false, 
        }}
        slidesPerView={5}
        spaceBetween={10}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 8 },
        }}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <Link to={`/products?category=${category.name}`}>
              <div className="flex flex-col items-center cursor-pointer">
                <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-300">
                  <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                </div>
                <p className="mt-2 text-sm font-medium text-gray-700">{category.name}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CategoryList;
