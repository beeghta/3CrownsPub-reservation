const express = require("express");
const cors = require("cors");

const pool = require("./db");


const app = express();

const PORT = 5000;


app.use(cors());

app.use(express.json());



/* =========================
   TEST SERVER
========================= */

app.get("/", (req, res) => {

    res.json({
        message: "3Crowns API is running"
    });

});



/* =========================
   TEST DATABASE
========================= */

app.get("/api/test-db", async (req, res) => {

    try {

        const [rows] = await pool.query(
            "SELECT 1 AS result"
        );


        res.json({
            message: "MySQL connection is working",
            result: rows[0].result
        });


    } catch (error) {

        console.error(
            "MySQL connection error:",
            error
        );


        res.status(500).json({
            message: "MySQL connection failed"
        });

    }

});

/* =========================
   GET RESERVED TABLES
========================= */

app.get(
    "/api/reservations/occupied",
    async (req, res) => {

        const {
            day,
            time
        } = req.query;


        if (!day || !time) {

            return res.status(400).json({
                message: "Day and time are required"
            });

        }


        try {

            const sql = `
                SELECT DISTINCT table_id
                FROM reservations
                WHERE reservation_day = ?
                AND reservation_time = ?
            `;


            const [rows] =
                await pool.execute(
                    sql,
                    [day, time]
                );


            const reservedTables =
                rows.map(
                    (row) => row.table_id
                );


            res.json({
                reservedTables
            });


        } catch (error) {

            console.error(
                "Get reserved tables error:",
                error
            );


            res.status(500).json({
                message:
                    "Failed to get reserved tables"
            });

        }

    }
);

/* =========================
   CREATE RESERVATION
========================= */
/* CREATE RESERVATION */
app.post("/api/reservations", async (req, res) => {
    const reservation = req.body;

    console.log("New reservation:", reservation);

    try {

        /* =========================
           CHECK TABLE AVAILABILITY
        ========================= */

        const checkSql = `
            SELECT id
            FROM reservations
            WHERE reservation_day = ?
            AND reservation_time = ?
            AND table_id = ?
            LIMIT 1
        `;

        const [existingReservation] =
            await pool.execute(
                checkSql,
                [
                    reservation.day,
                    reservation.time,
                    reservation.table.id
                ]
            );

        if (existingReservation.length > 0) {

            return res.status(409).json({
                message:
                    "This table is already reserved for this day and time."
            });
        }


        /* =========================
           CREATE RESERVATION
        ========================= */

        const sql = `
            INSERT INTO reservations (
                guests,
                reservation_day,
                reservation_time,
                table_id,
                table_seats,
                table_location,
                table_atmosphere,
                customer_name,
                customer_email,
                customer_phone,
                special_request
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const values = [
            reservation.guests,
            reservation.day,
            reservation.time,
            reservation.table.id,
            reservation.table.seats,
            reservation.table.location,
            reservation.table.atmosphere,
            reservation.customer.name,
            reservation.customer.email,
            reservation.customer.phone,
            reservation.customer.request
        ];

        const [result] =
            await pool.execute(
                sql,
                values
            );


        /* =========================
           SUCCESS
        ========================= */

        res.status(201).json({
            message:
                "Reservation created successfully",

            reservationId:
                result.insertId
        });

    } catch (error) {

        console.error(
            "Reservation database error:",
            error
        );

        res.status(500).json({
            message:
                "Failed to create reservation"
        });
    }
});
/* =========================
   START SERVER
========================= */

app.listen(
    PORT,
    () => {

        console.log(
            `3Crowns server is running on http://localhost:${PORT}`
        );

    }
);