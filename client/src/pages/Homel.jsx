import ReservationSection from "../components/ReservationSection";
import { useState } from "react";
import Reservation from "../../components/Reservation/Reservation";

function Home() {
    return (
        <main>

            <section>
                <h1>Barista</h1>
                <p>Delicious food & drinks</p>
            </section>

            <ReservationSection />

        </main>
    );
}

export default Home;