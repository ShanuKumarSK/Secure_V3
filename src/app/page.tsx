'use client';

import Image from 'next/image';
import React from 'react';
import heroIllustration from '@/assets/images/hero-img.png';
import workflowIllustration from '@/assets/images/work-flow.jpg';
import { FaEdit, FaRedo, FaPlusCircle, FaCheckCircle, FaSlidersH, FaRupeeSign, FaClock, FaDrawPolygon, FaEnvelopeOpenText, FaClipboardList, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdHelpCircle } from "react-icons/io";
import FadeIn from '@/components/TransitionComponents/FadeIn';



const services = [
  {
    icon: <FaEdit className="text-blue-500 text-3xl" />,
    title: 'Estimate Creation',
    description:
      'Estimates are formulated using state-specific LMR rates and SOR, ensuring compliance and relevance to MGNREGS works',
  },
  {
    icon: <FaRedo className="text-orange-500 text-3xl" />,
    title: 'Spill Over',
    description:
      'Recalculation of Previous Year Estimate with new unskilled wage rate',
  },
  {
    icon: <FaPlusCircle className="text-pink-500 text-3xl" />,
    title: 'Revision of Estimate',
    description:
      'Estimate revisions may occur due to changing site conditions, necessitating updates to data/specifications or adjustments in quantities',
  },
  {
    icon: <FaCheckCircle className="text-yellow-500 text-3xl" />,
    title: 'AS/TS Approval',
    description:
      'The system simplifies the process of obtaining AS/TS sanctions, with automatic generation of relevant slips.',
  },
  {
    icon: <FaSlidersH className="text-red-500 text-3xl" />,
    title: 'State-Specific Adaptability',
    description:
      'SECURE is highly adaptable, catering to the unique workflow, rates, and procedures of different states.',
  },
  {
    icon: <FaRupeeSign className="text-green-500 text-3xl" />,
    title: 'State-Specific SoR',
    description:
      'Estimates are formulated using state-specific LMR rates and SOR, ensuring compliance and relevance to local MGNREGS works.',
  },
];

interface StateCardProps {
  image: string;
  name: string;
  firstApproval: number;
  finalApproval: number;
}

const statesData: StateCardProps[] = [
  {
    image: '/images/jammu.png',
    name: 'Jammu and Kashmir',
    firstApproval: 0,
    finalApproval: 0,
  },
  {
    image: '/images/up.png',
    name: 'Uttar Pradesh',
    firstApproval: 2147,
    finalApproval: 1233,
  },
  {
    image: '/images/tn.png',
    name: 'Tamil Nadu',
    firstApproval: 426,
    finalApproval: 336,
  },
  {
    image: '/images/mh.png',
    name: 'Maharashtra',
    firstApproval: 2046,
    finalApproval: 1193,
  },
  {
    image: '/images/jammu.png',
    name: 'Jammu and Kashmir',
    firstApproval: 0,
    finalApproval: 0,
  },
  {
    image: '/images/up.png',
    name: 'Uttar Pradesh',
    firstApproval: 2147,
    finalApproval: 1233,
  },
  {
    image: '/images/tn.png',
    name: 'Tamil Nadu',
    firstApproval: 426,
    finalApproval: 336,
  },
  {
    image: '/images/mh.png',
    name: 'Maharashtra',
    firstApproval: 2046,
    finalApproval: 1193,
  },
  // Add more states as needed
];

const StateCard = ({ image, name, firstApproval, finalApproval }: StateCardProps) => (
  <div className="bg-white rounded-xl p-4 shadow-lg text-center flex flex-col items-center h-full">
    <div className="bg-slate-100 p-4 rounded-xl mb-4">
      <Image src={image} alt={name} width={80} height={80} />
    </div>
    <h3 className="font-semibold text-sm text-gray-800 mb-1 uppercase text-center leading-tight">
      {name}
    </h3>
    <p className="text-xs text-gray-600">First approval: {firstApproval}</p>
    <p className="text-xs text-gray-600">Final approval: {finalApproval}</p>
  </div>
);

