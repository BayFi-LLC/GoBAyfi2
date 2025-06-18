"use client"
import React from "react";
import Marquee from "react-fast-marquee"; 

const Marque2 = () => {
  const testimonials = [
    {
      quote: "It's been a really amazing exprince with BayFi Studio,",
      feedback:
        "Their UI/UX design and web development expertise gave TabLess a seamless, user-friendly platform that aligns with our mission to simplify workflows. Their technical precision and collaboration made them invaluable. Highly recommend for startups aiming to disrupt markets!",
      name: "Ahmed Kasem",
      position: "CEO & Founder: TabLess",
      image: "https://i.ibb.co.com/Kzp8LpwG/Ahmed-Kasem.png",
      icon: "/Image/Stargreen2.svg",
      hoverIcon:  "/Image/ceo-black.svg",
    },
    {
      quote: "Working with BayFi Studio was a game-changer for our brand. ",
      feedback:
        "Their branding team elevated our identity with heart and purpose, while their user-centric design created an emotional connection with our audience. They’re not just designers—they’re storytellers who care deeply about impact.",
      name: "Georgina Shute",
      position: "CEO & Founder: kindTwo",
      image: "https://i.ibb.co.com/Kj6DdYD1/Georgina-Shute.png",
      icon: "/Image/Stargreen2.svg",
      hoverIcon:  "/Image/ceo-black.svg",
    },
    {
      quote:
        "BayFi Team did an amazing job and was really happy with the results.  ",
      feedback:
        "Their data-driven strategies and innovative web solutions helped us scale our client campaigns with measurable ROI. They don’t just build websites—they architect growth engines. A trusted partner for anyone serious about scaling intelligently. ",
      name: "Mike Simpson",
      position: "CEO & Founder: Caret Growth Strategies",
      image: "https://i.ibb.co.com/Q3gbYyvC/Mike-Simpson.png",
      icon: "/Image/Stargreen2.svg",
      hoverIcon:  "/Image/ceo-black.svg",
    },
    {
      quote:
        "BayFi Studio delivered a flawless custom web platform under tight deadlines.  ",
      feedback:
        "Their attention to detail in responsive design and user experience elevated our digital presence. Their collaborative approach made complex projects feel effortless. A top-tier partner for enterprise-grade solutions. ",
      name: "Claire Ashdown",
      position: "CEO - HR Tech Meetup",
      image: "https://i.ibb.co.com/x8LhywR1/Claire-Ashdown.png",
      icon: "/Image/Stargreen2.svg",
      hoverIcon:  "/Image/ceo-black.svg",
    },
    {
      quote:
        "Such a lovely experience- exceeded my expectations - thank youuuuuu.  ",
      feedback:
        "Their integrated design and development expertise ensured seamless registrations, networking, and engagement tools. They’re the secret weapon for tech-driven event experiences!",
      name: "Karin Bogren",
      position: "CEO & Founder: HR Tech Meetup",
      image: "https://i.ibb.co.com/QF3LPCXC/Karin-Bogren.png",
      icon: "/Image/Stargreen2.svg",
      hoverIcon:  "/Image/ceo-black.svg",
    },
    {
      quote:
        "BayFi Studio built a strong, scalable foundation for our SaaS platform.   ",
      feedback:
        " Their smart integrations and cloud solutions made our system faster and more efficient. They turned tough technical challenges into simple, effective fixes and helped us grow strategically. A top-notch partner for SaaS businesses! ",
      name: "Satish Menon",
      position: "CEO & Founder: Agiliron",
      image: "https://i.ibb.co.com/G41nVL09/Satish-Menon.png",
      icon: "/Image/Stargreen2.svg",
      hoverIcon:  "/Image/ceo-black.svg",
    },
    {
      quote:
        "BayFi Studio reimagined our virtual dining experience with cutting-edge design and mobile development.  ",
      feedback:
        "Their creativity in blending aesthetics with functionality helped us stand out in a crowded market. If you want innovation that wows users, look no further. ",
      name: "Joel Schüssler",
      position: "Co-Founder: Just Virtual Food",
      image: "https://i.ibb.co.com/nsY3qjzB/Joel-Sch-ssler.png",
      icon: "/Image/Stargreen2.svg",
      hoverIcon:  "/Image/ceo-black.svg",
    },
  ];
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <div className=" border-none bg-[#0C1F0C] pb-14 lg:mt-0">
      <div className="relative mx-auto w-full bg-[#0C1F0C] lg:w-10/12">
        <h1 className="mx-auto w-11/12 pb-32 pt-36 text-2xl leading-snug text-white lg:w-full lg:text-5xl">
          You could be the next to add your testimonial. But for now, {"let's"}{" "}
          see what others have to say about us!
        </h1>
        <div className="relative">
          <div className="relative flex items-center justify-center gap-36 pt-10 lg:gap-64">
            <div className="h-[132px] w-[132px] rounded-full bg-[#B8DE19]"></div>
            <div className="h-[132px] w-[132px] rounded-full bg-[#B8DE19]"></div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 z-30 hidden h-96 w-96 bg-gradient-to-r from-[#0C1F0C] to-transparent lg:block"></div>
        <div className="absolute bottom-0 right-0 z-30 hidden h-96 w-96 bg-gradient-to-l from-[#0C1F0C] to-transparent lg:block"></div>

        <Marquee
          className="absolute z-10 -mt-52 mb-6"
          speed={80}
          autoFill
          pauseOnHover
          loop={0}
        >
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex h-auto max-w-[420px] items-center justify-center gap-6 px-3 text-white"
              >
                <div
                  className="group h-[300px] rounded-[20px] border border-white/30 bg-[rgba(9,22,9,0.5)] px-5 py-8 backdrop-blur-[25px] hover:bg-[#B8DE19] hover:text-black"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <h1 className="h-24 text-xl">“{testimonial.quote}”</h1>
                  <p className="h-[60px] text-[12px] font-light leading-[14px] text-[#B5B5B5] group-hover:text-black">
                    {testimonial.feedback}
                  </p>
                  <div className="mt-2 flex pt-3">
                    <img
                      src={
                        hoveredIndex === index
                          ? testimonial.hoverIcon
                          : testimonial.icon
                      }
                      alt="Icon"
                      className="h-[50px] w-[50px]"
                    />
                    <img
                      src={testimonial.image}
                      alt="CEO"
                      className="-ml-6 h-12 w-12 rounded-full"
                    />
                    <h1 className="ml-5 mt-1 text-[14px] font-normal text-white group-hover:text-black">
                      {testimonial.name} <br />
                      <span className="text-[#DEF095] group-hover:text-black">
                        {testimonial.position}
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Marque2;
