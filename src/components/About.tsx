import Image from "next/image";
import logomain from '../../public/images/wisaLogo.png'

const About = () => {
    return (
        <section id="about" className="max-w-[1440px] mx-auto py-20 bg-[#F6F6F6] font-sans">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-y-4">
                <h2 className="lg:text-3xl text-2xl font-bold text-center mb-8 md:hidden font-mono text-gray-800">About Us</h2>
                <div className="flex justify-center items-center">
                    <Image
                        src={logomain}
                        alt="About Us"
                        // width={200}
                        height={270}
                    />
                </div>

                <div className="">
                    <h2 className="lg:text-3xl text-2xl font-bold text-center mb-8 hidden md:block font-mono text-gray-800">About Us</h2>
                    <p className="text-lg mb-4 px-4 text-justify sm:text-left text-gray-800">
                        <b> <i>WISA Football Academy</i></b> offers high-quality coaching systems designed to help young athletes master their positions and enhance their playing style. With the support of skilled coaching staff, along with access to top-notch equipment and facilities, the academy provides a comprehensive environment for talent development.
                    </p>

                </div>

            </div>
        </section>
    );
};

export default About;