"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { Testimonial } from "@/constants/testimonials";
import { useLanguageContext } from "@/contexts/LanguageContext";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const TestimonialSlider = () => {
  const { language } = useLanguageContext();
  const isRTL = language === "fa";

  // Create translated testimonials data
  const translatedTestimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya Sharma",
      position: "Forex Specialist",
      avatar: "/images/testimonial-2.jpg",
      content:
        "At Capital Chain, you get what you earn. No funny business. That's rare these days.",
      date: "12/08/2025",
    },
    {
      id: 2,
      name: "Raj Patel",
      position: "Day Trader",
      avatar: "/images/testimonial-3.jpg",
      content:
        "Best part? even get paid from the challenge profits. I mean, who does that?",
      date: "05/07/2025",
    },
    {
      id: 3,
      name: "Chinonso Okafor",
      position: "Swing Trader",
      avatar: "/images/testimonial-5.jpg",
      content:
        "Their support team actually replies. Like real humans. Not those copy-paste robots.",
      date: "21/06/2025",
    },
    {
      id: 4,
      name: "Aisha Bello",
      position: "Crypto Trader",
      avatar: "/images/testimonial-4.jpg",
      content:
        "I thought they were just hyping the blockchain thing, but after reading the roadmap… this is gonna be big.",
      date: "30/05/2025",
    },
    {
      id: 5,
      name: "Oluwaseun Adeyemi",
      position: "Professional Trader",
      avatar: "/images/testimonial-1.jpg",
      content:
        "Gosh, the 12% drawdown gave me breathing space. I could trade properly without pressure.",
      date: "14/04/2025",
    },
    {
      id: 6,
      name: "Ananya Iyer",
      position: "Portfolio Manager",
      avatar: "/images/testimonial-6.jpg",
      content:
        "This firm actually gives you a reason to believe in prop trading again. For real.",
      date: "02/03/2025",
    },
  ];

  return (
    <div className="w-full py-8 md:py-16 px-2 md:px-4 bg-[#010A13] min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      <div className="max-w-7xl mx-auto w-full">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={10}
          loop={true}
          dir={isRTL ? "rtl" : "ltr"}
          key={isRTL ? 'rtl' : 'ltr'}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: isRTL,
          }}
          coverflowEffect={{
            rotate: isRTL ? 15 : -15,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet testimonial-bullet",
            bulletActiveClass:
              "swiper-pagination-bullet-active testimonial-bullet-active",
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="testimonial-swiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1.2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 25,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {translatedTestimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="testimonial-slide">
              <div className="testimonial-card">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center overflow-hidden ${isRTL ? 'ml-3 md:ml-4' : 'mr-3 md:mr-4'} border-2 border-active bg-[#b5ffff17] flex-shrink-0`}>
                    <p className="text-white font-display font-bold text-lg md:text-xl lg:text-3xl">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </p>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-active font-display font-medium text-lg md:text-2xl lg:text-3xl truncate">
                      {testimonial.name}
                    </h3>
                    <p className="text-white font-display text-sm md:text-lg font-light truncate">
                      {testimonial.position}
                    </p>
                    <p className="text-xs text-[#9aedff] font-mono mt-1">{testimonial.date}</p>
                  </div>
                </div>
                <p className="text-[#ADADAD] leading-relaxed text-sm md:text-base line-clamp-4 md:line-clamp-3">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .testimonial-swiper {
          padding: 30px 0 60px 0;
          overflow: visible;
        }

        .testimonial-slide {
          width: 280px;
          height: auto;
        }

        .testimonial-card {
          background: #b5ffff17;
          backdrop-filter: blur(15px);
          border-radius: 20px;
          padding: 20px;
          min-height: 200px;
          height: auto;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
          margin: 0 auto;
          max-width: 100%;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.08);
        }

        .testimonial-bullet {
          width: 10px !important;
          height: 10px !important;
          background: #9aedff63 !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
          margin: 0 4px !important;
        }

        .testimonial-bullet-active {
          background: #00e0e0 !important;
          transform: scale(1.2) !important;
        }

        .swiper-pagination {
          bottom: 10px !important;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (min-width: 640px) {
          .testimonial-slide {
            width: 350px;
          }

          .testimonial-card {
            padding: 25px;
            border-radius: 25px;
            min-height: 220px;
          }
        }

        @media (min-width: 768px) {
          .testimonial-slide {
            width: 400px;
          }

          .testimonial-card {
            padding: 30px;
            border-radius: 31px;
            min-height: 240px;
          }

          .testimonial-swiper {
            padding: 50px 0 80px 0;
          }
        }

        @media (min-width: 1024px) {
          .testimonial-slide {
            width: 450px;
          }
        }

        @media (max-width: 639px) {
          .testimonial-bullet {
            width: 8px !important;
            height: 8px !important;
            margin: 0 3px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialSlider;