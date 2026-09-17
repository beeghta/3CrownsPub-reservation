import { useState } from "react";

import TableMap from "../components/TableMap";

import {
    createReservationData,
    sendReservation
} from "../services/reservationService";


function ReservationSection() {

    const [reservation, setReservation] = useState({
        guests: 2,
        day: "Sunday",
        time: "10:00 AM"
    });


    const [customer, setCustomer] = useState({
        name: "",
        email: "",
        phone: "",
        request: ""
    });


    const [selectedTable, setSelectedTable] =
        useState(null);


    const [showTableMap, setShowTableMap] =
        useState(false);


    const [showSummary, setShowSummary] =
        useState(false);


    const [showConfirmation, setShowConfirmation] =
        useState(false);


    const [reservationId, setReservationId] =
        useState(null);


    const [isSubmitting, setIsSubmitting] =
        useState(false);


    function handleChange(event) {

        const {
            name,
            value
        } = event.target;


        setReservation((previous) => ({
            ...previous,
            [name]: value
        }));


        setSelectedTable(null);

        setShowSummary(false);
    }


    function handleCustomerChange(event) {

        const {
            name,
            value
        } = event.target;


        setCustomer((previous) => ({
            ...previous,
            [name]: value
        }));
    }


    function handleSubmit(event) {

        event.preventDefault();

        setShowTableMap(true);

        setShowSummary(false);

        setShowConfirmation(false);
    }


    function handleTableSelect(table) {

        setSelectedTable(table);

        setShowSummary(false);
    }


    function handleContinue() {

        if (!selectedTable) {

            alert(
                "Please select a table first."
            );

            return;
        }


        setShowSummary(true);
    }


    async function handleConfirmReservation(event) {

        event.preventDefault();


        if (!customer.name ||
            !customer.email ||
            !customer.phone
        ) {

            alert(
                "Please fill in all required customer information."
            );

            return;
        }


        if (!selectedTable) {

            alert(
                "Please select a table first."
            );

            return;
        }


        const finalReservation =
            createReservationData(
                reservation,
                selectedTable,
                customer
            );


        try {

            setIsSubmitting(true);


            const result =
                await sendReservation(
                    finalReservation
                );


            setReservationId(
                result.reservationId
            );


            setShowConfirmation(true);

        } catch (error) {

            console.error(
                "Reservation error:",
                error
            );


            alert(
                error.message ||
                "Something went wrong. Please try again."
            );

        } finally {

            setIsSubmitting(false);
        }
    }


    function handleNewReservation() {

        setReservation({
            guests: 2,
            day: "Sunday",
            time: "10:00 AM"
        });


        setCustomer({
            name: "",
            email: "",
            phone: "",
            request: ""
        });


        setSelectedTable(null);

        setShowTableMap(false);

        setShowSummary(false);

        setShowConfirmation(false);

        setReservationId(null);
    }


    return (

        <section
            className="reservation-section"
            id="reservation"
        >

            <div className="reservation-container">


                {/* =========================
                    CONFIRMATION
                ========================= */}

                {showConfirmation ? (

                    <div className="reservation-confirmation">

                        <div className="confirmation-icon">
                            ✓
                        </div>


                        <h2>
                            Reservation Confirmed
                        </h2>


                        <p>
                            Thank you, {customer.name}!
                        </p>


                        {reservationId && (

                            <p>
                                Reservation number:
                                <strong>
                                    #{reservationId}
                                </strong>
                            </p>

                        )}


                        <div className="confirmation-details">

                            <div>
                                <span>
                                    Guests
                                </span>

                                <strong>
                                    {reservation.guests}
                                </strong>
                            </div>


                            <div>
                                <span>
                                    Day
                                </span>

                                <strong>
                                    {reservation.day}
                                </strong>
                            </div>


                            <div>
                                <span>
                                    Time
                                </span>

                                <strong>
                                    {reservation.time}
                                </strong>
                            </div>


                            <div>
                                <span>
                                    Table
                                </span>

                                <strong>
                                    {selectedTable.id}
                                </strong>
                            </div>


                            <div>
                                <span>
                                    Location
                                </span>

                                <strong>
                                    {selectedTable.location}
                                </strong>
                            </div>


                            <div>
                                <span>
                                    Email
                                </span>

                                <strong>
                                    {customer.email}
                                </strong>
                            </div>

                        </div>


                        <p className="confirmation-message">
                            A confirmation has been sent to your email address.
                        </p>


                        <button
                            type="button"
                            onClick={handleNewReservation}
                        >
                            Make Another Reservation
                        </button>

                    </div>

                ) : (


                    <>
                        {/* =========================
                            RESERVATION FORM
                        ========================= */}

                        {!showTableMap && (

                            <form
                                className="reservation-form"
                                onSubmit={handleSubmit}
                            >

                                <div className="reservation-form-header">

                                    <span>
                                        Make a reservation
                                    </span>

                                    <h2>
                                        Reserve Your Table
                                    </h2>

                                </div>


                                <div className="reservation-fields">


                                    <div className="reservation-field">

                                        <label htmlFor="guests">
                                            Guests
                                        </label>

                                        <select
                                            id="guests"
                                            name="guests"
                                            value={reservation.guests}
                                            onChange={handleChange}
                                        >

                                            <option value="1">
                                                1 Guest
                                            </option>

                                            <option value="2">
                                                2 Guests
                                            </option>

                                            <option value="3">
                                                3 Guests
                                            </option>

                                            <option value="4">
                                                4 Guests
                                            </option>

                                            <option value="5">
                                                5 Guests
                                            </option>

                                            <option value="6">
                                                6 Guests
                                            </option>

                                            <option value="7">
                                                7 Guests
                                            </option>

                                            <option value="8">
                                                8 Guests
                                            </option>

                                        </select>

                                    </div>


                                    <div className="reservation-field">

                                        <label htmlFor="day">
                                            Day
                                        </label>

                                        <select
                                            id="day"
                                            name="day"
                                            value={reservation.day}
                                            onChange={handleChange}
                                        >

                                            <option>
                                                Sunday
                                            </option>

                                            <option>
                                                Monday
                                            </option>

                                            <option>
                                                Tuesday
                                            </option>

                                            <option>
                                                Wednesday
                                            </option>

                                            <option>
                                                Thursday
                                            </option>

                                            <option>
                                                Friday
                                            </option>

                                            <option>
                                                Saturday
                                            </option>

                                        </select>

                                    </div>


                                    <div className="reservation-field">

                                        <label htmlFor="time">
                                            Time
                                        </label>

                                        <select
                                            id="time"
                                            name="time"
                                            value={reservation.time}
                                            onChange={handleChange}
                                        >

                                            <option>
                                                10:00 AM
                                            </option>

                                            <option>
                                                11:00 AM
                                            </option>

                                            <option>
                                                12:00 PM
                                            </option>

                                            <option>
                                                1:00 PM
                                            </option>

                                            <option>
                                                2:00 PM
                                            </option>

                                            <option>
                                                5:00 PM
                                            </option>

                                            <option>
                                                6:00 PM
                                            </option>

                                            <option>
                                                7:00 PM
                                            </option>

                                            <option>
                                                8:00 PM
                                            </option>

                                        </select>

                                    </div>

                                </div>


                                <button
                                    type="submit"
                                >
                                    Book a Table
                                </button>

                            </form>

                        )}


                        {/* =========================
                            TABLE MAP
                        ========================= */}

                        {showTableMap &&
                            !showSummary && (

                                <div>

                                    <TableMap
                                        selectedTable={
                                            selectedTable
                                        }

                                        onSelectTable={
                                            handleTableSelect
                                        }

                                        guests={
                                            reservation.guests
                                        }
                                    />


                                    <div className="reservation-actions">

                                        <button
                                            type="button"
                                            onClick={handleContinue}
                                            disabled={!selectedTable}
                                        >
                                            Continue
                                        </button>

                                    </div>

                                </div>

                            )}


                        {/* =========================
                            SUMMARY + CUSTOMER
                        ========================= */}

                        {showSummary && (

                            <form
                                className="reservation-summary"
                                onSubmit={
                                    handleConfirmReservation
                                }
                            >

                                <h2>
                                    Reservation Summary
                                </h2>


                                <div className="summary-details">

                                    <div>
                                        <span>
                                            Guests
                                        </span>

                                        <strong>
                                            {reservation.guests}
                                        </strong>
                                    </div>


                                    <div>
                                        <span>
                                            Day
                                        </span>

                                        <strong>
                                            {reservation.day}
                                        </strong>
                                    </div>


                                    <div>
                                        <span>
                                            Time
                                        </span>

                                        <strong>
                                            {reservation.time}
                                        </strong>
                                    </div>


                                    <div>
                                        <span>
                                            Table
                                        </span>

                                        <strong>
                                            {selectedTable.id}
                                        </strong>
                                    </div>


                                    <div>
                                        <span>
                                            Location
                                        </span>

                                        <strong>
                                            {selectedTable.location}
                                        </strong>
                                    </div>


                                    <div>
                                        <span>
                                            Atmosphere
                                        </span>

                                        <strong>
                                            {selectedTable.atmosphere}
                                        </strong>
                                    </div>

                                </div>


                                <h3>
                                    Customer Information
                                </h3>


                                <div className="customer-fields">


                                    <div className="reservation-field">

                                        <label htmlFor="name">
                                            Name *
                                        </label>

                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={customer.name}
                                            onChange={
                                                handleCustomerChange
                                            }
                                            required
                                        />

                                    </div>


                                    <div className="reservation-field">

                                        <label htmlFor="email">
                                            Email *
                                        </label>

                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={customer.email}
                                            onChange={
                                                handleCustomerChange
                                            }
                                            required
                                        />

                                    </div>


                                    <div className="reservation-field">

                                        <label htmlFor="phone">
                                            Phone *
                                        </label>

                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            value={customer.phone}
                                            onChange={
                                                handleCustomerChange
                                            }
                                            required
                                        />

                                    </div>


                                    <div className="reservation-field">

                                        <label htmlFor="request">
                                            Special Request
                                        </label>

                                        <textarea
                                            id="request"
                                            name="request"
                                            value={customer.request}
                                            onChange={
                                                handleCustomerChange
                                            }
                                            rows="4"
                                        />

                                    </div>

                                </div>


                                <div className="reservation-actions">

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting
                                            ? "Confirming..."
                                            : "Confirm Reservation"
                                        }
                                    </button>

                                </div>

                            </form>

                        )}

                    </>

                )}

            </div>

        </section>
    );
}


export default ReservationSection;