import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProductsSection } from './components/ProductsSection';
import { WhyBuySection } from './components/WhyBuySection';
import { ComparisonTable } from './components/ComparisonTable';
import { ProofSection } from './components/ProofSection';
import { CoverageSection } from './components/CoverageSection';
import { FormSection } from './components/FormSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { BlogPreviewSection } from './components/BlogPreviewSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <WhyBuySection />
        <ComparisonTable />
        <ProofSection />
        <BlogPreviewSection />
        <CoverageSection />
        <FormSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
