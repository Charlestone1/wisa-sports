import Image from "next/image";
import fifaLogo from '../../public/images/fifa.png'
import nffLogo from '../../public/images/nff-logo.png'

const Affiliates = () => {
    return (
        <section id="about" className="max-w-[1440px] mx-auto py-12 bg-[#F6F6F6] font-sans">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 gap-y-8">
                <h2 className="lg:text-3xl text-2xl font-bold text-center font-mono text-gray-800">Affiliated With</h2>
                <div className="flex justify-center gap-x-4 md:gap-x-10 items-center">
                    <Image
                        src={fifaLogo}
                        alt="FIFA Logo"
                        // width={200}
                        height={120}
                    />
                    <Image
                        src={nffLogo}
                        alt="Nigeria Football Federation Logo"
                        // width={200}
                        height={120}
                    />
                </div>

            </div>
        </section>
    );
};

export default Affiliates;