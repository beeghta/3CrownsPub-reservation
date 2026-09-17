import HeaderSection from "./HeaderSection";
import AboutSection from "./AboutSection";
import EventSection from "./EventSection";
import FlavoursMenuSection from "./FlavoursMenuSection";
import MenuSection from "./MenuSection";
import ReservationSection from "../../components/ReservationSection";
import GallarySection from "./GallarySection";

function Home() {
    return (
        <main>
            <HeaderSection />
            <MenuSection />
            <ReservationSection />
            <FlavoursMenuSection />
            <AboutSection />
            <EventSection />
            <GallarySection />

            
            
            

        </main>
    );
}

export default Home;