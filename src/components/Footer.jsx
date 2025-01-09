import React from "react";

const Footer = () => {
  return (
    <footer className="w-full px-6 md:px-24 lg:px-48 py-4 bg-zinc-900 text-zinc-200">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
        <h2 className="text-sm md:text-base text-center md:text-left">
          Created by{" "}
          <a
            href="https://www.linkedin.com/in/terry-www/"
            target="_blank"
            rel="noreferrer"
            className="font-bold hover:underline"
          >
            Terry Ward
          </a>
        </h2>
        <h2 className="text-sm md:text-base text-center md:text-right">
          Design inspired by{" "}
          <a
            href="https://tidyup.bossadizenith.me/"
            target="_blank"
            rel="noreferrer"
            className="font-bold hover:underline"
          >
            Tidyup
          </a>
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
