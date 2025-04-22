import { Mail } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#7FA7B0]  py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between md:items-center items-start mb-8">
          <div>
            <h3 className="text-2xl font-[600] text-[#FFFFFF]">
              International Coalition4Children
            </h3>
            <p className="text-sm text-[#FFFFFF]">
              Protecting parental rights and children&apos;s innocence
            </p>
            <p className="text-white flex items-center gap-2 mt-2">
              <span className="inline">
                <Mail className="h-4 w-4 text-white" />
              </span>
              <span className="text-[16px] font-[700]">
                Contact Us: ic4c@gmail.com
              </span>
            </p>
          </div>
          <a
            href="https://www.givesendgo.com/GFJPJ"
            target="_blank"
            className="bg-[#25525D] hover:bg-[#25525D]/95 text-white px-4 py-2 rounded-md mt-4 md:mt-0 transition-colors w-full text-center md:w-auto"
          >
            Donate
          </a>
        </div>
        <div className="border-t-2 border-[#FFFFFF] pt-6 mt-6">
          <p className="text-center text-sm text-[#FFFFFF]">
            © 2025 International Coalition4Children. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
