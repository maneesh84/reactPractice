import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useCallback } from "react";

function App() {
  const [password, setPass] = useState("");
  const [number, setNumber] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [length, setLength] = useState(8);

  let passwordRef = useRef(null); //password reference

  let passGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) {
      string += "1234567890";
    }
    if (specialChar) {
      string += "!@#$%^&*-_+=[]{}~`";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * string.length);
      pass += string[char];
    }
    setPass(pass);
  }, [setPass, number, specialChar, length]);

  const copyPassword = useCallback(() => {
    console.log("copy");
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passGenerator();
  }, [passGenerator, number, specialChar, length]);

  return (
    <>
      <div className="mx-auto max-w-150 items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 ">
        <h1 className="text-xl font-medium text-black dark:text-white">
          Password Generator
        </h1>

        <div className=" ">
          <div>
            <label htmlFor="Email" className="relative">
              <input
                type="text"
                id="pass"
                value={password}
                className="peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white p-2 mt-8"
                readOnly
                ref={passwordRef}
              />

              <span className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-gray-900 dark:text-white ">
                Password
              </span>
            </label>
          </div>
          <div className="m-7">
            <button
              className="group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:ring-3 focus:outline-hidden"
              onClick={() => {
                copyPassword();
              }}
            >
              <span className=" block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                Copy
              </span>
            </button>
          </div>
        </div>

        <div>
          <div className="flex text-sm gap-x-2 mt-5">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={30}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label className="text-s font-medium text-black dark:text-white">
                Length: {length}
              </label>
            </div>

            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={number}
                id="numberInput"
                onChange={() => {
                  setNumber((prev) => !prev);
                }}
              />
              <label
                htmlFor="numberInput"
                className="text-s font-medium text-black dark:text-white"
              >
                Numbers
              </label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={specialChar}
                id="specialCharInput"
                onChange={() => {
                  setSpecialChar((prev) => !prev);
                }}
              />
              <label
                htmlFor="specialCharInput"
                className="text-s font-medium text-black dark:text-white"
              >
                Special Char
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
