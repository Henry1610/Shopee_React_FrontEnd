import Navbar from "../../components/Navbar";
import Wrapper from "../../components/Wrapper";

function ProductDetail() {
    return (<div className="max-w-[2000px]">

        <Navbar />
        <Wrapper>

            <div>
                <div className=" grid grid-cols-5 p-3">
                    <div className="col-span-2">
                        <div>
                            <img src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lry3ytdzejdle9@resize_w900_nl.webp" />
                        </div>
                        <div>
                            <div>
                                <button></button>
                                <button></button>
                                <button></button>
                                <button></button>
                            </div>
                            <div>
                                <div></div>
                                <div></div>
                            </div>

                        </div>
                    </div>
                    <div className="col-span-3">
                        <div>title</div>
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div>Gia</div>
                        <div>Diss=count</div>
                        <div>Ship</div>
                        <div></div>
                        <div>
                            <h3>Số lượng</h3>
                            <div>
                                <button>+</button>
                                <input></input>
                                <button>-</button>
                            </div>
                            <div>đã bán</div>
                        </div>
                    </div>
                </div>
            </div>

            
            

            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                    <img src="https://via.placeholder.com/60" alt="Avatar" class="w-16 h-16 rounded-full" />
                    <div>
                        <h2 class="text-lg font-semibold">gabriela</h2>
                        <p class="text-sm text-gray-500">Online 19 Phút Trước</p>
                        <div class="mt-2 flex space-x-2">
                            <button class="bg-red-500 text-white px-3 py-1 text-sm rounded">Yêu Thích+</button>
                            <button class="border px-3 py-1 text-sm rounded flex items-center">
                                <span class="text-red-500">&#128172;</span> Chat Ngay
                            </button>
                            <button class="border px-3 py-1 text-sm rounded flex items-center">
                                <span class="text-gray-700">&#128717;</span> Xem Shop
                            </button>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-4 text-sm">
                    <div>
                        <p class="text-gray-500">Đánh Giá</p>
                        <p class="text-red-500 font-semibold">1,2k</p>
                    </div>
                    <div>
                        <p class="text-gray-500">Tỉ Lệ Phản Hồi</p>
                        <p class="text-red-500 font-semibold">100%</p>
                    </div>
                    <div>
                        <p class="text-gray-500">Tham Gia</p>
                        <p class="text-red-500 font-semibold">10 tháng trước</p>
                    </div>
                    <div>
                        <p class="text-gray-500">Sản Phẩm</p>
                        <p class="text-red-500 font-semibold">915</p>
                    </div>
                    <div>
                        <p class="text-gray-500">Thời Gian Phản Hồi</p>
                        <p class="text-red-500 font-semibold">trong vài phút</p>
                    </div>
                    <div>
                        <p class="text-gray-500">Người Theo Dõi</p>
                        <p class="text-red-500 font-semibold">87</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    DETAIL
                </div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div class="mt-8 p-6 border rounded-lg ">
                <div >
                    <h2 class="text-lg font-semibold " >ĐÁNH GIÁ SẢN PHẨM</h2>
                    <div className="flex items-center justify-between bg-orange-50 p-6">
                        <div class="flex items-center space-x-4 mt-4 ">
                            <p class="text-3xl text-red-500 font-bold">5.0</p>
                            <p class="text-lg text-gray-700">trên 5</p>
                            <div class="text-red-500">★★★★★</div>
                        </div>
                        <div class="mt-4 flex space-x-2 items-center">
                            <button class="border px-4 py-2 text-sm rounded bg-red-500 text-white">Tất Cả</button>
                            <button class="border px-4 py-2 text-sm rounded">5 Sao (42)</button>
                            <button class="border px-4 py-2 text-sm rounded">4 Sao (2)</button>
                            <button class="border px-4 py-2 text-sm rounded">3 Sao (0)</button>
                            <button class="border px-4 py-2 text-sm rounded">2 Sao (0)</button>
                            <button class="border px-4 py-2 text-sm rounded">1 Sao (0)</button>
                        </div>
                    </div>
    
                </div>
    
                <div class="mt-6 border-t pt-4">
                    <div class="flex space-x-4">
                        <img src="https://via.placeholder.com/40" alt="User" class="w-10 h-10 rounded-full" />
                        <div>
                            <h3 class="font-semibold">phanhuynhkimngan</h3>
                            <p class="text-red-500">★★★★★</p>
                            <p class="text-xs text-gray-500">2025-01-22 03:08 | Phân loại hàng: 200MM-ánh sáng trắng</p>
                            <p class="mt-2 text-sm">Lúc đầu không biết xài, bấm lần 1 là mở, lần 2 tự động sáng khi có chuyển động ban đêm, lần 3 là tự động sáng khi có chuyển động cả ngày lẫn đêm, mình phải qua shop khác nhìn ké đánh giá á huhu. Giá rẻ, mà xài okee nha</p>
                            <div class="mt-2 flex space-x-2">
                                <img src="https://via.placeholder.com/50" alt="Review Image" class="w-14 h-14 rounded" />
                                <img src="https://via.placeholder.com/50" alt="Review Image" class="w-14 h-14 rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    </div>);
}

export default ProductDetail;