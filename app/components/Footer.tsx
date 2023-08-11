import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2d2e2ef0]">
      <div className="flex justify-center py-5 items-center gap-x-2">
        <div className="flex items-center">
          <img src="/images/copyright.svg" alt="copy-right" width={20} />
          <span>2023</span>
        </div>
        <div>Develop by Hoai Tran</div>
      </div>
    </footer>
  );
};

export default Footer;
