import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiCopy } from "react-icons/fi";
import Button from "./ui/Button";

const Intro = () => {
  const [copied, setCopied] = useState(false);
  const command = `npm i create-expg-server`;

  const handleCopy = () => {
    navigator.clipboard
      .writeText(command)
      .then(() => setCopied(true))
      .catch(() => setCopied(false));
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.section
      id="home"
      className="flex flex-col items-center justify-center text-center gap-5 pt-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-zinc-200">
        Create Expg Server
      </h2>
      <p className="text-base md:text-lg text-zinc-200 px-5">
        A simple CLI tool to scaffold your Express and PostgreSQL projects with
        ease.
      </p>
      <div className="flex items-center justify-center gap-5">
        <Button
          href="https://www.npmjs.com/package/create-expg-server"
          target="_blank"
          bgColor="bg-zinc-600"
          textColor="text-zinc-200"
          className="hover:bg-zinc-700 transition-all duration-300 ease-linear font-bold"
        >
          NPM
        </Button>
        <Button
          href="https://github.com/TTibbs/create-expg-app"
          target="_blank"
          bgColor="bg-zinc-200"
          textColor="text-zinc-900"
          className="hover:bg-zinc-300 transition-all duration-300 ease-linear font-bold"
        >
          GitHub
        </Button>
      </div>
      <div className="mt-20">
        <h2 className="text-base md:text-lg text-start font-bold text-zinc-200">
          Installation
        </h2>
        <code className="bg-gray-200 text-zinc-800 rounded-lg shadow-md py-2 px-4 flex items-center justify-between gap-2 w-[300px] md:w-[450px] lg:w-[600px]">
          <pre className="text-sm font-mono whitespace-pre-wrap break-words">
            {command}
          </pre>
          <button
            onClick={handleCopy}
            className="py-1 px-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all duration-300 ease-linear flex items-center gap-2"
          >
            <FiCopy className="w-4 h-4" />
            {copied ? "Copied!" : "Copy"}
          </button>
        </code>
      </div>
    </motion.section>
  );
};

export default Intro;
