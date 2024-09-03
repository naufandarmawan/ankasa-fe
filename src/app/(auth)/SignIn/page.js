import Button from "@/components/base/button";
import InputField from "@/components/base/input";
import Image from "next/image";
import React from "react";

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
                Login
              </h1>
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
              <Button type="submit" label="Sign In" />
            </form>
            <div className="self-center mt-5 text-zinc-600">
              Did you forgot your password?
            </div>
            <a href="/reset" className="self-center mt-2 text-blue-500">
              Tap here for reset
            </a>
            <hr className="self-center mt-6 max-w-full h-px bg-zinc-300 w-[277px]" />
            <div className="self-center mt-4 text-center text-neutral-600">
              or sign in with
            </div>
            <div className="flex gap-4 mt-6 items-center justify-center">
              <button className="relative flex items-center justify-center w-[95px] h-[52px] rounded-lg border-2 border-[#2395FF] text-[#2395FF] hover:bg-[#2395FF] hover:text-white transition-colors">
                <Image src="/google.svg" alt="Google" width={24} height={24} />
              </button>
              <button className="relative flex items-center justify-center w-[95px] h-[52px] rounded-lg border-2 border-[#2395FF] text-[#2395FF] hover:bg-[#2395FF] hover:text-white transition-colors">
                <Image
                  src="/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default RegisterPage;
