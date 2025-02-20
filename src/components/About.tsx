import Image from "next/image";
import logomain from '../../public/images/wisaLogo.png'

const About = () => {
    return (
        <section id="about" className="max-w-[1440px] mx-auto py-20 bg-[#F6F6F6] font-sans">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-y-4">
                <h2 className="lg:text-3xl text-2xl font-semibold text-center mb-8 md:hidden">About Us</h2>
                <div className="flex justify-center items-center">
                    <Image
                        className="dark:invert"
                        src={logomain}
                        alt="About Us"
                        // width={200}
                        height={270}
                        priority
                    />
                </div>

                <div className="">
                    <h2 className="lg:text-3xl text-2xl font-semibold text-center mb-8 hidden md:block">About Us</h2>
                    <p className="text-lg mb-4 px-4 text-justify sm:text-left">
                        <b>WISA Football Academy</b> offers high-quality coaching systems designed to help young athletes master their positions and enhance their playing style. With the support of skilled coaching staff, along with access to top-notch equipment and facilities, the academy provides a comprehensive environment for talent development.
                    </p>

                </div>

            </div>
        </section>
    );
};

export default About;