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
   CREATE RESERVATION
========================= */

app.post(
    "/api/reservations",
    async (req, res) => {

        const reservation = req.body;


        console.log(
            "New reservation:",
            reservation
        );


        try {

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

    }
);



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