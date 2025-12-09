import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Hero } from '@/components/hero/Hero';
import { FeaturedTools } from '@/components/sections/FeaturedTools';
import { Categories } from '@/components/sections/Categories';
import { Collections } from '@/components/sections/Collections';
import { WellbeingExplainer } from '@/components/sections/WellbeingExplainer';
import { Newsletter } from '@/components/sections/Newsletter';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedTools />
        <Categories />
        <WellbeingExplainer />
        <Collections />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
