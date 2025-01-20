import { motion } from "framer-motion";

const Demo = () => {
  return (
    <section
      id="demo"
      className="bg-gradient-to-t from-slate-200 to-slate-100 border rounded-md p-6 w-full max-w-[95%] md:max-w-[700px] mx-auto mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="size-full"
      >
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-4 h-4 rounded-full bg-red-500" />
          <div className="w-4 h-4 rounded-full bg-yellow-500" />
          <div className="w-4 h-4 rounded-full bg-green-500" />
        </div>
        <div className="font-mono text-sm text-neutral-700 space-y-2">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center"
          >
            <span className="font-bold text-indigo-600 text-base md:text-lg">
              <span className="font-bold text-2xl">→</span> Welcome to{" "}
              <span className="text-primary ml-2">create-mvc-server!</span>
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Project name: <span className="font-medium">test</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Initialise a git repository?{" "}
            <span className="font-medium">yes</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            Select Server Framework: <span className="font-medium">Hono</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            Select Database <span className="font-medium">Postgres</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            Select Language <span className="font-medium">TypeScript</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 3.5 }}
          >
            Initialised empty git repository in{" "}
            <span className="font-medium">/.../test/.git/</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 4 }}
          >
            ✅ Done. Now run:
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 4.5 }}
            className="bg-gray-200 text-zinc-800 rounded-lg shadow-md py-2 px-4 mt-2"
          >
            <pre className="text-sm font-mono whitespace-pre-wrap break-words">
              cd test
              <br />
              npm install
            </pre>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Demo;
