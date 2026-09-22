"use client";

import { useEffect, useState } from "react";

type Language = "en" | "zh";

const content = {
  en: {
    title: "ABOUT",
    project: "PROJECT",
    includes: "The Handbook currently includes:",
    volumes: [
      ["COOKBOOK", "Recipes for the Librarian's table."],
      ["CRAFTBOOK", "Crafting methods, materials, and remedies."],
      ["MEMORIES", "A ledger of memories and their sources."],
    ],
    contact: "CONTACT THE LIBRARIAN WHO MADE THIS",
    credits: "CREDITS",
    gameData: "Game data: from the game.",
    verification: "Additional verification:",
    disclaimer: "DISCLAIMER",
    disclaimerText:
      "This website is a non-commercial fan project created for reference purposes only. BOOK OF HOURS and all related intellectual property belong to Weather Factory.",
    back: "RETURN TO THE HANDBOOK",
  },

  zh: {
    title: "关于",
    project: "项目",
    includes: "手册目前包括：",
    volumes: [
      ["菜谱", "图书管理员餐桌上的食谱。"],
      ["制作手册", "制作方法、材料与处理方案。"],
      ["回忆", "记录回忆及其来源的账本。"],
    ],
    contact: "联系制作本手册的图书管理员",
    credits: "鸣谢",
    gameData: "游戏数据：来自游戏本体。",
    verification: "补充核对：",
    disclaimer: "免责声明",
    disclaimerText:
      "本网站为非商业性质的玩家自制项目，仅供资料查阅使用。《司辰之书》及相关知识产权均归 Weather Factory 所有。",
    back: "返回手册",
  },
};

export default function About() {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get("lang");

    if (lang === "en" || lang === "zh") {
      setLanguage(lang);
    }
  }, []);

  function changeLanguage(lang: Language) {
    setLanguage(lang);

    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url);
  }

  const t = content[language];

  return (
    <main className="min-h-screen bg-parchment text-ink">
      <div className="mx-auto max-w-3xl px-6 py-8 md:px-12 md:py-10">

        {/* Language */}
        <div className="flex items-center justify-end gap-2 text-lg">
          <button
            type="button"
            onClick={() => changeLanguage("en")}
            className={`font-en transition-opacity ${
              language === "en"
                ? "opacity-100"
                : "opacity-40 hover:opacity-70"
            }`}
          >
            EN
          </button>

          <span className="opacity-30">/</span>

          <button
            type="button"
            onClick={() => changeLanguage("zh")}
            className={`font-zh transition-opacity ${
              language === "zh"
                ? "opacity-100"
                : "opacity-40 hover:opacity-70"
            }`}
          >
            中文
          </button>
        </div>

        {/* About */}
        <article
          className={`mt-16 md:mt-24 ${
            language === "en" ? "font-en" : "font-zh"
          }`}
        >
          <h1 className="text-center text-4xl md:text-5xl">
            {t.title}
          </h1>

          <section className="mt-16">
            <h2 className="text-xl tracking-widest">
              {t.project}
            </h2>

            <p className="mt-5 leading-8 opacity-75">
              <strong> {language === "en"
    ? "Hush House Handbook"
    : "噤声居屋图书管理员手册"}</strong>
  {language === "en"
    ? ' is an unofficial fan-made collection of reference tools for BOOK OF HOURS and its DLC "HOUSE OF LIGHT".'
    : " 是为《司辰之书》及其 DLC《光之屋》制作的非官方玩家参考工具合集。"}
            </p>

            <p className="mt-6 leading-8 opacity-75">
              {t.includes}
            </p>

            <ul className="mt-3 space-y-2 leading-7 opacity-75">
              {t.volumes.map(([name, description]) => (
                <li key={name}>
                  <span className="font-semibold">{name}</span>
                  {" — "}
                  {description}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14 border-t border-ink/15 pt-10">
            <h2 className="text-xl tracking-widest">
              {t.contact}
            </h2>

            <div className="mt-5 space-y-2 leading-7 opacity-75">
              <p>burnikodoesntburn @ tumblr</p>
              <p>阿铙铙纸 @ {language === "en" ? "rednote" : "小红书"}</p>
            </div>
          </section>

          <section className="mt-14 border-t border-ink/15 pt-10">
            <h2 className="text-xl tracking-widest">
              {t.credits}
            </h2>

            <p className="mt-5 leading-7 opacity-75">
              {t.gameData}
            </p>

            <p className="mt-3 leading-7 opacity-75">
              {t.verification}
            </p>

            <ul className="mt-2 space-y-2 leading-7 opacity-75">
              <li>
                Book of Hours Wiki (en):{" "}
                <a
                  href="https://book-of-hours.fandom.com/wiki/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:opacity-60"
                >
                  Book of Hours Wiki
                </a>
              </li>

              <li>
                Book of Hours Wiki (zh):{" "}
                <a
                  href="https://boh.huijiwiki.com/wiki/%E9%A6%96%E9%A1%B5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:opacity-60"
                >
                  司辰之书中文维基
                </a>
              </li>
            </ul>
          </section>

          <section className="mt-14 border-t border-ink/15 pt-10">
            <h2 className="text-xl tracking-widest">
              {t.disclaimer}
            </h2>

            <p className="mt-5 leading-8 opacity-75">
              {t.disclaimerText}
            </p>
          </section>

          {/* Return */}
          <div className="mt-20 border-t border-ink/15 pt-8 text-center">
            <a
              href={`/?lang=${language}`}
              className="text-lg tracking-widest opacity-60 transition-opacity hover:opacity-100"
            >
              ← {t.back}
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}