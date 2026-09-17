import About from "../../img/real/photo-gallery06.jpg";

function AboutSection() {
    return (
        <section className="bg-gray py50">
            <div className="container">
                <div className="col-lg-6">
                    <div className="pt20">
                        <span className="devider">
                            our story
                            <p>About our pub</p>
                        </span>
                    </div>

                    <p className="text-15 text-justify">
                        The Three Crowns, newly renovated whilst retaining the
                        original character of the pub features “UK Gastro pub”
                        style food with our weekly “temptations” on the
                        blackboards with our chefs creating different dishes to
                        “tempt” you. Also featuring award winning craft ales,
                        as well as a few British standards, great wine and an
                        awesome selection of Whiskies and Gins, along with all
                        the usual suspects.
                    </p>

                    <div className="text-gold pt20">
                        <button className="btn-outer">
                            Read More
                        </button>
                    </div>
                </div>

                <div className="col-lg-6">
                    <img
                        src={About}
                        width="100%"
                        style={{
                            paddingTop: "30px",
                            paddingBottom: "30px"
                        }}
                        alt="Three Crowns pub"
                    />
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
