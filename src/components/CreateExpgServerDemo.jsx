import React, { useState } from "react";
import Button from "./ui/Button";

const CreateExpgServerDemo = () => {
  const [projectName, setProjectName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [hasGitHubRepo, setHasGitHubRepo] = useState(false);
  const [repoUrl, setRepoUrl] = useState("");
  const [isTypeScript, setIsTypeScript] = useState(false);
  const [output, setOutput] = useState("");

  const handleGenerate = () => {
    if (!projectName || !authorName) {
      setOutput("Please fill in all required fields.");
      return;
    }

    const folderStructure = isTypeScript
      ? `📁 ${projectName}/
├── 📁 tests/
│   └── app.test.ts
├── 📁 controllers/
│   └── users-controller.ts
├── 📁 db/
│   ├── 📁 data/
│   │   └── 📁 test-data/
│   │       └── index.ts
│   ├── 📁 seeds/
│   │   ├── run-seed.ts
│   │   └── seed.ts
│   ├── connection.ts
│   └── setup.sql
├── 📁 errors/
│   └── index.ts
├── 📁 models/
│   └── users-model.ts
├── 📁 node_modules/
├── 📁 routes/
│   ├── api-router.ts
│   └── users-router.ts
├── .env-example
├── .env.development
├── .env.production
├── .env.test
├── .gitignore
├── app.ts
├── endpoints.json
├── listener.ts
├── package-lock.json
├── package.json
└── tsconfig.json`
      : `📁 ${projectName}/
├── 📁 tests/
│   └── app.test.js
├── 📁 controllers/
│   └── users-controller.js
├── 📁 db/
│   ├── 📁 data/
│   │   └── 📁 test-data/
│   │       └── index.js
│   ├── 📁 seeds/
│   │   ├── run-seed.js
│   │   └── seed.js
│   ├── connection.js
│   └── setup.sql
├── 📁 errors/
│   └── index.js
├── 📁 models/
│   └── users-model.js
├── 📁 node_modules/
├── 📁 routes/
│   ├── api-router.js
│   └── users-router.js
├── .env-example
├── .env.development
├── .env.production
├── .env.test
├── .gitignore
├── app.js
├── endpoints.json
├── listener.js
├── package-lock.json
└── package.json`;

    setOutput(
      `Project Name: ${projectName}
Author: ${authorName}
GitHub Repository: ${hasGitHubRepo ? repoUrl : "No"}
TypeScript: ${isTypeScript ? "Yes" : "No"}

Directory Structure:
${folderStructure}`
    );
  };

  return (
    <section className="p-6 bg-gray-100 rounded shadow-lg max-w-screen-xl mt-20 mb-10">
      <h3 className="text-2xl font-semibold text-center mb-6">
        Interactive Demo
      </h3>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Project Name:</label>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter project name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Author Name:</label>
        <input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter author name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Do you have a GitHub repository?
        </label>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setHasGitHubRepo(!hasGitHubRepo)}
            className={`px-4 py-2 rounded ${
              hasGitHubRepo ? "bg-green-500 text-white" : "bg-gray-300"
            }`}
          >
            {hasGitHubRepo ? "Yes" : "No"}
          </button>
          {hasGitHubRepo && (
            <input
              type="text"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter GitHub repo URL"
            />
          )}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Do you want to use TypeScript?
        </label>
        <button
          onClick={() => setIsTypeScript(!isTypeScript)}
          className={`px-4 py-2 rounded ${
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
        <pre className="mt-6 p-4 bg-gray-800 text-white rounded whitespace-pre-wrap">
          {output}
        </pre>
      )}
    </section>
  );
};

export default CreateExpgServerDemo;
