import logo from "../../img/The-Three-Crown-Pub.svg";

function HeaderSection() {
    return (
        <section className="header">
            <div className="text-center status-section">
                <img
                    src={logo}
                    width="300"
                    alt="The Three Crowns Pub"
                />

                <br />

                <span className="status">
                    Delicious food & drinks
                </span>

                {/* <p className="status-description"></p> */}

                <p className="status-btn">
                    <button className="btn-outer">
                        BOOK NOW
                    </button>

                    {" OR "}

                    <button className="btn-outer">
                        MENU
                    </button>
                </p>
            </div>

            <div className="angel-movement">
                <i className="fa fa-angle-down"></i>
            </div>
        </section>
    );
}

export default HeaderSection;
