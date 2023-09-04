import { motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "@/lib/useMQ";

export default function Navbar() {
  const [toggle, setToggle] = useState<boolean>(false);
  const matches = useMediaQuery("(min-width: 1280px)");

  // If we are SSR just get the mediaquery from user
  const darkThemematches = !window
    ? useMediaQuery("(prefers-color-scheme: dark)")
    : window.localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in window.localStorage) &&
        useMediaQuery("(prefers-color-scheme: dark)"));
  const [themeToggle, setThemeToggle] = useState<boolean>(darkThemematches);

  return (
    <nav className="relative mx-8 mb-24 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg:mx-32 ">
      <h1 className="text-2xl font-bold ">
        <a href="/">I.D</a>
      </h1>

      {matches && (
        <ul className="flex gap-12 text-lg">
          <li className="dark:hover:text-secondary hover:text-primary-200">
            <a href="/">Home</a>
          </li>
          <li className="dark:hover:text-secondary hover:text-primary-200">
            <a href="/about">About</a>
          </li>
          <li className="dark:hover:text-secondary hover:text-primary-200">
            <a href="/projects">Projects</a>
          </li>
          <li className="dark:hover:text-secondary hover:text-primary-200">
            <a
              href="https://medium.com/@midiaby"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </li>
          <li className="dark:hover:text-secondary hover:text-primary-200">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      )}
      <button
        onClick={() =>
          setThemeToggle((prev) => {
            // if set via local storage previously
            // so that we dont catch out of SSR
            if (!window) return !prev;
            if (window.localStorage.getItem("color-theme")) {
              if (prev) {
                document.documentElement.classList.remove("dark");
                window.localStorage.setItem("color-theme", "light");
              } else {
                document.documentElement.classList.add("dark");
                window.localStorage.setItem("color-theme", "dark");
              }
            }
            return !prev;
          })
        }
        id="theme-toggle"
        type="button"
        className="text-primary-500 dark:text-secondary-400 hover:bg-blue-900 dark:hover:bg-secondary-700 focus:outline-none focus:ring-4 focus:ring-primary-200 dark:focus:ring-secondary-700 rounded-lg text-sm p-2.5"
      >
        {themeToggle && (
          <svg
            id="theme-toggle-dark-icon"
            className=" w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
        )}
        {themeToggle || (
          <svg
            id="theme-toggle-light-icon"
            className=" w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        )}
      </button>

      {!matches && (
        <div
          onClick={() => setToggle((prev) => !prev)}
          className="space-y-1.5 cursor-pointer z-40 "
        >
          <motion.span
            animate={{ rotateZ: toggle ? 45 : 0, y: toggle ? 8 : 0 }}
            className="block h-0.5 w-8 bg-black dark:bg-white"
          ></motion.span>
          <motion.span
            animate={{ width: toggle ? 0 : 24 }}
            className="block h-0.5 w-6 bg-black  dark:bg-white"
          ></motion.span>
          <motion.span
            animate={{ rotateZ: toggle ? -45 : 0, y: toggle ? -8 : 0 }}
            className="block h-0.5 w-8 bg-black  dark:bg-white"
          ></motion.span>
        </div>
      )}

      {toggle && !matches && (
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 25 }}
          className="fixed flex bg-theme-light dark:bg-theme-dark text-black dark:text-white bottom-0 left-0 w-full h-screen items-center justify-center"
        >
          <ul className="flex flex-col gap-16 text-lg">
            <li className="dark:hover:text-secondary hover:text-primary-200">
              <a href="/">Home</a>
            </li>
            <li className="dark:hover:text-secondary hover:text-primary-200">
              <a href="/about">About</a>
            </li>
            <li className="dark:hover:text-secondary hover:text-primary-200">
              <a href="/projects">Projects</a>
            </li>
            <li className="dark:hover:text-secondary hover:text-primary-200">
              <a
                href="https://medium.com/@midiaby"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </li>
            <li className="dark:hover:text-secondary hover:text-primary-200">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
