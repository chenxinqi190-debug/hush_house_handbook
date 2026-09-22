"use client";

import { useEffect, useState } from "react";

type Language = "en" | "zh";

const sites = [
  {
    id: "cookbook",
    title: {
      en: "COOKBOOK",
      zh: "菜谱",
    },
    description: {
      en: "For feeding the Librarian, their visitors, and other appetites.",
      zh: "供图书管理员、访客，以及其他有胃口之人果腹。",
    },
    icon: "/icons/cookbook.png",
    texture: "/textures/cookbook.jpg",
    url: "https://hush-house-cookbook.pages.dev",
  },
  {
    id: "craftbook",
    title: {
      en: "CRAFTBOOK",
      zh: "制作手册",
    },
    description: {
      en: "For making what the Librarian may need.",
      zh: "制作图书管理员或许会用得上的东西。",
    },
    icon: "/icons/craftbook.png",
    texture: "/textures/craftbook.png",
    url: "https://hush-house-craftbook.pages.dev",
  },
  {
    id: "memories",
    title: {
      en: "MEMORIES",
      zh: "回忆",
    },
    description: {
      en: "For finding the right Memory when one is needed.",
      zh: "在需要时，记起恰当的回忆。",
    },
    icon: "/icons/memories.png",
    texture: "/textures/memory.jpg",
    url: "https://hush-house-memory.pages.dev",
  },
];

const text = {
  en: {
    title: "HUSH HOUSE HANDBOOK",
    subtitle: "A Librarian's Reference",
    intro:
      "Three volumes of notes for the Librarian of Hush House. Consult whichever may be useful to the work at hand.",
    about: "ABOUT",
    aboutText:
      "Hush House Handbook is an unofficial collection of reference tools for BOOK OF HOURS.",
    language: "中文",
  },
  zh: {
    title: "噤声居屋图书管理员手册",
    subtitle: "图书管理员参考资料",
    intro:
      "为噤声居屋图书管理员整理的三册参考资料。请按手头工作的需要查阅。",
    about: "关于",
    aboutText:
      "噤声居屋图书管理员手册是为《司辰之书》制作的非官方参考工具合集。",
    language: "EN",
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");

  // Read ?lang=zh / ?lang=en when entering the Handbook.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get("lang");

    if (lang === "zh" || lang === "en") {
      setLanguage(lang);
    }
  }, []);

  function changeLanguage(lang: Language) {
    setLanguage(lang);

    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url);
  }

  function siteUrl(url: string) {
    return `${url}?lang=${language}`;
  }

  return (
    <main className="min-h-screen bg-parchment text-ink">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8 md:px-12 md:py-10">

        {/* Language */}
        <div className="flex justify-end items-center gap-2 text-lg">
  <button
    type="button"
    onClick={() => changeLanguage("en")}
    className={`font-en transition-opacity ${
      language === "en" ? "opacity-100" : "opacity-40 hover:opacity-70"
    }`}
  >
    EN
  </button>

  <span className="opacity-30">/</span>

  <button
    type="button"
    onClick={() => changeLanguage("zh")}
    className={`font-zh transition-opacity ${
      language === "zh" ? "opacity-100" : "opacity-40 hover:opacity-70"
    }`}
  >
    中文
  </button>
</div>

        {/* Header */}
        <header className="mx-auto mt-16 max-w-3xl text-center md:mt-24">
          <p
            className={`
              mb-5 text-base tracking-[0.3em] opacity-60
              ${language === "en" ? "font-en" : "font-zh"}
            `}
          >
            {text[language].subtitle}
          </p>

          <h1
            className={`
              text-4xl leading-tight md:text-6xl
              ${language === "en" ? "font-en" : "font-zh"}
            `}
          >
            {text[language].title}
          </h1>

          <p
            className={`
              mx-auto mt-8 max-w-2xl text-base leading-8 opacity-75
              md:text-lg
              ${language === "en" ? "font-en" : "font-zh"}
            `}
          >
            {text[language].intro}
          </p>
        </header>

        {/* Three volumes */}
<section className="
mx-auto mt-12
  grid w-full max-w-5xl
  justify-items-center
  items-start
  gap-12
  md:mt-24
  md:grid-cols-3
  md:gap-16">
  {sites.map((site) => (
    <a
      key={site.id}
      href={siteUrl(site.url)}
      className="
        group
        w-[220px]
        overflow-hidden
        rounded-2xl
        border border-ink/25
        bg-white/25
        transition-all duration-300
        hover:-translate-y-1
        hover:border-ink/50
        hover:shadow-lg
      "
    >
      {/* Illustration */}
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={site.icon}
          alt=""
          className="
            h-full w-full
            object-cover
            transition-transform duration-500
            group-hover
          "
        />
      </div>

      {/* Text */}
      <div className="flex h-[125px] flex-col
    border-t border-ink/15
    bg-cover bg-center
    px-4 py-4
    text-center"
      style={{ backgroundImage: `url(${site.texture})` }}>
        <h2
          className={`
            text-xl
            ${language === "en" ? "font-en" : "font-zh"}
          `}
        >
          {site.title[language]}
        </h2>

        <p
          className={`
            mt-4
            text-sm leading-6 opacity-65
            ${language === "en" ? "font-en" : "font-zh"}
          `}
        >
          {site.description[language]}
        </p>
      </div>
    </a>
  ))}
</section>

        {/* About */}
        <div className="mx-auto mt-24 border-t border-ink/20 pt-10 text-center">
  <a
    href={`/about?lang=${language}`}
    className={`
      text-lg tracking-[0.2em]
      opacity-60 transition-opacity hover:opacity-100
      ${language === "en" ? "font-en" : "font-zh"}
    `}
  >
    {language === "en" ? "ABOUT" : "关于"}
  </a>
</div>

        <div className="h-20" />
      </div>
    </main>
  );
}