import HeroSection from "../components/Hero"
import ProjectsSection from "../components/Projects"


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white relative">
      <div className="relative z-10 max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <HeroSection />
        <ProjectsSection />
      </div>
    </div>
  )
}