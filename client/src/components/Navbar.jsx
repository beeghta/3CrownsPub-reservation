import logo from "../img/Logo.png";
import { useEffect } from "react";

function Navbar({ onReservationClick }) {

    useEffect(() => {
        const navbar = document.querySelector(".navbar");

        if (!navbar) return;

        // ==========================================
        // HOVER
        // ==========================================

        const handleMouseEnter = () => {
            navbar.classList.add("hover");

            document.querySelectorAll(".st0").forEach((element) => {
                element.classList.add("color");
            });

            document.querySelectorAll(".st1").forEach((element) => {
                element.classList.add("color");
            });

            document.querySelectorAll(".st2").forEach((element) => {
                element.classList.add("color");
            });

            document.querySelectorAll(".barcolor").forEach((element) => {
                element.classList.add("active");
            });
        };

        const handleMouseLeave = () => {
            navbar.classList.remove("hover");

            document.querySelectorAll(".st0").forEach((element) => {
                element.classList.remove("color");
            });

            document.querySelectorAll(".st1").forEach((element) => {
                element.classList.remove("color");
            });

            document.querySelectorAll(".st2").forEach((element) => {
                element.classList.remove("color");
            });

            if (window.scrollY <= 20) {
                document.querySelectorAll(".barcolor").forEach((element) => {
                    element.classList.remove("active");
                });
            }
        };

        navbar.addEventListener("mouseenter", handleMouseEnter);
        navbar.addEventListener("mouseleave", handleMouseLeave);


        // ==========================================
        // SCROLL
        // ==========================================

        const handleScroll = () => {
            const scrollTop = window.scrollY;

            // بعد از 10px Navbar ثابت شود
            if (scrollTop > 10) {
                navbar.classList.add("fix");
            } else {
                navbar.classList.remove("fix");
            }

            // بعد از 20px سفید شود
            if (scrollTop > 20) {

                navbar.classList.add("active");

                document.querySelectorAll(".navbar-left").forEach((element) => {
                    element.classList.add("active");
                });

                document.querySelectorAll(".navbar-right").forEach((element) => {
                    element.classList.add("active");
                });

                document.querySelectorAll(".fil1").forEach((element) => {
                    element.classList.add("active");
                });

                document.querySelectorAll(".fil2").forEach((element) => {
                    element.classList.add("active");
                });

                document.querySelectorAll(".fil3").forEach((element) => {
                    element.classList.add("active");
                });

                document.querySelectorAll(".fil4").forEach((element) => {
                    element.classList.add("active");
                });

                document.querySelectorAll(".barcolor").forEach((element) => {
                    element.classList.add("active");
                });

                document.querySelectorAll(".logo").forEach((element) => {
                    element.classList.add("active");
                });

            } else {

                navbar.classList.remove("active");

                document.querySelectorAll(".navbar-left").forEach((element) => {
                    element.classList.remove("active");
                });

                document.querySelectorAll(".navbar-right").forEach((element) => {
                    element.classList.remove("active");
                });

                document.querySelectorAll(".fil1").forEach((element) => {
                    element.classList.remove("active");
                });

                document.querySelectorAll(".fil2").forEach((element) => {
                    element.classList.remove("active");
                });

                document.querySelectorAll(".fil3").forEach((element) => {
                    element.classList.remove("active");
                });

                document.querySelectorAll(".fil4").forEach((element) => {
                    element.classList.remove("active");
                });

                document.querySelectorAll(".barcolor").forEach((element) => {
                    element.classList.remove("active");
                });

                document.querySelectorAll(".logo").forEach((element) => {
                    element.classList.remove("active");
                });
            }
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();


        // ==========================================
        // ACCESSIBILITY
        // ==========================================

        const accessButton = document.getElementById("access");
        const accessibility = document.getElementById("Accessibility");

        const handleAccessClick = () => {

            if (!accessibility) return;

            if (
                accessibility.style.display === "none" ||
                accessibility.style.display === ""
            ) {
                accessibility.style.display = "block";
            } else {
                accessibility.style.display = "none";
            }
        };

        if (accessButton) {
            accessButton.addEventListener("click", handleAccessClick);
        }


        // ==========================================
        // CLEANUP
        // ==========================================

        return () => {

            navbar.removeEventListener("mouseenter", handleMouseEnter);
            navbar.removeEventListener("mouseleave", handleMouseLeave);

            window.removeEventListener("scroll", handleScroll);

            if (accessButton) {
                accessButton.removeEventListener(
                    "click",
                    handleAccessClick
                );
            }
        };

    }, []);


    // ==========================================
    // MOBILE MENU
    // ==========================================

    function openNav() {
        const sideNav = document.getElementById("mySidenav");

        if (sideNav) {
            sideNav.style.width = "700px";
        }

        document.body.style.backgroundColor = "rgba(0,0,0,0.9)";
    }

    function closeNav() {
        const sideNav = document.getElementById("mySidenav");

        if (sideNav) {
            sideNav.style.width = "0";
        }

        document.body.style.backgroundColor = "white";
    }


    return (
        <>
            <nav className="navbar">

                <div className="col-xs-2 text-left">
                    <img
                        src={logo}
                        alt="The Three Crowns Pub"
                        className="logo"
                    />
                </div>

                <div className="col-xs-10 navbar-left">

                    <div className="row">

                        <a>
                            <i></i>
                            <span className="hide-xs">
                                ABOUT US
                            </span>
                        </a>

                        <a>
                            <i></i>
                            <span className="hide-xs">
                                DRINK MENU
                            </span>
                        </a>

                        <a href="foodmenu.html">
                            <i></i>
                            <span className="hide-xs">
                                FOOD MENU
                            </span>
                        </a>

                        <a>
                            <i></i>
                            <span className="hide-xs">
                                EVENTS
                            </span>
                        </a>

                        <a>
                            <i></i>
                            <span className="hide-xs">
                                PHOTOS
                            </span>
                        </a>

                        <a onClick={onReservationClick}>
                            <i></i>
                            <span className="hide-xs">
                                BOOK NOW
                            </span>
                        </a>

                        <a>
                            <i></i>
                            <span className="hide-xs">
                                CONTACT US
                            </span>
                        </a>

                    </div>

                </div>

            </nav>


            {/* Mobile Side Menu */}

            <div id="mySidenav" className="sidenav">

                <a
                    href="#"
                    className="closebtn"
                    onClick={closeNav}
                >
                    &times;
                </a>

            </div>


            {/* Accessibility */}

            <div
                id="Accessibility"
                style={{ display: "none" }}
            >
            </div>


            {/* Mobile Menu Button */}

            <button
                type="button"
                className="mobile-menu-button"
                onClick={openNav}
            >
                Menu
            </button>
        </>
    );
}

export default Navbar;