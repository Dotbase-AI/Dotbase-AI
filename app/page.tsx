import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import AgentsSection from "@/components/home/AgentsSection";
import { Providers } from "@/providers/privy-provider";

export default function Home() {
  return (
            <Header />
            <HeroSection />
            <AgentsSection />
            <FeaturesSection />
            <TokenomicsSection />
            <Footer />
          </main>
        </Providers>
  );
}
