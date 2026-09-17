import Event1 from "../../img/pub_SLIDE_03.jpg";
import Event2 from "../../img/pub_SLIDE_02.jpg";
import Event3 from "../../img/pub_SLIDE_04.jpg";

function EventSection() {
    return (
        <section className="event-parallax">

            <p className="status py50 text-center">
                Upcoming Events
            </p>

            <div className="col-lg-4">
                <div
                    className="m10 bg-white event-pic"
                    style={{
                        padding: "20px",
                        backgroundColor: "#fff"
                    }}
                >
                    <img
                        src={Event1}
                        width="100%"
                        alt="Grand opening"
                    />

                    <p className="text-15">
                        <br />
                        Grand opening
                    </p>

                    <i className="text-gold">
                        coming soon
                    </i>
                </div>
            </div>

            <div className="col-lg-4">
                <div
                    className="m10 bg-white event-pic"
                    style={{
                        padding: "20px",
                        backgroundColor: "#fff"
                    }}
                >
                    <img
                        src={Event2}
                        width="100%"
                        alt="Halloween party"
                    />

                    <p className="text-15">
                        <br />
                        Halloween party
                    </p>

                    <i className="text-gold">
                        31.10.2021
                    </i>
                </div>
            </div>

            <div className="col-lg-4">
                <div className="m10 bg-white event-pic">
                    <img
                        src={Event3}
                        width="100%"
                        alt="Christmas Eve"
                    />

                    <p className="text-15">
                        <br />
                        Christmas Eve
                    </p>

                    <i className="text-gold">
                        24.11.2021
                    </i>
                </div>
            </div>

        </section>
    );
}

export default EventSection;
