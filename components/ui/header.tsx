"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          {/* Site branding */}
          <div className="flex-1">
            <Logo />
          </div>

          {/* Register button */}
          <div>
            <Link
              href="https://omniform1.com/forms/v1/landingPage/673271b91d1247c5759ce7d4/67327eb6f692ad244ffa0acd"
              className="btn-sm bg-gradient-to-t from-purple-600 to-purple-500 py-2 px-4 text-white rounded-lg shadow-lg hover:bg-[length:100%_150%]"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
