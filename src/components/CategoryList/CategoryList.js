import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import useFetch from "../../useFetch";

function CategoryList() {
  const [searchParams] = useSearchParams();
  const selectedCategories = searchParams.get("category")?.split(",") || [];
  
  const { data, err, loading } = useFetch('https://dummyjson.com/products/category-list');

  // Kiểm tra nếu data chưa load
  if (loading) return <p>Loading...</p>;
  if (err) return <p>Error: {err}</p>;

  

  return (
    <div className="w-full bg-white mt-4 p-3 rounded-lg shadow-lg">
      <div className="font-bold pb-6 pl-3">
        <h1 className="text-xl text-[#EE4D2D]">DANH MỤC</h1>
      </div>
      <div className="flex justify-center flex-wrap gap-2 pb-3">
        {data.map((category, index) => (
          <Link
            key={index}
            to={`/products?category=${category}`}
            className="transform transition duration-300 hover:scale-105"
          >
            <div className="text-sm font-medium border-2 border-[#EE4D2D] text-[#EE4D2D] rounded-full px-2 py-1 hover:bg-[#EE4D2D] hover:text-white">
              {category}
            </div>
          </Link>
        ))}
      </div>

      {/* Hiển thị sản phẩm lọc */}
      
    </div>
  );
}

export default CategoryList;
