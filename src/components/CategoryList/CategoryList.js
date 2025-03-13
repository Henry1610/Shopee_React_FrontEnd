import { Link } from "react-router-dom";
import useFetch from "../../useFetch";

function CategoryList() {
  const { data, err, loading } = useFetch("https://dummyjson.com/products/category-list");

  if (loading) return <p>Loading...</p>;
  if (err) return <p>Error: {err}</p>;

  return (
    <div className="w-full bg-white mt-4 p-3 rounded-lg shadow-lg">
      <div className="font-bold pb-6 pl-3">
        <h1 className="text-xl text-[#EE4D2D]">DANH MỤC</h1>
      </div>
      <div className="flex justify-center flex-wrap gap-2 pb-3">
        {data.map((category, index) => (
          <Link to={`/products?category=${category}`} key={index}>
            <div className="transform transition duration-300 hover:scale-105 cursor-pointer">
              <div className="text-sm font-medium border-2 border-[#EE4D2D] text-[#EE4D2D] rounded-full px-2 py-1 hover:bg-[#EE4D2D] hover:text-white">
                {category}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
