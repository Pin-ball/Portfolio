import { Education } from "@/components/education";
import { WorkExperience } from "@/components/experiences";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Profile } from "@/components/profile";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="max-w-6xl px-4 py-8 mx-auto space-y-8">
        <Profile />
        <Projects />
        <WorkExperience />
        <Skills />
        <Education />
      </div>
      <Footer />
    </div>
  );
}
