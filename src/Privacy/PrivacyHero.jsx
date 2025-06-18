"use client";
import { BsDot } from "react-icons/bs";
import RouteNav from "@/Neios/Header/RouteNav";
import RouteNav2 from "@/Neios/Header/RouteNav2";
import { useState } from "react";

const PrivacyHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div id="hero"   className={`z-0 relative w-full pt-8 transition-all duration-500 ${
          isMenuOpen ? "overflow-hidden h-screen" : "overflow-visible h-auto"
        }`}>
        <div className=" w-11/12 mx-auto lg:w-10/12 block lg:hidden">
          <RouteNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
        <div className=" lg:mb-20 w-11/12 mx-auto lg:w-10/12">
          <RouteNav2 />
        </div>
        <div className=" mt-12 lg:mt-[128px] w-11/12 mx-auto lg:w-10/12">
          <h1 className=" text-2xl lg:text-5xl font-medium leading-[36px] text-[#0C1F0c]">
            Privacy Policy for BayFi LLC
          </h1>
          <p className="mt-9 text-[13px] lg:text-[16px] lg:leading-[24px] font-normal leading-[22px] text-[#0C1F0c]">
            BayFi LLC ("BayFi," "we," "us," or "our"), registered at Near By
            Police Officer Mess, Keeramottia Moszid Road, Rangpur Sadar 5400,
            Rangpur, Bangladesh, is committed to protecting the privacy of
            individuals who visit our website (https://gobayfi.com) (the
            "Site"), use our services, or use our software products ("Software
            Products"). This Privacy Policy outlines how we collect, use,
            disclose, and protect your Personal Information. By using our Site,
            Services, or Software Products, you consent to the data practices
            described in this policy. If a separate privacy notice is provided
            for a specific Software Product, that notice will apply to that
            product.
          </p>
          {/* One */}
          <div>
            <h1 className="mt-14 lg:mt-20 font-medium text-[18px] lg:text-4xl text-[#0C1F0c]">
              1. Use of the Site
            </h1>
            <p className="text-sm leading-[28px]  lg:text-[16px] text-[#0C1F0c] mt-[6px] lg:mt-9">
              We may collect and process the following types of information:
            </p>
            <h1 className="mt-5 lg:mt-4 font-medium text-[13px] lg:text-[16px] text-[#0C1F0c]">
              a. Personal Information You Provide to Us:
            </h1>
            <div className="ml-[0px] lg:ml-7    grid grid-cols-[30px_1fr] items-start">
              <div className="flex items-start pt-2">
                <BsDot className="text-[24px]  lg:text-2xl text-[#0C1F0c]" />
              </div>
              <p className="text-sm leading-[28px]  lg:text-[16px] text-[#0C1F0c] mt-[6px]">
                <span className="font-medium">Through the Site:</span>
                 When you fill out our contact form or otherwise communicate
                with us via the Site, you may provide us with personal
                information such as your name, email address, phone number
                (optional), company name (optional), and the content of your
                message.
              </p>
            </div>

            <div className="ml-[0px] lg:ml-7 grid grid-cols-[30px_1fr] items-start">
              <div className="flex items-start pt-2">
                <BsDot className="text-[24px] lg:text-2xl text-[#0C1F0c]" />
              </div>
              <p className="text-sm leading-[28px] lg:text-[16px] text-[#0C1F0c] mt-[6px]">
                <span className="font-medium">For Our Services: </span>
                When engaging our services, we may collect information necessary
                to provide those services, as detailed in client agreements.
              </p>
            </div>
            <div className="ml-[0px] lg:ml-7 grid grid-cols-[30px_1fr] items-start">
              <div className="flex items-start pt-2">
                <BsDot className="text-[24px] lg:text-2xl text-[#0C1F0c]" />
              </div>
              <p className="text-sm leading-[28px] lg:text-[16px] text-[#0C1F0c] mt-[6px]">
                <span className="font-medium">For Our Software Products: </span>
                 When you register for, purchase, download, or use our Software
                Products, we may collect:
              </p>
            </div>
            <div className="ml-[20px] lg:ml-16 grid grid-cols-[30px_1fr] items-start">
              <div className="flex items-start pt-2">
                <BsDot className="text-[24px] lg:text-2xl text-[#0C1F0c]" />
              </div>
              <p className="text-sm leading-[28px] lg:text-[16px] text-[#0C1F0c] mt-[6px]">
                <span className="font-medium">Account Information:</span>
                 Name, email address, username, password, company information,
                and other details required for account setup and management.
              </p>
            </div>
            <div className="ml-[20px] lg:ml-16 grid grid-cols-[30px_1fr] items-start">
              <div className="flex items-start pt-2">
                <BsDot className="text-[24px] lg:text-2xl text-[#0C1F0c]" />
              </div>
              <p className="text-sm leading-[28px] lg:text-[16px] text-[#0C1F0c] mt-[6px]">
                <span className="font-medium">Payment Information:</span>
                 If our Software Products are paid, we may collect payment
                details (e.g., credit card number, billing address). This
                information is typically processed securely by a third-party
                payment processor, and we generally only store a transaction
                identifier or partial payment information for record-keeping.
                Information You Input: Data you voluntarily enter, upload, or
                create within our Software Products as part of their
                functionality.
              </p>
            </div>
            <h1 className="mt-5 lg:mt-9  font-medium text-[13px] lg:text-[16px] text-[#0C1F0c]">
              b. Information We Collect Automatically:
            </h1>
            <div className="ml-[0px] lg:ml-7    grid grid-cols-[30px_1fr] items-start">
              <div className="flex items-start pt-2">
                <BsDot className="text-[24px]  lg:text-2xl text-[#0C1F0c]" />
              </div>
              <p className="text-sm leading-[28px]  lg:text-[16px] text-[#0C1F0c] mt-[6px]">
                <span className="font-medium">
                  From the Site (Usage Data): 
                </span>
                 When you visit our Site, we automatically collect certain
                information about your device and your interaction with our
                Site. This may include IP address, browser type, browser
                version, operating system, the pages of our Site that you visit,
                the time and date of your visit, the time spent on those pages,
                and other statistics. We use cookies and similar technologies
                like Google Analytics for this.
              </p>
            </div>

            <div className="ml-[0px] lg:ml-7 grid grid-cols-[30px_1fr] items-start">
              <div className="flex items-start pt-2">
                <BsDot className="text-[24px] lg:text-2xl text-[#0C1F0c]" />
              </div>
              <p className="text-sm leading-[28px] lg:text-[16px] text-[#0C1F0c] mt-[6px]">
                <span className="font-medium">
                  From Software Products (Usage Data):{" "}
                </span>
                When you use our Software Products, we may automatically
                collect:
              </p>
            </div>
            <div className="ml-[20px] lg:ml-16 grid grid-cols-[30px_1fr] items-start">
              <div className="flex items-start pt-2">
                <BsDot className="text-[24px] lg:text-2xl text-[#0C1F0c]" />
              </div>
              <p className="text-sm leading-[28px] lg:text-[16px] text-[#0C1F0c] mt-[6px]">
                <span className="font-medium">Device and System Information:</span>
                 Information about the device you use to access the Software Product (e.g., hardware model, operating system version, unique device identifiers, IP address).
              </p>
            </div>
            <div className="ml-[20px] lg:ml-16 grid grid-cols-[30px_1fr] items-start">
              <div className="flex items-start pt-2">
                <BsDot className="text-[24px] lg:text-2xl text-[#0C1F0c]" />
              </div>
              <p className="text-sm leading-[28px] lg:text-[16px] text-[#0C1F0c] mt-[6px]">
                <span className="font-medium">Usage Information</span>
                  Data about how you use the Software Product, such as features accessed, actions taken, time spent, error logs, and performance data. This helps us improve the products and provide support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyHero;
