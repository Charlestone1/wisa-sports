import contactImg from '../../public/images/applicationcontactImg.png'
import admissionImg from '../../public/images/applicationadmissionImg.png'
import documentationImg from '../../public/images/applicationdocumentationImg.png'
import paymentImg from '../../public/images/applicationpaymentImg.png'
import Image from 'next/image';

const steps = [
    {
        icon: contactImg,
        title: "Contact Us",
        description:
            "Interested in our program? Do well to contact us. Get details about the program and how to begin registration.",
    },
    {
        icon: admissionImg,
        title: "Admission",
        description:
            "Once cleared to apply, an application form would be sent to your email. Fill the form correctly and precisely.",
    },
    {
        icon: documentationImg,
        title: "Documentation",
        description:
            "Applicants are required to provide supporting documents like birth certificate, passports, medical history, etc.",
    },
    {
        icon: paymentImg,
        title: "Payment & Enrollment",
        description:
            "After paying registration fees, the applicant will be inducted and registered as part of the academy.",
    },
];

const ApplicationProcess = () => {
    return (
        <section id='apply' className="bg-[#F6F6F6] max-w-[1440px] mx-auto py-16 font-sans">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-900 font-mono">Application Process</h2>
                <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                    Here is a step-by-step process to apply and get registered into the WISA Football Academy.
                </p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-[#F6F6F6] shadow-md rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:scale-105"
                        >
                            <div className="flex justify-center mb-4">
                                <Image
                                    src={step.icon}
                                    alt={step.title}
                                    // width={200}
                                    height={70}

                                />
                            </div>
                            <h3 className="text-lg font-bold text-gray-700 font-mono">{step.title}</h3>
                            <p className="text-sm text-gray-600 mt-2 ">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ApplicationProcess;
