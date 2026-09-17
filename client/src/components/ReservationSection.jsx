import { useEffect, useState } from "react";
import TableMap from "../components/TableMap";

import {
    createReservationData,
    sendReservation,
    getReservedTables
} from "../services/reservationService";

function ReservationSection() {

    // ==========================================
    // RESERVATION
    // ==========================================

    const [reservation, setReservation] = useState({
        guests: 2,
        day: "Sunday",
        time: "10:00 AM"
    });

    const [reservedTables, setReservedTables] = useState([]);

    // ==========================================
    // CUSTOMER
    // ==========================================

    const [customer, setCustomer] = useState({
        name: "",
        email: "",
        phone: "",
        request: ""
    });

    // ==========================================
    // STATES
    // ==========================================

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

    useEffect(() => {
        async function loadReservedTables() {
            try {
                const tables = await getReservedTables(
                    reservation.day,
                    reservation.time
                );

                setReservedTables(tables);
            } catch (error) {
                console.error(
                    "Failed to load reserved tables:",
                    error
                );

                setReservedTables([]);
            }
        }

        loadReservedTables();
    }, [reservation.day, reservation.time]);

    // ==========================================
    // RESERVATION CHANGE
    // ==========================================

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

    // ==========================================
    // CUSTOMER CHANGE
    // ==========================================

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

    // ==========================================
    // BOOK A TABLE
    // ==========================================

    function handleSubmit(event) {

        event.preventDefault();

        setShowTableMap(true);
        setShowSummary(false);
        setShowConfirmation(false);
    }

    // ==========================================
    // TABLE SELECT
    // ==========================================

    function handleTableSelect(table) {

        setSelectedTable(table);
        setShowSummary(false);
    }

    // ==========================================
    // CONTINUE TO CUSTOMER INFORMATION
    // ==========================================

    function handleContinue() {

        if (!selectedTable) {

            alert(
                "Please select a table first."
            );

            return;
        }

        setShowSummary(true);
    }

    // ==========================================
    // CONFIRM RESERVATION
    // ==========================================

    async function handleConfirmReservation(event) {

        event.preventDefault();

        if (
            !customer.name ||
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

    // ==========================================
    // NEW RESERVATION
    // ==========================================

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

    // ==========================================
    // CLOSE MODAL
    // ==========================================

    function handleCloseModal() {

        setShowTableMap(false);
        setShowSummary(false);
        setSelectedTable(null);
    }

    // ==========================================
    // RENDER
    // ==========================================

    return (
        <section
            className="reservation-section container-fluid"
            id="reservation"
        >

            <div className="reservation-container">

                {/* ==========================================
                    BOOKING FORM
                    همان طراحی قبلی
                ========================================== */}

                {!showConfirmation && (
                    <section className="bg-gray">

                        <div className="text-center py50">

                            <span className="devider">
                                Make a booking

                                <p>
                                    online reservation
                                </p>

                                <i className="col-lg-12"></i>
                            </span>

                        </div>

                        <div className="container-fluid py50">

                            {/* LEFT SIDE */}

                            <div className="col-lg-8 col-xs-12">

                                <div className="bg-parallax">

                                    <p className="status pt50">
                                        Make your reservation
                                    </p>

                                    <form
                                        onSubmit={handleSubmit}
                                    >

                                        <div className="row pt50">

                                            {/* GUESTS */}

                                            <select
                                                className="col-lg-3 col-xs-9"
                                                name="guests"
                                                value={reservation.guests}
                                                onChange={handleChange}
                                            >

                                                <option value="1">
                                                    1 Person
                                                </option>

                                                <option value="2">
                                                    2 Persons
                                                </option>

                                                <option value="3">
                                                    3 Persons
                                                </option>

                                                <option value="4">
                                                    4 Persons
                                                </option>

                                                <option value="5">
                                                    5 Persons
                                                </option>

                                                <option value="6">
                                                    6 Persons
                                                </option>

                                                <option value="7">
                                                    7 Persons
                                                </option>

                                                <option value="8">
                                                    8 Persons
                                                </option>

                                            </select>

                                            <div
                                                className="col-lg-1 col-xs-3"
                                                style={{
                                                    padding: "0 20px 0 0"
                                                }}
                                            >
                                                <i className="fa fa-users fa-lg"></i>
                                            </div>

                                            {/* DAY */}

                                            <div>

                                                <select
                                                    className="col-lg-3 col-xs-9"
                                                    name="day"
                                                    value={reservation.day}
                                                    onChange={handleChange}
                                                >

                                                    <option value="Sunday">
                                                        Sunday
                                                    </option>

                                                    <option value="Monday">
                                                        Monday
                                                    </option>

                                                    <option value="Tuesday">
                                                        Tuesday
                                                    </option>

                                                    <option value="Wednesday">
                                                        Wednesday
                                                    </option>

                                                    <option value="Thursday">
                                                        Thursday
                                                    </option>

                                                    <option value="Friday">
                                                        Friday
                                                    </option>

                                                    <option value="Saturday">
                                                        Saturday
                                                    </option>

                                                </select>

                                            </div>

                                            <div
                                                className="col-lg-1 col-xs-3"
                                                style={{
                                                    padding: "0 20px 0 0"
                                                }}
                                            >
                                                <i className="fa fa-calendar-o fa-lg"></i>
                                            </div>

                                            {/* TIME */}

                                            <div>

                                                <select
                                                    className="col-lg-3 col-xs-9"
                                                    name="time"
                                                    value={reservation.time}
                                                    onChange={handleChange}
                                                >

                                                    <option value="10:00 AM">
                                                        10:00 AM
                                                    </option>

                                                    <option value="11:00 AM">
                                                        11:00 AM
                                                    </option>

                                                    <option value="12:00 PM">
                                                        12:00 PM
                                                    </option>

                                                    <option value="1:00 PM">
                                                        1:00 PM
                                                    </option>

                                                    <option value="2:00 PM">
                                                        2:00 PM
                                                    </option>

                                                    <option value="5:00 PM">
                                                        5:00 PM
                                                    </option>

                                                    <option value="6:00 PM">
                                                        6:00 PM
                                                    </option>

                                                    <option value="7:00 PM">
                                                        7:00 PM
                                                    </option>

                                                    <option value="8:00 PM">
                                                        8:00 PM
                                                    </option>

                                                </select>

                                            </div>

                                            <div
                                                className="col-lg-1 col-xs-3"
                                                style={{
                                                    padding: "0 20px 0 0"
                                                }}
                                            >
                                                <i className="fa fa-clock-o fa-lg"></i>
                                            </div>

                                        </div>

                                        {/* BOOK BUTTON */}

                                        <div className="row pt50 confirm-section">

                                            <div
                                                className="col-lg-4 col-lg-offset-4"
                                                style={{
                                                    padding: "0 20px 0 0"
                                                }}
                                            >

                                                <button
                                                    type="submit"
                                                    className="book-btn"
                                                >
                                                    Book a table
                                                </button>

                                            </div>

                                        </div>

                                    </form>

                                </div>

                            </div>

                            {/* RIGHT SIDE */}

                            <div className="col-lg-4 col-xs-12">

                                <div className="bg-logotrasparent">

                                    <div className="text-center text-white text-30">
                                        Opening hours
                                    </div>

                                    <div className="row text-15 pt50">

                                        <div className="col-lg-6 col-xs-6 text-white">
                                            Monday to Thursday
                                        </div>

                                        <div className="col-lg-6 col-xs-6 text-gray text-right">
                                            11:00 A.M. - 12:00 A.M.
                                        </div>

                                        <div className="col-lg-6 col-xs-6 text-white">
                                            Friday
                                        </div>

                                        <div className="col-lg-6 col-xs-6 text-gray text-right">
                                            11:00 A.M. - 02:00 A.M.
                                        </div>

                                        <div className="col-lg-6 col-xs-6 text-white">
                                            Saturday
                                        </div>

                                        <div className="col-lg-6 col-xs-6 text-gray text-right">
                                            09:00 A.M. - 02:00 A.M.
                                        </div>

                                        <div className="col-lg-6 col-xs-6 text-white">
                                            Sunday
                                        </div>

                                        <div className="col-lg-6 col-xs-6 text-gray text-right">
                                            09:00 A.M. - 12:00 A.M.
                                        </div>

                                        <div className="col-lg-6 col-xs-6 text-gold pt50">
                                            CALL: +1(905)508 1111
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </section>
                )}

                {/* ==========================================
                    CONFIRMATION
                    ========================================== */}

                {showConfirmation && (
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
                                <span>Guests</span>
                                <strong>
                                    {reservation.guests}
                                </strong>
                            </div>

                            <div>
                                <span>Day</span>
                                <strong>
                                    {reservation.day}
                                </strong>
                            </div>

                            <div>
                                <span>Time</span>
                                <strong>
                                    {reservation.time}
                                </strong>
                            </div>

                            <div>
                                <span>Table</span>
                                <strong>
                                    {selectedTable.id}
                                </strong>
                            </div>

                            <div>
                                <span>Location</span>
                                <strong>
                                    {selectedTable.location}
                                </strong>
                            </div>

                            <div>
                                <span>Email</span>
                                <strong>
                                    {customer.email}
                                </strong>
                            </div>

                        </div>

                        <p className="confirmation-message">
                            A confirmation has been sent to your email address.
                        </p>
                        <div className="col-lg-4 col-lg-offset-4">
                        <button
                            className="book-btn"
                            type="button"
                            onClick={handleNewReservation}
                        >
                            Make Another Reservation
                        </button>
                        </div>
                    </div>
                )}

                {/* ==========================================
                    RESERVATION MODAL
                    ========================================== */}

                {showTableMap && !showConfirmation && (

                    <div className="reservation-modal-overlay">

                        <div className="reservation-modal">

                            <button
                                type="button"
                                className="reservation-modal-close"
                                onClick={handleCloseModal}
                                aria-label="Close reservation"
                            >
                                ×
                            </button>

                            {/* TABLE MAP */}

                            {!showSummary && (

                                <div>

                                    <TableMap
                                        selectedTable={selectedTable}
                                        onSelectTable={handleTableSelect}
                                        guests={reservation.guests}
                                        reservedTables={reservedTables}
                                    />

                                    <div className="reservation-actions col-lg-4 col-lg-offset-4">

                                        <button 
                                            className="book-btn"
                                            type="button"
                                            onClick={handleContinue}
                                            disabled={!selectedTable}
                                        >
                                            Continue
                                        </button>

                                    </div>

                                </div>

                            )}

                            {/* SUMMARY + CUSTOMER */}

                            {showSummary && (

                                <form
                                    className="reservation-summary confirm-section" 
                                    onSubmit={handleConfirmReservation}
                                >

                                    <h2 className="devider">
                                        Reservation Summary
                                    </h2>

                                    <div className="summary-details">

                                        <div>
                                            <span>Guests</span>
                                            <strong>
                                                {reservation.guests}
                                            </strong>
                                        </div>

                                        <div>
                                            <span>Day</span>
                                            <strong>
                                                {reservation.day}
                                            </strong>
                                        </div>

                                        <div>
                                            <span>Time</span>
                                            <strong>
                                                {reservation.time}
                                            </strong>
                                        </div>

                                        <div>
                                            <span>Table</span>
                                            <strong>
                                                {selectedTable.id}
                                            </strong>
                                        </div>

                                        <div>
                                            <span>Location</span>
                                            <strong>
                                                {selectedTable.location}
                                            </strong>
                                        </div>

                                        <div>
                                            <span>Atmosphere</span>
                                            <strong>
                                                {selectedTable.atmosphere}
                                            </strong>
                                        </div>

                                    </div>

                                    <h3>
                                        Customer Information
                                    </h3>

                                    <div className="customer-fields confirm-section">

                                        <div className="reservation-field">

                                            <label htmlFor="name">
                                                Name *
                                            </label>

                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                value={customer.name}
                                                onChange={handleCustomerChange}
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
                                                onChange={handleCustomerChange}
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
                                                onChange={handleCustomerChange}
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
                                                onChange={handleCustomerChange}
                                                rows="4"
                                            />

                                        </div>

                                    </div>

                                    <div className="reservation-actions col-lg-4 col-lg-offset-4">

                                        <button
                                            className="book-btn"
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

                        </div>

                    </div>

                )}

            </div>

        </section>
    );
}

export default ReservationSection;
