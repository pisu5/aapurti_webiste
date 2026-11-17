import SurveySummaryChart from "../components/Chart";
import ClientPartners from "../components/ClientPartners";
import ModernProfessionalFooter from "../components/Footer";
import VideoHeroSection from "../components/Hero";
import Metric from "../components/Metric";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import About from "../components/AboutUs";
import FieldIntelligenceSection from "../components/FutureTechSection";
import EnterpriseCTA from "../components/CTA";
import WhyChooseUs from "../components/WhyChooseUs";
import IndiaMap from "../components/IndianMap";
import ContactForm from "../components/CTA";

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <VideoHeroSection />
            <Metric />
            <Services />
            <ContactForm />
            <ClientPartners />
            <WhyChooseUs />
            {/* <SurveySummaryChart /> */}
            <FieldIntelligenceSection />
            {/* <About /> */}
            {/* <IndiaMap /> */}


            <ModernProfessionalFooter />
        </div>
    )
}
export default HomePage;