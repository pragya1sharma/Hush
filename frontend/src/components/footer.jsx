import React from "react";

export default function Footer() {
  return (
    <footer
      id="footer-section"
      className="bg-[#FBF3E8] border-t border-[#e8d5c4] text-[#3e807f] py-8 px-4 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Contact Info */}
        <div>
          <h2 className="font-playfair text-2xl font-bold mb-2 text-[#FFBB97]">
            Contact
          </h2>
          <p className="mb-1">Email: pragya.artik@gmail.com</p>
          <p className="mb-1">Phone: +91 8899798911</p>
        </div>
        {/* Address */}
        <div>
          <h2 className="font-playfair text-2xl font-bold mb-2 text-[#FFBB97]">
            Address
          </h2>
          <p>PGH,NIT Hamirpur,177005</p>
          <p>Himachal Pradesh,India</p>
        </div>
        {/* Feedback */}
        <div>
          <h2 className="font-playfair text-2xl font-bold mb-2 text-[#FFBB97]">
            Feedback
          </h2>
          <p className="mb-2">
            Please take out some time to write us your valuable feedback about
            the product at the given contacts
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 text-center text-sm text-[#3e807f] opacity-80">
        &copy; {new Date().getFullYear()} Hush. All rights reserved by
        PragyaSharma.
      </div>
    </footer>
  );
}
