'use client'

import { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "What is KaizenYou?",
        answer: "KaizenYou is an online training and learning platform specifically designed for students in Commerce and Management. Our platform emphasizes continuous improvement and offers a variety of educational tools and resources."
    },
    {
        question: "What kind of courses does KaizenYou offer?",
        answer: "We offer a comprehensive curriculum including courses in digital marketing, human resource management, finance, and accounting. Our platform is designed to help students gain valuable skills in the Management and Commerce domains."
    },
    {
        question: "How does KaizenYou support student learning?",
        answer: "KaizenYou provides interactive learning tools, personalized learning paths, and gamified learning experiences. We also offer internships and mentoring sessions with industry professionals."
    },
    {
        question: "What resources are available for educators on KaizenYou?",
        answer: "Educators have access to lesson planning tools, professional development resources, and classroom management software to enhance their teaching and support student success."
    },
    {
        question: "How can I get a hands-on experience with KaizenYou?",
        answer: "Students can participate in both paid and unpaid internships offered through our platform. These internships provide practical experience and help develop essential skills."
    },
    {
        question: "How can I contact KaizenYou for support or inquiries?",
        answer: "You can reach us via email at tokaizenyou@gmail.com, call us at 084230 07905, or visit us at our office in Lucknow, Uttar Pradesh, India."
    },
    {
        question: "What is the mission of KaizenYou?",
        answer: "Our mission is to revolutionize education through innovative technology, providing high-quality digital solutions that empower educators and inspire students to reach their full potential."
    },
    {
        question: "What makes KaizenYou different from other edtech platforms?",
        answer: "KaizenYou integrates the philosophy of continuous improvement into our platform, offering dynamic and personalized learning experiences tailored to the needs of Commerce and Management students."
    }
];

const FaqSection: React.FC = () => {
    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    return (
        <div className="min-h-screen flex flex-col items-center py-12">
            <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 pb-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl my-6 z-50">
                FREQUENTLY ASKED QUESTIONS
            </h1>
            <div className="w-11/12 md:w-3/4 lg:w-2/5">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className={`border-b border-white mb-2 cursor-pointer ${activeQuestion === index ? 'bg-gray-800' : ''
                            }`}
                        onClick={() => toggleAnswer(index)}
                    >
                        <div
                            className={`p-3 text-lg font-semibold hover:text-blue-500 flex justify-between ${activeQuestion === index ? 'text-blue-500' : 'text-white'
                                }`}
                        >
                            <span>{item.question}</span>
                            <span className={`text-xl ${activeQuestion === index ? 'text-2xl' : ''}`}>
                                {activeQuestion === index ? '-' : '+'}
                            </span>
                        </div>
                        <div
                            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${activeQuestion === index ? 'max-h-96 opacity-100 p-3' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <p className="text-white text-base">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqSection;
