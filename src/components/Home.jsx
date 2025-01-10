import React from "react";
import CreateExpgServerDemo from "./CreateExpgServerDemo";
import Demo from "./Demo";
import Intro from "./Intro";

const Home = () => {
  return (
    <section className="flex flex-col items-center gap-8 w-full px-4 sm:px-6 lg:px-8 mx-auto bg-zinc-900">
      <Intro />
      <Demo />
      <CreateExpgServerDemo />
    </section>
  );
};

export default Home;
