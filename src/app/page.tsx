import { CommandMenu } from "@/components/command-menu";
import { RESUME_DATA } from "@/data/resume-data";
import { WorkExperience } from "./components/WorkExperience";
import { Education } from "./components/Education";
import { Summary } from "./components/Summary";
import { Skills } from "./components/Skills";
import { Header } from "./components/Header";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${RESUME_DATA.name} - Resume`,
    description: RESUME_DATA.about,
    openGraph: {
      title: `${RESUME_DATA.name} - Resume`,
      description: RESUME_DATA.about,
      url: "https://eugeniacv.vercel.app",
      siteName: "Eugenia Tellechea Resume",
      type: "website",
      images: [
        {
          url: "/images/preview.png", // Make sure this image exists in public/images/
          width: 1200,
          height: 630,
          alt: `${RESUME_DATA.name}'s profile picture`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${RESUME_DATA.name} - Resume`,
      description: RESUME_DATA.about,
      images: ["/images/preview.png"],
    },
  };
}

export default function ResumePage() {
  return (
    <main
      className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-11 md:p-16"
      id="main-content"
    >
      <div className="sr-only">
        <h1>{RESUME_DATA.name}&apos;s Resume</h1>
      </div>

      <section
        className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4"
        aria-label="Resume Content"
      >
        <Header />

        <div className="space-y-8 print:space-y-4">
          <Summary summary={RESUME_DATA.summary} />
          <WorkExperience work={RESUME_DATA.work} />
          <Education education={RESUME_DATA.education} />
          <Skills skills={RESUME_DATA.skills} />
        </div>
      </section>

      <nav className="print:hidden" aria-label="Quick navigation">
        <CommandMenu
          links={RESUME_DATA.contact.social.map((social) => ({
            url: social.url,
            title: social.name,
          }))}
        />
      </nav>
    </main>
  );
}