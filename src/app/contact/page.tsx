import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request an estimate from Faure Construction Inc. Call 787-994-2349, email faureconstructionllc@gmail.com, or fill out our contact form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Talk About Your Project."
        description="Call, email, or fill out the form below — our team will follow up to schedule a walkthrough and put together a detailed estimate."
        image="/images/projects/transformation-dusk.png"
      />
      <Contact />
    </>
  );
}