const features = [
  {
    icon: <FaClipboardList className="text-violet-600 text-2xl" />,
    title: 'Estimate Creation',
    description:
      'Estimates are formulated using state-specific LMR rates and SOR, ensuring compliance and relevance to MGNREGS works.',
  },
  {
    icon: <FaDrawPolygon className="text-violet-600 text-2xl" />,
    title: 'Structural Drawing',
    description:
      'Pre-drawn work structural drawing template with customizable measurements for all proposed works.',
  },
  {
    icon: <FaClock className="text-violet-600 text-2xl" />,
    title: 'Estimate accuracy & Time',
    description:
      'Rapid estimate creation and approval processes reduce delays. Automatic recalculations for LMR changes ensure continued accuracy.',
  },
  {
    icon: <FaRupeeSign className="text-violet-600 text-2xl" />,
    title: 'SOR & rates',
    description:
      'Estimates follow state-specific SOR and LMR, ensuring compliance and relevance to local MGNREGS norms.',
  },
  {
    icon: <FaEnvelopeOpenText className="text-violet-600 text-2xl" />,
    title: 'File Movement',
    description:
      'Track file status and movement at every level for complete oversight. Adaptable to unique workflows of various states.',
  },
];

// const features = [
//   {
//     icon: <FileText className="text-violet-600 w-6 h-6" />,
//     title: 'Estimate Creation',
//     description: 'Estimates are formulated using state-specific LMR rates and SOR, ensuring compliance and relevance to MGNREGS works.'
//   },
//   {
//     icon: <PenTool className="text-violet-600 w-6 h-6" />,
//     title: 'Structural Drawing',
//     description: 'Pre-drawn work structural drawing template with customizable measurements for all proposed works.'
//   },
//   {
//     icon: <Clock className="text-violet-600 w-6 h-6" />,
//     title: 'Estimate accuracy & Time',
//     description: 'Rapid estimate creation and approval processes reduce delays significantly & Automatic recalculations ensure accuracy.'
//   },
//   {
//     icon: <Ruler className="text-violet-600 w-6 h-6" />,
//     title: 'SOR & rates',
//     description: 'Estimates use state-specific LMR rates and SOR to ensure compliance with MGNREGS standards.'
//   },
//   {
//     icon: <Move className="text-violet-600 w-6 h-6" />,
//     title: 'File Movement',
//     description: 'Track file movement and estimate status at any level. Highly adaptable for different workflows.'
//   }
// ];

const faqs = [
  {
    question: 'What is DSoR?',
    answer:
      'The Delhi Schedule of Rates (DSR) is a technical document published by CPWD listing rates for various items in the construction industry. It plays a key role in public project estimation.',
  },
  {
    question: 'What is market rate?',
    answer: 'Market rate is the prevailing rate in the market for a particular item of work or material.',
  },
  {
    question: 'Works available in SECURE?',
    answer: 'SECURE supports a variety of public work estimates sanctioned under AS/TS approvals.',
  },
  {
    question: 'What is Non Scheduled items/Observed Data?',
    answer:
      'Items not covered under standard schedules but needed in a project are listed as NS items or based on observed data.',
  },
  {
    question: 'Pull works is used in which scenario?',
    answer:
      'Pull works refer to project works initiated based on demand or urgency without standard project flow.',
  },
];

