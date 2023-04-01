import Blogs from "@/components/Blogs";
import Clients from "@/components/Clients";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Offer from "@/components/Offer";
import Pricing from "@/components/Pricing";
import Stats from "@/components/Stats";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Clients />
      <Stats />
      <Features />
      <Offer />
      <Pricing />
      <Blogs />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}
