import Image from "next/image";
// import getInImg from '../../public/images/program_getin.png'
// import trainBuild from '../../public/images/program_train_n_build.png'
// import professionalStatus from '../../public/images/program_professional.png'


const programSteps = [
    {
        title: "Get In!",
        description:
            "Get enrolled. This is the first step to begin your journey. We offer a program that builds and guides aspiring footballers from the point of entry till they are ready to go pro.",
        image: "/images/program_getin.png", // Replace with actual image path
    },
    {
        title: "Train And Build",
        description:
            "With the help of our coaching team, we help train our academy players to a professional level. They are tested not just physically but also mentally to meet up with the requirements of playing at an elite level.",
        image: "/images/program_train_n_build.png", // Replace with actual image path
    },
    {
        title: "Professional Status",
        description:
            "Once our players have fulfilled the requirements to become professionals, they are ready to take flight. With the help of our partners and scouts, we help them get in touch with interested clubs.",
        image: "/images/program_professional.png", // Replace with actual image path
    },
];

const FootballProgram = () => {
    return (
        <section className="bg-gray-100 py-16 max-w-[1440px] mx-auto">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-900">Our Football Program</h2>
                <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                    WISA Football Academy is on a mission to scout and develop talent. Ages 10 to 15 are considered the youngest academy age group. Players between 15 and 17 focus on refining their skills, while athletes 18 and above are eligible for full participation at a professional level.
                </p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {programSteps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-xl p-6 text-center transition-transform transform hover:scale-105"
                        >
                            <div className="relative w-full h-52 mb-4 overflow-hidden rounded-lg">
                                <Image src={step.image} alt={step.title} layout="fill" objectFit="cover" className="rounded-lg" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                            <p className="text-sm text-gray-600 mt-2">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FootballProgram;