export default function Home() {

  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const directions = ['top', 'bottom', 'left', 'right'] as const;

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };


  return (
    <main>
      <section className="bg-gradient-to-br from-cyan-700 to-cyan-600 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 py-8">

          {/* Left Section */}
          <div className="text-white max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">SECURE</h1>
            <p className="text-lg md:text-xl mb-2">
              Software for Estimate Calculation Using Rural rates for Employment
            </p>
            <p className="text-sm md:text-base mb-2">Ministry of Rural Development</p>
            <p className="text-sm md:text-base mb-6">Government of India</p>

            <button className="bg-transparent text-white border border-white px-6 py-2 rounded hover:bg-white hover:text-purple-700 transition">
              LOGIN HERE
            </button>
          </div>

          {/* Right Section */}
          <div className="max-w-[600px] w-full animate-bounce">
            <Image
              src={heroIllustration}
              alt="Illustration"
              width={600}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce text-white text-2xl">&#x2304;</div>
        </div>
      </section>
      <section id='workflow-system' className="bg-white py-12 border-t border-purple-200 scroll-mt-28">
        <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              SECURE is a workflow based system
            </h2>
            <p className="text-gray-600 italic text-sm mb-4 leading-relaxed">
              In SECURE, the work name & work codes are received from Mahatma Gandhi NREGA MIS to the concerned Estimate Creator login after the approval of Labour budget. The AE/Overseer of the Block/GP creates the detailed estimate with necessary details. As per the Government procedure adopted by the state, the above estimates are accorded AS/TS sanctions and subsequently AS/TS slips are generated from the system. SECURE soft generates Detailed Project Report (DPR) which includes AS/TS No, AS/TS date, total estimate amount, total material Cost & list of materials used in the estimate with quantity, total semi skilled, Skilled manpower cost, total unskilled wages, activity carried out in each work, No of man days( Unskilled manpower). For creating an estimate every state is being used their own LMR rates, SOR as per their state specific rule adopted for MGNREGS works.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3 text-sm text-gray-800">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-purple-600 mt-1" />
                <span>According AS/TS sanctions in SECURE</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-purple-600 mt-1" />
                <span>All details related to AS/TS, activity & material Generation</span>
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2">
            <Image
              src={workflowIllustration}
              alt="Workflow Illustration"
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>
      <section id='services' className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16 scroll-mt-28">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Services</h2>
          <p className="text-gray-600 max-w-4xl mx-auto mb-10 text-sm md:text-base">
            SECURE is managed by administration module for user creation, office management, and data entry of SoR / LMR, and uploading photographs, news & Government Orders. User ids are created based on the staff details of the GP, Block, District & State. After According AS/TS sanctions in SECURE, all details related to AS/TS, activity & material may be pulled from SECURE to Nregasoft through web services...
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {services.map(({ icon, title, description }, index) => {
              const direction = directions[index % directions.length];
              return (
                <FadeIn key={index} stagger={0.2} direction={direction} duration={0.7}>
                  <div className="h-full flex flex-col items-center text-center bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all duration-300">
                    <div className="bg-gray-100 w-14 h-14 flex items-center justify-center rounded-full mb-4">
                      {icon}
                    </div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">{title}</h3>
                    <p className="text-sm text-gray-600 flex-1">{description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

        </div>
      </section>
      <section className="py-12 bg-gradient-to-r from-cyan-600 to-cyan-700">
        <div className="container mx-auto px-4">
          <h2 className="text-white text-center text-2xl font-bold mb-8">Enrolled States</h2>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            speed={5000} // Duration of full transition (ms)
            autoplay={{
              delay: 0, // No pause between slides
              disableOnInteraction: false, // Keep autoplay after interaction
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            modules={[Autoplay]}
            className="w-full"
          >
            {statesData.map((state, index) => (
              <SwiperSlide key={index}>
                <StateCard {...state} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Features List */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Features</h2>
            <p className="text-gray-600 mb-10 text-sm md:text-base">
              SECURE offers advanced features for creating detailed estimates and reports, adapting to state-specific guidelines
              and rates. The system enhances transparency, accountability, and speed in project approval and monitoring,
              embodying e-governance principles.
            </p>

            <div className="space-y-6">
              {features.map(({ icon, title, description }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="shrink-0">{icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">{title}</h4>
                    <p className="text-gray-600 text-xs md:text-sm leading-snug">{description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <img
              src="/illustrations/laptop-people.svg" // Replace with actual path
              alt="Features Illustration"
              className="w-full max-w-md mx-auto lg:max-w-full"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-cyan-700 to-cyan-700 text-white py-16 px-4 sm:px-8 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left text-sm sm:text-base font-medium text-indigo-800 focus:outline-none"
                  aria-expanded={activeIndex === index}
                >
                  <div className="flex items-center gap-3">
                    <IoMdHelpCircle size={18} className="text-indigo-600" />
                    {faq.question}
                  </div>
                  {activeIndex === index ? (
                    <FaChevronUp className="text-indigo-600" />
                  ) : (
                    <FaChevronDown className="text-indigo-600" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4 text-sm text-gray-700"
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
