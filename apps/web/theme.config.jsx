import Image from "next/image";
import { useRouter } from "next/router";
import { ThemeSwitch, useConfig } from "nextra-theme-docs";
import LogoDark from "public/logo-dark.svg";
import LogoLight from "public/logo-light.svg";

/** @type {import('nextra-theme-docs').DocsThemeConfig} */
const config = {
  project: {
    link: "https://github.com/rinvii/dont-fail",
  },
  docsRepositoryBase: "https://github.com/rinvii/dont-fail/tree/main/apps/web",
  useNextSeoProps() {
    return {
      titleTemplate: "%s - CS 305",
    };
  },
  head: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { frontMatter, title } = useConfig();
    const ogTitle = title ? `${title} - CS 305` : "CS 305";
    const ogDescription = frontMatter.description;
    const ogImage = frontMatter.image;

    return (
      <>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="apple-mobile-web-app-title" content="Data Structures" />
      </>
    );
  },
  sidebar: {
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  logo: (
    <>
      <Image src={LogoLight} alt="Logo" className="block dark:hidden" />
      <Image src={LogoDark} alt="Logo" className="hidden dark:block" />
      <span className="mx-2 select-none font-extrabold">CS 305</span>
    </>
  ),
  footer: {
    component({ menu }) {
      return (
        <footer className="z">
          <div className="pointer-events-none absolute top-0 h-12 w-full -translate-y-full bg-gradient-to-t from-[#FAFAFA] to-transparent dark:from-black"></div>
          <div
            className={`mx-auto max-w-[90rem] px-4 py-2 ${
              menu ? "flex" : "hidden"
            } gap-2`}
          >
            <ThemeSwitch />
          </div>
          <hr className="dark:nx-border-neutral-800" />
          <div className="py-12"></div>
        </footer>
      );
    },
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  gitTimestamp({ timestamp }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { locale } = useRouter();
    // const lastUpdatedOn = useLocalesMap(gitTimestampMap);

    return (
      <>
        {/* {lastUpdatedOn}{" "} */}
        Last updated on{" "}
        <time dateTime={timestamp.toISOString()}>
          {timestamp.toLocaleDateString(locale, {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
      </>
    );
  },
};

export default config;
