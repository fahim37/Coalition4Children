import SignupForm from "@/components/signup-form";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative z-0">
      <section className="relative w-full bg-gradient-to-b from-[#D7F8FF] to-[#2D5E69] overflow-visible py-12 rounded-b-[40px] h-[750px] md:h-[716px] z-0">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-2">
              <Image
                src="/coa-logo.png"
                alt="International Coalition4Children Logo"
                width={100}
                height={100}
                className="h-[70px] w-[70px]"
              />
            </div>
            <a
              href="#"
              className="bg-[#25525D] hover:bg-[#25525D]/95 text-white px-4 py-2 rounded-md transition-colors"
            >
              Donate
            </a>
          </div>

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
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-[50%] md:h-[517px] z-20 w-full max-w-[1150px] px-6 md:px-auto">
          <Image
            src="/hero.jpeg"
            alt="Hands together symbolizing protection"
            className="w-full h-full object-cover rounded-lg shadow-xl"
            width={1150}
            height={515}
          />
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-[300px] pb-8">
        <div className="space-y-6 text-[16px] text-[#000000]">
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
            Nations (UN) and World Health Organisation&apos;s (WHO) Comprehensive
            Sexuality Education (CSE) guidance.
          </p>

          <p>
            We declare that parents and caregivers are the indisputable primary
            and most influential educators in their children&apos;s lives, entrusted
            with the responsibility of protecting their God-given inalienable
            birthright, including innocence and dignity. Parents and caregivers
            are the first and foremost authority in a child&apos;s life, until the
            child is the legal age of majority at 18 years old. This prerogative
            includes ensuring that our children&apos;s education aligns with our
            instilled values and cultural traditions, and with our children&apos;s
            understanding of age-appropriate content. Educators and concerned
            citizens have the societal obligation to protect the vulnerable and
            the impressionable, which includes children, from all forms of abuse,
            coercion, confusion and indoctrination.
          </p>

          <p>
            We declare that the current CSE material is overtly and subtly
            explicit, exploitative and sexualised and therefore inappropriate for
            minors. By providing this CSE material in an educational setting, we
            assert that the WHO and UN are overstepping their boundaries, thereby
            superseding and undermining our parental rights to guide our
            children&apos;s development. We assert that moral and ethical teachings on
            sexuality and relationships are the sole jurisdiction of the family.
          </p>

          <p>
            Therefore, for the well-being of our children, we urge leaders to
            recognise the unequivocal rights of parents and caregivers as the
            primary decision-makers for their children&apos;s education, and we call
            for a dialogue with the WHO to address our concerns and to
            immediately cease the use of CSE in its current state, until an
            agreed upon alternative can be reached. If the WHO and the UN are
            unwilling to meet and dialogue with us, we call for an immediate
            withdrawal of our nations from the WHO and the UN.
          </p>

          <p className="font-medium mt-8">
            Please fill your full name &amp; Email if you agree with the petition
            that children deserve education that aligns with family values and
            respects the authority of parents.
          </p>
        </div>

        {/* Form Section */}
        <div className="mt-8">
          <SignupForm />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#7FA7B0] mt-12 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#FFFFFF]">
                International Coalition4Children
              </h3>
              <p className="text-sm text-[#FFFFFF]">
                Protecting parental rights and children&apos;s innocence
              </p>
            </div>
            <a
              href="#"
              className="bg-[#25525D] hover:bg-[#25525D]/95 text-white px-4 py-2 rounded-md mt-4 md:mt-0 transition-colors"
            >
              Donate
            </a>
          </div>
          <div className="border-t-2 border-[#FFFFFF] pt-6 mt-6">
            <p className="text-center text-sm text-[#FFFFFF]">
              © 2025 International Coalition4Children. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}