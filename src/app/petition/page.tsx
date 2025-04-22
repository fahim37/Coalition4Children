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
import SignupForm from "@/components/signup-form";

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
              <div className="flex items-center gap-2">
                <Image
                  src="/coa-logo.png"
                  alt="International Coalition4Children Logo"
                  width={100}
                  height={100}
                  className="h-[100px] w-[100px]"
                />
              </div>

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
              Petition
            </h1>
            <p className="text-[26px] md:text-[32px] font-[400] text-[#D3DDDF]">
              I support the right of parents to guide their children&apos;s
              education and call for the removal of inappropriate CSE materials
              until a family-aligned alternative is established.
            </p>
          </div>
        </div>
      </section>
      <main className="container pb-8 mt-5 md:mt-20">
        <div className="space-y-6 text-[16px] text-[#000000] text-justify">
          <p className="">
            To: WHO director general Tedros Ghebreyesus, Secretary-General
            Antonio Guterres, of the United Nations, Presidents and Prime
            Ministers of nations, relevant government bodies, local leaders,
            international stakeholders and citizens of the world.
          </p>

          <h2 className="text-4xl font-[500] text-center my-8">
            The International Coalition4Children Declaration
          </h2>

          <p>
            As parents, caregivers, educators, and concerned citizens, we have
            grave concerns about the damaging physical, mental, emotional,
            social health and the educational impacts of the current United
            Nations (UN) and World Health Organisation&apos;s (WHO)
            Comprehensive Sexuality Education (CSE) guidance.
          </p>

          <p>
            We declare that parents and caregivers are the indisputable primary
            and most influential educators in their children&apos;s lives,
            entrusted with the responsibility of protecting their God-given
            inalienable birthright, including innocence and dignity. Parents and
            caregivers are the first and foremost authority in a child&apos;s
            life, until the child is the legal age of majority at 18 years old.
            This prerogative includes ensuring that our children&apos;s
            education aligns with our instilled values and cultural traditions,
            and with our children&apos;s understanding of age-appropriate
            content. Educators and concerned citizens have the societal
            obligation to protect the vulnerable and the impressionable, which
            includes children, from all forms of abuse, coercion, confusion and
            indoctrination.
          </p>

          <p>
            We declare that the current CSE material is overtly and subtly
            explicit, exploitative and sexualised and therefore inappropriate
            for minors. By providing this CSE material in an educational
            setting, we assert that the WHO and UN are overstepping their
            boundaries, thereby superseding and undermining our parental rights
            to guide our children&apos;s development. We assert that moral and
            ethical teachings on sexuality and relationships are the sole
            jurisdiction of the family.
          </p>

          <p>
            Therefore, for the well-being of our children, we urge leaders to
            recognise the unequivocal rights of parents and caregivers as the
            primary decision-makers for their children&apos;s education, and we
            call for a dialogue with the WHO to address our concerns and to
            immediately cease the use of CSE in its current state, until an
            agreed upon alternative can be reached. If the WHO and the UN are
            unwilling to meet and dialogue with us, we call for an immediate
            withdrawal of our nations from the WHO and the UN.
          </p>

          <p className="font-medium mt-8">
            Please fill your full name &amp; Email if you agree with the
            petition that children deserve education that aligns with family
            values and respects the authority of parents.
          </p>
        </div>

        {/* Form Section */}
        <div className="my-8">
          <SignupForm />
        </div>
      </main>
    </div>
  );
}
