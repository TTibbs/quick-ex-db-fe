import { motion } from "framer-motion";

const Demo = () => {
  return (
    <section
      id="demo"
      className="bg-gradient-to-t from-slate-200 to-slate-100 border rounded-md py-6 px-2 w-full max-w-[95%] md:max-w-[700px] mx-auto mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="size-full"
      >
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-4 h-4 rounded-full bg-red-500" />
          <div className="w-4 h-4 rounded-full bg-yellow-500" />
          <div className="w-4 h-4 rounded-full bg-green-500" />
        </div>
        <div className="font-mono text-sm text-neutral-700 space-y-2">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="flex items-center"
          >
            <span className="font-bold text-indigo-600 text-base md:text-lg">
              <span className="font-bold text-2xl">→</span> Welcome to
              <span className="text-primary ml-2">create-expg-server!</span>
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Project name: <span className="font-medium">the-best-app</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2.25 }}
          >
            Author name: <span className="font-medium">TTibbs</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            Do you have a GitHub repository? (y/n):{" "}
            <span className="font-medium">y</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 3.75 }}
          >
            GitHub repository URL:{" "}
            <span className="font-medium break-words whitespace-normal">
              https://github.com/TTibbs/project_name.git
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 4.5 }}
          >
            Do you want to use TypeScript? (y/n):{" "}
            <span className="font-medium">y</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 5.25 }}
          >
            Creating project directory at ...
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 6 }}
          >
            Project setup complete.
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 6.75 }}
          >
            🗂️ Creating project structure...
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 7.5 }}
          >
            📍 GitHub repository already exists.
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 8.25 }}
          >
            ⚙️ Setting up TypeScript...
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 9 }}
          >
            💾 Installing dependencies...
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 9.75 }}
          >
            ✅ Success! Your Express app is ready at ...
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Demo;
