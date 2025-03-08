import { useEffect, useState } from "react";

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) =>
        console.error("Lỗi khi fetch categories:", error)
      );
  }, []); // Đảm bảo chỉ chạy 1 lần khi component mount

  return (
    <div className="w-full bg-white mt-4 p-3 rounded-lg shadow-lg">
      <div className="font-bold pb-6 pl-3">
        <h1 className="text-xl text-[#EE4D2D]">DANH MỤC</h1>
      </div>
      <div className="flex justify-center flex-wrap gap-2 pb-3">
        {categories.map((category, index) => (
          <a
            key={index}
            href={`#${category}`}
            className="transform transition duration-300 hover:scale-105"
          >
            <div className=" text-sm font-medium border-2 border-[#EE4D2D] text-[#EE4D2D]  rounded-full px-2 py-1 hover:bg-[#EE4D2D] hover:text-white">
              {category.name}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
