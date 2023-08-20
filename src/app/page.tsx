"use client";

import Image from "next/image";
import Editor from "react-simple-code-editor";
import { Stars, Trash2 } from "lucide-react";
import { useCompletion } from "ai/react";

import { highlight, languages } from "prismjs";
import "prismjs/components/prism-sql";
import "prismjs/themes/prism-dark.css";

import { useState } from "react";

export default function RootPage() {
  const [schema, setSchema] = useState("");

  const { completion, handleSubmit, input, handleInputChange } = useCompletion({
    api: "/api/generate-sql",
    body: {
      schema,
    },
  });

  const result = completion;

  return (
    <div className="max-w-[430px] mx-auto px-4 pt-12 pb-4">
      <header className="flex items-center justify-between">
      <Image src="/logo.svg" width={130} height={130} alt='SQL' />


        <button type="button">
          <Trash2 className="h-8 w-8 text-snow" strokeWidth={0.8} />
        </button>
      </header>

      <form
        className="py-8 w-full flex flex-col text-foam"
        onSubmit={handleSubmit}
      >
        <label htmlFor="schema" className="text-lg font-light">
          Cole seu código SQL aqui:
        </label>

        <Editor
          textareaId="schema"
          value={schema}
          onValueChange={(schema) => setSchema(schema)}
          highlight={(schema) => highlight(schema, languages.sql, "sql")}
          padding={16}
          textareaClassName="outline-none"
          className="my-4 h-40 font-mono bg-blueberry-600 border border-blueberry-300 rounded-md focus-within:ring-2 focus-within:ring-lemon-600"
        />

        <label htmlFor="question" className="text-lg font-light">
          Faça uma pergunta sobre o código:
        </label>
        <textarea
          className="my-4 bg-blueberry-600 border border-blueberry-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-lemon-600"
          name="question"
          id="question"
          value={input}
          onChange={handleInputChange}
        ></textarea>

        <button
          type="submit"
          className="text-pistachio font-semibold flex items-center justify-center gap-2 rounded-lg border border-pistachio h-14"
        >
          <Stars className="w-6 h-6" />
          Perguntar à inteligência artificial
        </button>
      </form>

      <div className="mt-6">
        <span className="text-foam text-lg font-light">Resposta:</span>
        <textarea
          value={result}
          className="my-4 w-full font-mono text-foam h-40 bg-blueberry-600 border border-blueberry-300 rounded-md px-4 py-3 outline-none"
        />
      </div>
    </div>
  );
}