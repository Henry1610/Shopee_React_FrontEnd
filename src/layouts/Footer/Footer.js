function Footer(){
    const countries = [
        "Quốc gia & Khu vực:","Singapore", "Indonesia", "Thái Lan",
        "Việt Nam", "Phillipines", "Brazil", "Mexico", "Colombia",
        "Chile"
    ];
    const policies = [
        "CHÍNH SÁCH BẢO MẬT",
        "QUY CHẾ HOẠT ĐỘNG",
        "CHÍNH SÁCH VẬN CHUYỂN",
        "CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN"
    ];
    return (<div className="max-w-[1200px] mx-auto flex flex-col items-center text-center text-xs px-10">
        <div className="grid grid-cols-5 w-full border-b-2 border-gray">
            <div className="col-span-1 flex flex-col text-start ">
                <div className="font-bold mt-[2.5rem] mb-[1.25rem]">DỊCH VỤ KHÁCH HÀNG</div>
                <ul className="text-gray-600">
                    <li className="mb-3">Trung Tâm Trợ Giúp Shopee</li>
                    <li className="mb-3">Shopee Blog</li>
                    <li className="mb-3">Shopee Mall</li>
                    <li className="mb-3">Hướng Dẫn Mua Hàng/Đặt Hàng</li>
                    <li className="mb-3">Hướng Dẫn Bán Hàng</li>
                    <li className="mb-3">Ví ShopeePay</li>
                    <li className="mb-3">Shopee Xu</li>
                    <li className="mb-3">Đơn Hàng</li>
                    <li className="mb-3">Trả Hàng/Hoàn Tiền</li>
                    <li className="mb-3">Liên Hệ Shopee</li>
                    <li className="mb-3">Chính Sách Bảo Hành</li>

                </ul>
            </div>
            <div className="col-span-1 flex flex-col text-start">
                <div className="font-bold mt-[2.5rem] mb-[1.25rem]">SHOPEE VIỆT NAM</div>
                <ul className="text-gray-600">
                    <li className="mb-3">Về Shopee</li>
                    <li className="mb-3">Tuyển Dụng</li>
                    <li className="mb-3">Điều Khoản Shopee</li>
                    <li className="mb-3">Chính Sách Bảo Mật</li>
                    <li className="mb-3">Shopee Mall </li>
                    <li className="mb-3">Kênh Người Bán</li>
                    <li className="mb-3">Flash Sale </li>
                    <li className="mb-3">Tiếp Thị Liên Kết</li>
                    <li className="mb-3">Liên Hệ Truyền Thông</li>

                </ul>
            </div>
            <div className="col-span-1  text-start ">
                <div className="grid grid-rows-2 ">
                    <div className="row-span-1 mt-[2.5rem] mb-[1.25rem]">
                        <span className="font-bold ">THANH TOÁN</span>
                        <ul className="flex flex-wrap gap-3 mt-3">
                            <li className="bg-white p-1" ><img src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8 " /></li>
                            <li className="bg-white p-1"  ><img src="https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16 " /></li>
                            <li className="bg-white p-1"  ><img src="https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08 " /></li>
                            <li className="bg-white p-1"  ><img src="https://down-vn.img.susercontent.com/file/bc2a874caeee705449c164be385b796c " /></li>
                            <li className="bg-white p-1"  ><img src="https://down-vn.img.susercontent.com/file/2c46b83d84111ddc32cfd3b5995d9281 " /></li>
                            <li className="bg-white p-1"  ><img src="https://down-vn.img.susercontent.com/file/5e3f0bee86058637ff23cfdf2e14ca09 " /></li>
                            <li className="bg-white p-1"  ><img src="https://down-vn.img.susercontent.com/file/9263fa8c83628f5deff55e2a90758b06 " /></li>
                            <li className="bg-white p-1"  ><img src="https://down-vn.img.susercontent.com/file/0217f1d345587aa0a300e69e2195c492 " /></li>
                        </ul>
                    </div>
                    <div className="row-span-1">
                        <span className="font-bold">ĐƠN VỊ VẬN CHUYỂN</span>
                        <ul className="flex flex-wrap gap-3 mt-3">
                            <li className="bg-white p-1"><img src="https://down-vn.img.susercontent.com/file/vn-11134258-7ras8-m20rc1wk8926cf" /></li>

                            <li className="bg-white p-1" ><img src="https://down-vn.img.susercontent.com/file/vn-50009109-64f0b242486a67a3d29fd4bcf024a8c6" /></li>
                            <li className="bg-white p-1"><img src="https://down-vn.img.susercontent.com/file/59270fb2f3fbb7cbc92fca3877edde3f" /></li>
                            <li className="bg-white p-1"><img src="https://down-vn.img.susercontent.com/file/957f4eec32b963115f952835c779cd2c" /></li>
                            <li className="bg-white p-1"><img src="https://down-vn.img.susercontent.com/file/957f4eec32b963115f952835c779cd2c" /></li>
                            <li className="bg-white p-1"><img src="https://down-vn.img.susercontent.com/file/3900aefbf52b1c180ba66e5ec91190e5" /></li>
                            <li className="bg-white p-1"><img src="https://down-vn.img.susercontent.com/file/6e3be504f08f88a15a28a9a447d94d3d" /></li>
                            <li className="bg-white p-1"><img src="https://down-vn.img.susercontent.com/file/0b3014da32de48c03340a4e4154328f6" /></li>
                            <li className="bg-white p-1"><img src="https://down-vn.img.susercontent.com/file/vn-50009109-ec3ae587db6309b791b78eb8af6793fd" /></li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="col-span-1 flex flex-col text-start">
                <div className="font-bold mt-[2.5rem] mb-[1.25rem]">THEO DÕI SHOPEE</div>
                <ul>
                    <li className="mb-3">
                        <a className="flex ">
                            <img src="https://down-vn.img.susercontent.com/file/2277b37437aa470fd1c71127c6ff8eb5" className="pr-2" />
                            <span>Facebook</span>
                        </a>
                    </li>
                    <li className="mb-3">
                        <a className="flex ">
                            <img src="  https://down-vn.img.susercontent.com/file/5973ebbc642ceee80a504a81203bfb91" className="pr-2" />
                            <span>Instagram</span>
                        </a>
                    </li>
                    <li className="mb-3">
                        <a className="flex ">
                            <img src="https://down-vn.img.susercontent.com/file/f4f86f1119712b553992a75493065d9a " className="pr-2" />
                            <span>LinkeIn</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="col-span-1 flex flex-col text-start">
                <div className="font-bold mt-[2.5rem] mb-[1.25rem]">TẢI ỨNG DỤNG SHOPEE</div>
                <div className="grid grid-cols-2">
                    <a>

                        <im src="https://down-vn.img.susercontent.com/file/a5e589e8e118e937dc660f224b9a1472" />
                    </a>
                    <div className="">
                        <a ><img className="p-2 m-2 bg-white" src="https://down-vn.img.susercontent.com/file/ad01628e90ddf248076685f73497c163" /></a>
                        <a><img className="p-2 m-2 bg-white" src="https://down-vn.img.susercontent.com/file/ae7dced05f7243d0f3171f786e123def" /></a>
                        <a><img className="p-2 m-2 bg-white" src="https://down-vn.img.susercontent.com/file/35352374f39bdd03b25e7b83542b2cb0" /></a>
                    </div>
                </div>
            </div>

        </div>
        <div className="flex justify-between w-full p-10 text-xs text-gray-500">
        <div>© 2025 Shopee. Tất cả các quyền được bảo lưu.</div>

        {/* Render tất cả trong cùng một flex container */}
        <div className="flex gap-2 flex-wrap justify-end">
    {countries.map((country, index) => (
        <span 
            key={index} 
            className={` ${index === 0 ? "" : "after:content-['|'] after:mx-1 last:after:content-none"} `}
        >
            {country}
        </span>
    ))}
</div>

    </div>

        <div className="p-10 text-gray-600">
            <div className="flex justify-center items-center text-sm text-gray-500">
                {policies.map((policy, index) => (
                    <div key={index} className="flex items-center px-6 py-2 relative">
                        {policy}
                        {index !== policies.length - 1 && (
                            <span className="absolute right-0   text-gray-400">|</span>
                        )}
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9765d68a8945750d.png" />

            </div>
            <div className="mt-2 mb-6">
                Công ty TNHH Shopee
            </div>
            <div className="mt-2 ">
                Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn

            </div>
            <div className="mt-2 ">
                Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Bùi Anh Tuấn
            </div>
            <div className="mt-2 ">
                Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015
            </div>
            <div className="mt-2 ">
                © 2015 - Bản quyền thuộc về Công ty TNHH Shopee
            </div>


        </div>
    </div>);
}
export default Footer