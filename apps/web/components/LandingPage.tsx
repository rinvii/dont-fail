import Image from "next/image";
import Link from "next/link";
import { CTAButton } from "../components/CTAButton";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen">
      <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center gap-y-20 overflow-hidden">
        <div className="bullet-right" />
        <div className="bullet-right" />
        <div className="bullet-right" />
        <div className="bullet-right" />
        <div className="bullet-right" />
        <div className="bullet-right" />
        <div className="bullet-right" />
        <div className="bullet-right" />
      </div>
      <div className="absolute inset-0 -z-10 flex items-center justify-center gap-x-40 overflow-hidden">
        <div className="bullet-down" />
        <div className="bullet-down" />
        <div className="bullet-down" />
        <div className="bullet-down" />
        <div className="bullet-down" />
        <div className="bullet-down" />
        <div className="bullet-down" />
        <div className="bullet-down" />
      </div>
      <div className="mt-8 flex items-center justify-center">
        <Image
          src="logo-light.svg"
          alt="Data Structures Logo"
          width={150}
          height={150}
          className="block dark:hidden"
        />
        <Image
          src="logo-dark.svg"
          alt="Data Structures Logo"
          width={150}
          height={150}
          className="hidden dark:block"
        />
      </div>
      <h1 className="mt-8 text-center text-4xl font-extrabold tracking-tighter md:text-5xl">
        Data Structures
      </h1>
      <p className={`mt-4 text-center leading-snug`}>
        No more looking blindly through homework, long labs, and vague study
        guides. <br className="hidden sm:block" />
        This is your definitive, single source of truth for{" "}
        <span className="font-bold text-green-500">PASSING</span> Data
        Structures.
      </p>
      <div className="mt-8 flex w-full items-center justify-center px-6">
        <div className="w-full sm:w-48">
          <CTAButton>
            <Link href="/docs/overview" className="block py-3">
              Get Started
            </Link>
          </CTAButton>
        </div>
      </div>
    </main>
  );
}
