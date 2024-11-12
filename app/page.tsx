import ProductSlider from './components/Product/product';
import BenefitsOfJaggery from './components/BenefitsOfJaggery/index';
import Hero from './components/Hero';
import ExperienceSection from './components/Gudsection';
import CertifiedSection from './components/CertifiedSection';
import AboutUs from './components/AboutUs/index';
import WhyChooseUs from './components/WhyChooseUs';



export default function Home() {
  return (
    <main>
      <Hero/>
      <ExperienceSection/>
      <AboutUs />
      <ProductSlider/>
      <BenefitsOfJaggery/>
      <WhyChooseUs/>
      <CertifiedSection/>
    </main>
  )
}
