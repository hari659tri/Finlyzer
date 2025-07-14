"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

    if (scrollPosition > scrollThreshold) {
  imageElement.classList.remove("rotate-x-[15deg]");
  imageElement.classList.add("rotate-x-0", "translate-y-[40px]");
} else {
  imageElement.classList.remove("rotate-x-0", "translate-y-[40px]");
  imageElement.classList.add("rotate-x-[15deg]");
}
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-40 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 bg-gradient-to-r from-green-600  to-teal-600 font-extrabold tracking-tighter pr-2 text-transparent bg-clip-text">
         Manage Your Money <br/>with Clarity 
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        A smart AI-driven platform that empowers you to track expenses,
         analyze financial habits, and optimize spending with real-time insights.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>
        <div className="[perspective:500px] mt-5 md:mt-0">
          <div ref={imageRef} className="transform rotate-x-[15deg] scale-[1] transition-transform duration-500 ease-out will-change-transform"
>
            <Image
              src="/banner.jpeg"
              width={860}
              height={350}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
