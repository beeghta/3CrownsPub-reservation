import food from "../../img/foodicon.png";
import drink from "../../img/drinkicon.png";

function MenuSection() {
    return (
        <div className="bg-light">

            <div className="container">

                <div className="text-center py50">
                    <span className="devider">
                        Our dishes to enjoy
                        <p>menu</p>
                        <i className="col-lg-12"></i>
                    </span>
                </div>

                <div className="row py50">

                    <div className="col-lg-6 col-xs-12 food">
                        <p>FOOD MENU</p>

                        <img
                            
                            src={food}
                            width="150"
                            alt="Food Menu"
                        />

                        <button className="btn-reverse">
                            TO THE MENU
                        </button>
                    </div>

                    <div className="col-lg-6 col-xs-12 drink">
                        <p>DRINK MENU</p>

                        <img
                            src={drink}
                            width="150"
                            alt="Drink Menu"
                        />

                        <button className="btn-reverse">
                            TO THE MENU
                        </button>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default MenuSection;