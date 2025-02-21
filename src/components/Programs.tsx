import { IoBasketballOutline, IoFootballOutline } from "react-icons/io5";
import { PiVolleyball } from "react-icons/pi";
import { TbBallTennis } from "react-icons/tb";
// import { TfiBasketball } from "react-icons/tfi";

const Programs = () => {
    return (
        <section
            className="max-w-[1440px] mx-auto sm:h-[35rem] h-screen grid grid-cols-1 sm:grid-cols-2 items-center font-sans sm:px-20 px-6 py-3 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/variety-bg.png')" }} id="programs"
        >
            <div className="col-span-2"><h3 className="lg:text-3xl text-2xl font-bold text-center text-white font-mono">Our Programs</h3></div>

            <div className=" text-white flex flex-col gap-y-2 col-span-2 sm:col-span-1">
                <p className="text-lg mb-4 px-4 text-justify sm:text-left md:pr-24">
                    <b> <i>WISA Football Academy</i></b> offers a range of sports activities, including football, basketball, volleyball, tennis and more. While the academy provides training in all these sports, its primary focus is on football, aiming to develop and nurture young talent in the sport.
                </p>
            </div>
            <div className="col-span-2 sm:col-span-1 flex justify-center items-center">
                <div className="grid grid-cols-2 text-white gap-5 w-96">
                    <div className="flex flex-col items-center space-y-2">
                        <IoFootballOutline size={70} />
                        <p className="font-semibold text-2xl">Football</p>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <TbBallTennis size={70} />
                        <p className="font-semibold text-2xl">Tennis</p>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <IoBasketballOutline size={70} />
                        <p className="font-semibold text-2xl">Basketball</p>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <PiVolleyball size={70} />
                        <p className="font-semibold text-2xl">Volleyball</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Programs;
// programs