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

export default function CoalitionDocument() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow-sm">
      <section className="relative w-full bg-gradient-to-b from-[#D7F8FF] to-[#2D5E69] overflow-visible rounded-b-[15px] md:rounded-b-[40px] h-[600px] md:h-[600px] z-0">
        <div className="container mx-auto relative z-10">
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
          <div className="md:pt-8 pb-8 text-center">
            <h1 className="text-[38px] md:text-[56px] font-[700] text-[#265661] mb-4">
              About Us
            </h1>
            <p className="text-[26px] md:text-[32px] font-[400] text-[#D3DDDF]">
              We stand to protect every child&apos;s innocence and health by
              upholding parental rights and rejecting harmful, ideologically
              driven education standards imposed by global entities.
            </p>
          </div>
        </div>
      </section>
      <div className="container mt-[30px] md:mt-[80px] mb-[50px]">
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 relative mb-4">
            <Image
              src="/coa-logo.png"
              alt="International Coalition4Children Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <h1 className="text-4xl font-semibold italic text-center mb-12">
          International Coalition4Children
        </h1>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold italic text-center mb-6">
            Declaration
          </h2>
          <p className="text-base">
            We declare that parents, in alignment with international human
            rights law, are the indisputable primary and most influential
            educators in their children&apos;s lives, entrusted with the
            responsibility of protecting their inalienable birthright, including
            innocence and dignity, and no entity, foreign or domestic, can usurp
            parental rights.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold italic text-center mb-6">
            Mission Statement
          </h2>
          <p className="text-base">
            Our mission is to unite citizens and leaders worldwide to uphold and
            protect every child&apos;s God-given inalienable birthright to
            physical, emotional, social and mental health; thereby safeguarding
            their innocence and dignity. By asserting parents and caregivers as
            the indisputable primary and most influential educators, we aim to
            foster a world where every child is cherished, nurtured, loved and
            equipped to thrive.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold italic text-center mb-6">
            Core Values
          </h2>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              Every child has the birthright to mature through natural puberty,
              uninterrupted and without interference.
            </li>
            <li>
              Education must be based on biological truth and be free of all
              Kinsey-based &quot;science&quot; as it is criminal and fraudulent.
            </li>
            <li>
              Education must be free from any social-emotional learning or
              interference of values, attitudes, behaviours and beliefs
              instilled by their parents.
            </li>
            <li>
              Moral and ethical teachings on sexuality and relationships are the
              sole jurisdiction of the family.
            </li>
            <li>
              Parents and caregivers are the first and foremost authority in a
              child&apos;s life, until they are the legal age of majority at 18
              years old.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-3xl font-semibold italic text-center mb-6">
            Action
          </h2>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              Notify the United Nations and the World Health Organization that
              we renounce their unauthorized, over-reaching Comprehensive
              Sexuality Education (CSE) and gender affirming ideologies.
              <ol className="list-[lower-alpha] pl-6 pt-2 space-y-2">
                <li>
                  Education instruction must be strictly focused on basic
                  biology of the human body, based on two sexes, male and
                  female.
                </li>
                <li>
                  Sexualizing children at any stage of their development is
                  strictly prohibited.
                </li>
                <li>
                  Teaching gender ideologies that confuse, exploit and
                  indoctrinate vulnerable and impressionable children is
                  strictly prohibited.
                </li>
              </ol>
            </li>
            <li>
              Ensure that these new guidelines are broadly implemented and
              disseminated, reaching from the global level down to the smallest
              town and communities.
            </li>
            <li>
              Write a declaration to which anyone in the world can add their
              signature.
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
}
