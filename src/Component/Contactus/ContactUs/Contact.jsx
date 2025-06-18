"use client";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import ContactBtn from "./ContactBtn";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";
import { usePathname } from "next/navigation";


const Contact = () => {
   const pathname = usePathname(); // ✅ Get current route
  
  if (pathname === '/termsandcondition' || pathname === '/privacypolicy') {
    return null;
  }
  const openCalendlyPopup = () => {
    window.open(
      "https://calendly.com/bayfistudio/30min",
      "_blank",
      "noopener noreferrer",
    );
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    selectedServices: [], // To store selected button texts
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");
  const [services, setServices] = useState([]);

  useEffect(() => {
    if (isSent) {
      setServices([""]);

      const timer = setTimeout(() => setIsSent(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isSent]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleServiceClick = (service) => {
    setFormData((prevState) => {
      const services = prevState.selectedServices.includes(service)
        ? prevState.selectedServices.filter((s) => s !== service)
        : [...prevState.selectedServices, service];

      setServices(services);
      return { ...prevState, selectedServices: services };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS Configuration
    const serviceID = "service_i2dy9lg"; // Replace with your EmailJS Service ID
    const templateID = "template_3pieyms"; // Replace with your EmailJS Template ID
    const publicKey = "ryNSZQgT8No55CTDy"; // Replace with your EmailJS Public Key

    const emailData = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      selectedServices: formData.selectedServices.join(", "),
    };

    emailjs.send(serviceID, templateID, emailData, publicKey).then(
      () => {
        setIsSent(true);
        setFormData({ name: "", email: "", message: "", selectedServices: [] }); // Clear form
      },
      (error) => {
        console.error("Error sending email:", error);
        setError("Failed to send the email. Please try again.");
      }
    );
  };
   const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowVideo(true);
    }, 10000); // 3 second delay (adjust as needed)

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div id="contact" className="w-full  pb-16 bg-[#0C1F0C] -mt-0.5">
      <div className="mx-auto gap-10 w-11/12 lg:flex   pb-8 pt-8 lg:gap-8 ">
        <div className="flex flex-col rounded-xl bg-black p-[37px] lg:p-[65px] lg:basis-1/ flex-7/12">
          <h1 className="text-2xl font-medium text-white md:text-5xl">
            Start a Project
          </h1>
          <h2 className="text-xl font-light leading-[36px] text-white md:text-4xl">
            What can we do for you?
          </h2>
          <h1 className="mt-8 text-[24px] font-extralight leading-[36px] text-white">
            {"I'm"} interested in...
          </h1>

          {/* Button Section */}
          <div className="mt-5 flex flex-wrap gap-[9px]">
            {[
              "Logo & Brand Identity",
              "Web Design & Development",
              "Video Editing & Animation",
              "Graphics Design",
              "UI/UX Design",
              "Digital Marketing",
            ].map((service) => (
              <ContactBtn
                key={service}
                buttonText={service}
                services={services}
                onClick={() => handleServiceClick(service)} // Handle button click
                isActive={formData.selectedServices.includes(service)}
              />
            ))}
          </div>

          {/* Form Section */}
          <form
            onSubmit={handleSubmit}
            className="mt-5 flex flex-grow flex-col"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="mb-3 mt-20 block w-full rounded-md bg-[#0C1F0C] py-[9px] pl-[20px] text-white placeholder:text-[14px] placeholder:font-light placeholder:text-white/25 focus:bg-white focus:text-black focus:outline-none focus:ring-2 focus:ring-[#B8DE19]"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="mb-3 block w-full rounded-md bg-[#0C1F0C] py-[9px] pl-[20px] text-white placeholder:text-[14px] placeholder:font-light placeholder:text-white/25 focus:bg-white focus:text-black focus:outline-none focus:ring-2 focus:ring-[#B8DE19]"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project"
              className="mb-3 block w-full rounded-md bg-[#0C1F0C] pb-16 pl-[20px] pt-[9px] text-white placeholder:text-[14px] placeholder:font-light placeholder:text-white/25 focus:bg-white focus:text-black focus:outline-none focus:ring-2 focus:ring-[#B8DE19]"
              required
            ></textarea>
            <button type="submit"  style={{
                background: "linear-gradient(180deg, #B8DE19 0%, #0C1F0C 100%)",
              }}
              className="backgroundMoveings w-[180px] mt-6 mb-5 px-6 py-3 rounded-4xl font-medium text-xl text-white">
              Send Enquiry
            </button>
          </form>

          {/* Success/Error Messages */}
          {isSent && (
            <>
              <p className="mt-4 text-green-400">
                Your message has been sent successfully!
              </p>
            </>
          )}
          {error && <p className="mt-4 text-red-400">{error}</p>}
        </div>
        <div className="flex flex-col rounded-xl bg-black p-[37px] lg:p-[65px] mt-16 lg:mt-0 lg:basis-1/2 flex-1">
          <div className="flex  justify-between items-center">
            <div>
              <h1 className="text-white  text-[17.45px] lg:text-2xl not-italic font-semibold leading-[26.175px]">
                Drop us a line
              </h1>
              <div   onClick={() => {
                  window.open("mailto:yesbayzid@gmail.com", "_blank");
                }} className=" cursor-pointer flex  gap-[7px] items-center mt-4 group">
                <CiMail className="size-7 lg:size-9 text-white group-hover:text-[#B8DE19] transition-transform duration-500" />
                <h1 className="text-[15px] font-light leading-[17px] lg:text-[20px] group-hover:text-[#B8DE19] transition-transform duration-500  text-white">
                  hello@gobayfi.com
                </h1>
              </div>
            </div>
            <div className="flex flex-row-reverse">
              <div className="w-14 z-20 h-14 lg:w-20 lg:h-20 bg-white rounded-full ml-[-15px] flex items-center justify-center">
                <Image
                  src="/Image/Polygon.svg"
                  width={12}
                  height={12}
                  alt="Polygon"
                  className="z-50 lg:w-5"
                />
              </div>
              <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full overflow-hidden z-5">
                     {showVideo && (
        <video
                  src="/Image/bayzidvideo.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="object-cover w-full h-full"
                ></video>
      )}
              </div>
            </div>
          </div>
          <h1 className="text-white  text-[17.45px] not-italic font-semibold leading-[26.175px] mt-6 lg:text-[24px]">
            Direct Message Us
          </h1>
          <div  onClick={() => {
                  window.open("https://wa.me/8801313395681", "_blank");
                }} className=" flex  gap-[7px] items-center mt-4 group">
            <FaWhatsapp className="size-7 lg:size-10 text-white  group-hover:text-[#B8DE19] transition-transform duration-500 " />
            <h1 className="text-[15px] font-light leading-[17px] lg:text-xl  group-hover:text-[#B8DE19] transition-transform duration-500 text-white ">
              +8801313395681
            </h1>
          </div>
          <div className="p-[17px] rounded-[11.633px] bg-white/10 mt-[34px] w-full">
            <div className="mt-2">
              <div className="">
                <h1 className="text-[15px] lg:text-xl text-white font-medium">Bayzid Islam</h1>
                <h3 className="text-[11px] text-white lg:text-[14px] font-normal mt-[14px]">
                  FOUNDER & CEO
                  <span className="font-extralight">@bayfi</span>
                </h3>
              </div>
              <div></div>
            </div>
            <p className="mt-[31px] text-white lg:text-[14px]    text-[10.179px] not-italic font-light leading-[17.45px] lg:leading-[21px]  ">
              I’m a full-time Frontend Developer and Designer at TabLess. My
              days are filled with bringing digital ideas to life. But the story
              doesn’t end there. On Fiverr, I’ve earned the title of Top-Rated
              Seller, crafting logos, brand identities, and websites that tell
              unique stories. Each project is a new chapter, and I love helping
              brands find their visual voice.
            </p>
          </div>
          {/* btn start */}
        <div onClick={openCalendlyPopup} className="hidden lg:block">
             <div className="group mr-6 mt-8 flex items-center">
               <button className="relative z-30 flex items-center justify-center overflow-hidden rounded-full border-2 border-[#B8DE19] px-7 py-3 text-[17px] font-medium text-white transition-all duration-700 hover:text-black after:absolute after:bottom-[33px] after:right-[45px] after:-z-20 after:h-0.5 after:w-0.5 after:translate-y-full after:rounded-md after:bg-[#B8DE19] after:transition-all after:duration-700 hover:after:scale-[300]">
                 Book a Free Call
       
                 <div className="relative ml-2 inline-block h-8 w-8">
                   {/* Default Star Icon */}
                   <Image
                     src="/Image/Star.svg"
                     alt="Star Icon"
                     width={24}
                     height={24}
                     className="absolute inset-0 m-auto h-6 w-6 transition-opacity duration-300 group-hover:opacity-0"
                   />
       
                   {/* Hover Circle */}
                   <div className="absolute inset-0 m-auto h-5 w-5 rounded-full bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
       
                   {/* Arrow Icon */}
                   <GoArrowRight className="absolute inset-0 m-auto h-5 w-4 text-black transition-all duration-300 group-hover:w-4 group-hover:-rotate-[60deg] group-hover:text-[#B8DE19]" />
                 </div>
               </button>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
