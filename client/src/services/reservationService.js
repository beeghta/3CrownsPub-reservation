const API_URL = import.meta.env.VITE_API_URL;

export function createReservationData(
    reservation,
    selectedTable,
    customer
) {
    return {
        guests: Number(reservation.guests),

        day: reservation.day,

        time: reservation.time,

        table: {
            id: selectedTable.id,
            seats: selectedTable.seats,
            location: selectedTable.location,
            atmosphere: selectedTable.atmosphere
        },

        customer: {
            name: customer.name,
            email: customer.email,
            phone: customer.phone,
            request: customer.request
        }
    };
}

export async function sendReservation(
    reservationData
) {
    const response = await fetch(
        `${API_URL}/api/reservations`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(reservationData)
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Failed to create reservation"
        );
    }

    return data;
}

export async function getReservedTables(day, time) {
    const response = await fetch(
        `${API_URL}/api/reservations/occupied?day=${encodeURIComponent(day)}&time=${encodeURIComponent(time)}`
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Failed to get reserved tables"
        );
    }

    return data.reservedTables;
}