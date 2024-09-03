import InputField from "@/components/base/input";
import React from "react";
import Image from "next/image";

function RegisterPage() {
  return (
    <div className="overflow-hidden h-screen bg-white max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        <aside className="flex flex-col w-[60%]">
          <div className="flex flex-col grow justify-center items-center px-20 py-64 h-screen w-full bg-blue-500 max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full max-md:hidden">
            <Image
              loading="lazy"
              src="/authimage.svg"
              alt="Ankasa logo"
              className="object-contain max-w-full aspect-[0.93] w-[463px]"
              width={463}
              height={463}
            />
          </div>
        </aside>
        <main className="flex flex-col justify-center h-screen ml-auto mr-auto w-[25%] max-md:ml-auto max-md:w-[76%]">
          <div className="flex flex-col mt-8 w-full text-base max-md:mt-10">
            <div className="flex gap-4 self-start text-2xl font-semibold whitespace-nowrap text-neutral-700">
              <Image
                loading="lazy"
                src="/authlogo.svg"
                alt="Ankasa logo"
                className="object-contain shrink-0 self-start aspect-[1.47] w-[50px]"
                width={50}
                height={50}
              />
              <div>Ankasa</div>
            </div>
            <form className="flex flex-col w-full">
              <h1 className="self-start mt-10 text-4xl font-semibold text-black max-md:mt-10">
                Register
              </h1>
              <InputField
                id="fullName"
                type="text"
                placeholder="Full Name"
                label="Full Name"
              />
              <InputField
                id="email"
                type="email"
                placeholder="Email"
                label="Email"
              />
              <InputField
                id="password"
                type="password"
                placeholder="Password"
                label="Password"
                showPasswordToggle
              />
              <button
                type="submit"
                className="px-16 py-4 mt-7 text-lg font-bold text-white bg-blue-500 rounded-xl shadow-[0px_8px_10px_rgba(35,149,255,0.3)] max-md:px-5"
              >
                Sign Up
              </button>
              <div className="flex gap-4 self-start mt-7 text-zinc-600 items-center justify-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="shrink-0 rounded h-[17px] w-[17px]"
                  required
                />
                <label htmlFor="terms" className=" text-center justify-center">
                  Accept terms and condition
                </label>
              </div>
            </form>
            <div className="flex flex-col items-center mt-11 max-md:mt-10">
              <div className="w-[277px] h-px bg-zinc-300 max-w-full" />
              <p className="mt-4 text-center text-neutral-600">
                Already have an account?
              </p>
              <a
                href="/signin"
                className="px-16 py-4 mt-6 text-lg font-bold text-blue-500 rounded-xl max-md:px-5"
              >
                Sign In
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default RegisterPage;
