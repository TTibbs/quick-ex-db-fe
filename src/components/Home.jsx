import React from "react";
import { motion } from "framer-motion";
import Intro from "./Intro";
import Demo from "./Demo";
import CreateExpgServerDemo from "./CreateExpgServerDemo";

const Home = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className="flex flex-col items-center gap-8 w-full px-4 sm:px-6 lg:px-8 mx-auto bg-zinc-900"
    >
      <Intro />
      <Demo />
      <CreateExpgServerDemo />
    </motion.section>
  );
};

export default Home;
