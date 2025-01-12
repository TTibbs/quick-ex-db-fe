import React, { useState } from "react";
import Button from "./ui/Button";

const CreateExpgServerDemo = () => {
  const [projectName, setProjectName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [selectedDatabase, setSelectedDatabase] = useState("postgres");
  const [isTypeScript, setIsTypeScript] = useState(false);
  const [output, setOutput] = useState("");

  const databaseOptions = {
    postgres: {
      name: "PostgreSQL",
      structure: `
📁 ${projectName || "psql-test"}/
├── 📁 __tests__/
│   └── app.test.${isTypeScript ? "ts" : "js"}
├── 📁 controllers/
│   └── user-controller.${isTypeScript ? "ts" : "js"}
├── 📁 db/
│   ├── 📁 data/
│   │   └── 📁 test-data/
│   │       └── index.${isTypeScript ? "ts" : "js"}
│   ├── 📁 seeds/
│   │   ├── run-seed.${isTypeScript ? "ts" : "js"}
│   │   └── seed.${isTypeScript ? "ts" : "js"}
│   ├── connection.${isTypeScript ? "ts" : "js"}
│   └── setup.sql
├── 📁 errors/
│   └── index.${isTypeScript ? "ts" : "js"}
├── 📁 models/
│   └── user-model.${isTypeScript ? "ts" : "js"}
├── 📁 routes/
│   ├── api-router.${isTypeScript ? "ts" : "js"}
│   └── user-router.${isTypeScript ? "ts" : "js"}
├── app.${isTypeScript ? "ts" : "js"}
├── listener.${isTypeScript ? "ts" : "js"}
├── .gitignore
├── .env-example
├── .env-test
├── .env-development
├── .env-production
├── endpoints.json
${
  isTypeScript
    ? `├── package.json
└── tsconfig.json`
    : `└── package.json`
}
      `,
    },
    sqlite: {
      name: "SQLite",
      structure: `
📁 ${projectName || "sqlite-test"}/
├── 📁 config/
│   └── db.${isTypeScript ? "ts" : "js"}
├── 📁 controllers/
│   └── userController.${isTypeScript ? "ts" : "js"}
├── 📁 models/
│   └── userModel.${isTypeScript ? "ts" : "js"}
├── 📁 routes/
│   └── userRoutes.${isTypeScript ? "ts" : "js"}
├── app.${isTypeScript ? "ts" : "js"}
├── server.${isTypeScript ? "ts" : "js"}
├── .env
├── .gitignore
${
  isTypeScript
    ? `├── package.json
└── tsconfig.json`
    : `└── package.json`
}
      `,
    },
    mongodb: {
      name: "MongoDB",
      structure: `
📁 ${projectName || "mongo-test"}/
├── 📁 database/
│   └── connection.${isTypeScript ? "ts" : "js"}
├── 📁 controllers/
│   └── userController.${isTypeScript ? "ts" : "js"}
├── 📁 models/
│   └── userModel.${isTypeScript ? "ts" : "js"}
├── 📁 routes/
│   └── userRoutes.${isTypeScript ? "ts" : "js"}
├── app.${isTypeScript ? "ts" : "js"}
├── server.${isTypeScript ? "ts" : "js"}
├── .env
├── .gitignore
${
  isTypeScript
    ? `├── package.json
└── tsconfig.json`
    : `└── package.json`
}
      `,
    },
  };

  const handleGenerate = () => {
    if (!projectName || !authorName) {
      setOutput("Please fill in all required fields.");
      return;
    }

    const selectedOption = databaseOptions[selectedDatabase];
    const folderStructure = selectedOption
      ? selectedOption.structure
      : "Invalid database selected.";

    setOutput(
      `Project Name: ${projectName}
Author: ${authorName}
Database: ${selectedOption.name}

Directory Structure:
${folderStructure}`
    );
  };

  return (
    <section className="p-6 sm:p-8 md:p-10 bg-gray-100 rounded-lg shadow-lg w-[400px] md:w-[600px] mx-auto mt-10 mb-10">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-6">
        Interactive Demo
      </h3>
      <div className="mb-4">
        <label className="block text-sm sm:text-base font-medium mb-2">
          Project Name:
        </label>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="w-full p-2 sm:p-3 border rounded-lg"
          placeholder="Enter project name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm sm:text-base font-medium mb-2">
          Author Name:
        </label>
        <input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          className="w-full p-2 sm:p-3 border rounded-lg"
          placeholder="Enter author name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm sm:text-base font-medium mb-2">
          Choose Database:
        </label>
        <select
          value={selectedDatabase}
          onChange={(e) => setSelectedDatabase(e.target.value)}
          className="w-full p-2 sm:p-3 border rounded-lg"
        >
          {Object.keys(databaseOptions).map((key) => (
            <option key={key} value={key}>
              {databaseOptions[key].name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm sm:text-base font-medium mb-2">
          Do you want to use TypeScript?
        </label>
        <button
          onClick={() => setIsTypeScript(!isTypeScript)}
          className={`py-2 px-3 rounded-lg ${
            isTypeScript ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          {isTypeScript ? "Yes" : "No"}
        </button>
      </div>
      <div className="w-40 mx-auto">
        <Button
          onClick={handleGenerate}
          bgColor="bg-indigo-500"
          textColor="text-white"
          className="hover:bg-indigo-600 transition-all duration-300 ease-linear"
        >
          Generate
        </Button>
      </div>
      {output && (
        <pre className="mt-6 p-4 bg-gray-800 text-white rounded whitespace-pre-wrap text-sm sm:text-base">
          {output}
        </pre>
      )}
    </section>
  );
};

export default CreateExpgServerDemo;
