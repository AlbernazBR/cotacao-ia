import Hero from '@/components/Hero';
import FlowComparison from '@/components/FlowComparison';
import InteractiveDemo from '@/components/InteractiveDemo';
import Domains from '@/components/Domains';
import Benefits from '@/components/Benefits';
import Vision from '@/components/Vision';

export default function Home() {
  return (
    <main className="bg-[#030303] text-white min-h-screen overflow-x-hidden">
      <Hero />
      <FlowComparison />
      <InteractiveDemo />
      <Domains />
      <Benefits />
      <Vision />
    </main>
  );
}
