import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import ReservationSection from "./pages/ReservationSection";

function App() {
    const [showReservation, setShowReservation] = useState(false);

    function handleReservationClick() {
        setShowReservation(true);

        setTimeout(() => {
            const reservationElement =
                document.getElementById("reservation");

            if (reservationElement) {
                reservationElement.scrollIntoView({
                    behavior: "smooth",
                });
            }
        }, 50);
    }

    function handleCloseReservation() {
        setShowReservation(false);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <>
            {/* NAVBAR */}
            <Navbar onReservationClick={handleReservationClick} />

            {/* HOME PAGE */}
            <Home onReservationClick={handleReservationClick} />

            {/* RESERVATION */}
            {showReservation && (
                <ReservationSection
                    onClose={handleCloseReservation}
                />
            )}

            {/* FOOTER */}
            <Footer />
        </>
    );
}

export default App;