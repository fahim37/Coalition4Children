"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Petition", href: "/petition" },
  { name: "About", href: "/about" },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen relative z-0">
      <section className="relative w-full bg-gradient-to-b from-[#D7F8FF] to-[#2D5E69] overflow-visible rounded-b-[15px] md:rounded-b-[40px] h-[600px] md:h-[716px] z-0">
        <div className="container mx-auto  relative z-10">
          <nav className="py-4">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link href="/">
                <div className="flex items-center gap-2">
                  <Image
                    src="/coa-logo.png"
                    alt="International Coalition4Children Logo"
                    width={100}
                    height={100}
                    className="h-[100px] w-[100px]"
                  />
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-[#25525D] hover:text-[#25525D]/80 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="hidden md:flex">
                <Button
                  asChild
                  className="bg-[#25525D] hover:bg-[#25525D]/95 text-white rounded-md"
                >
                  <Link href="https://www.givesendgo.com/GFJPJ" target="_blank">
                    Donate
                  </Link>
                </Button>
              </div>

              {/* Mobile Navigation */}
              <div className="md:hidden flex items-center">
                <Sheet open={open} onOpenChange={setOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-[#25525D]"
                    >
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right">
                    <SheetHeader>
                      <SheetTitle className="text-[#25525D]">Menu</SheetTitle>
                    </SheetHeader>
                    <nav className="flex flex-col gap-4 mt-8">
                      {navLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="text-[#25525D] hover:text-[#25525D]/80 transition-colors text-lg"
                          onClick={() => setOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ))}
                      {/* Donate Button (Mobile) */}
                      <Button
                        asChild
                        className="bg-[#25525D] hover:bg-[#25525D]/95 text-white rounded-md mt-4"
                        onClick={() => setOpen(false)}
                      >
                        <Link
                          href="https://www.givesendgo.com/GFJPJ"
                          target="_blank"
                        >
                          Donate
                        </Link>
                      </Button>
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </nav>

          {/* Text Content */}
          <div className=" md:pt-8 pb-8 text-center">
            <h1 className="text-[38px] md:text-[56px] font-[700] text-[#265661] mb-4">
              Protecting Our Children&apos;s Future
            </h1>
            <p className="text-[26px] md:text-[32px] font-[400] text-[#D3DDDF]">
              Join the International Coalition4Children in safeguarding parental
              rights and children&apos;s innocence
            </p>
          </div>
        </div>

        {/* Hero Image Positioned to Overlap Main Section */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-[90%] md:translate-y-[66%] lg:h-[517px] z-20 w-full md:max-w-[1150px] px-6 md:px-auto">
          <Image
            src="/hero.jpeg"
            alt="Hands together symbolizing protection"
            className="w-full h-full object-cover rounded-lg shadow-xl"
            width={1150}
            height={515}
          />
        </div>
      </section>

      {/* Second  Content */}
      <section className="relative w-full bg-gradient-to-b from-[#2D5E69] to-[#D7F8FF] overflow-visible rounded-t-[15px] md:rounded-t-[40px] h-[1000px] md:h-[750px] z-[-10] mt-[170px]">
        <div className="container mx-auto mt-[200px] flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-4">
              <p className="text-xl leading-relaxed">
                &quot;Our mission is to unite citizens and leaders worldwide to
                uphold and protect every child&apos;s God-given inalienable
                birthright to physical, emotional, social and mental health;
                thereby safeguarding their innocence and dignity.
              </p>

              <p className="text-xl leading-relaxed">
                By asserting parents and caregivers as the indisputable primary
                and most influential educators, we aim to foster a world where
                every child is cherished,
              </p>
            </div>
            <div className="">
              <Link href="/about" passHref className="">
                <Button className="bg-[#25525D] hover:bg-[#25525D]/95 text-white px-6 py-5 rounded-md text-lg">
                  More About Us
                </Button>
              </Link>
            </div>
          </div>

          <div className="md:w-1/2">
            <Image
              src="/landing-img.png"
              alt="International Coalition4Children Logo"
              className="w-full h-full object-cover rounded-lg "
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
