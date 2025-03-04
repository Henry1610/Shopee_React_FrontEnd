import { useEffect, useState } from "react";

function CategoryList() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error("Lỗi khi fetch categories:", error));

    })
    return (<div className="w-full bg-white mt-4 p-3">
        <div className="font-bold pb-6 pl-3">
            <h1 className="text-xl text-[#EE4D2D] ">DANH MỤC</h1>

        </div>
        <div className="flex justify-center flex-wrap gap-2 pb-3">
            {
                categories.map((category, index) => {
                    return (
                        <a href={category.url}>
                            <div key={index} className="border-2 border-[#ee4d2d] text-gray-600 font-thin rounded-lg p-1 hover:bg-[#ee4d2d] cursor-pointer">
                                {category.name}
                            </div>
                        </a>)
                })
            }



        </div>
    </div>
    );
}

export default CategoryList;