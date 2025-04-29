
import Commit from "../../components/Commit";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer/Footer";





function Order() {
    return (
        <div className="h-[2000px]">
            <Navbar />

            <div className=" max-w-[1200px] mx-auto  bg-gray-100 ">
                
                <Commit />
                <Footer />
            </div>
        </div>
    );
}

export default Order;
