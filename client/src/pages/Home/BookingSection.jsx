
function BookingSection() {
    return (
        <section className="bg-gray">
            <div className="text-center py50">
                <span className="devider">
                    Make a booking
                    <p>online reservation</p>
                    <i className="col-lg-12"></i>
                </span>
            </div>

            <div className="container-fluid py50">
                <div className="col-lg-8 col-xs-12">
                    <div className="bg-parallax">
                        <p className="status pt50">Make your reservation</p>

                        <div className="row pt50">
                            <select className="col-lg-3 col-xs-9">
                                <option value="1">1 Person</option>
                                <option value="2">2 Persons</option>
                                <option value="3">3 Persons</option>
                                <option value="4">4 Persons</option>
                                <option value="5">5 Persons</option>
                                <option value="6">6 Persons</option>
                            </select>

                            <div
                                className="col-lg-1 col-xs-3"
                                style={{ padding: "0 20px 0 0" }}
                            >
                                <i className="fa fa-users fa-lg"></i>
                            </div>

                            <div>
                                <select className="col-lg-3 col-xs-9">
                                    <option value="sunday">Sunday</option>
                                    <option value="monday">Monday</option>
                                    <option value="tuesday">Tuesday</option>
                                    <option value="wednesday">Wednesday</option>
                                    <option value="thursday">Thursday</option>
                                    <option value="friday">Friday</option>
                                </select>
                            </div>

                            <div
                                className="col-lg-1 col-xs-3"
                                style={{ padding: "0 20px 0 0" }}
                            >
                                <i className="fa fa-calendar-o fa-lg"></i>
                            </div>

                            <div>
                                <select className="col-lg-3 col-xs-9">
                                    <option value="10:00">10:00 AM</option>
                                </select>
                            </div>

                            <div
                                className="col-lg-1 col-xs-3"
                                style={{ padding: "0 20px 0 0" }}
                            >
                                <i className="fa fa-clock-o fa-lg"></i>
                            </div>
                        </div>

                        <div className="row pt50">
                            <div
                                className="col-lg-4 col-lg-offset-4"
                                style={{ padding: "0 20px 0 0" }}
                            >
                                <button className="book-btn">
                                    Book a table
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

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
    );
}

export default BookingSection;
