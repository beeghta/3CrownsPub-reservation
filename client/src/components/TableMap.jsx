import { cafeTables } from "../data/reservationData";

function TableMap({
    selectedTable,
    onSelectTable,
    guests
}) {
    return (
        <section className="table-selection">

            <div className="table-selection-header">

                <span>
                    Choose your table
                </span>

                <p>
                    Select a table based on its location and seating capacity.
                </p>

            </div>


            <div className="cafe-floor-plan">

                <div className="floor-window">
                    WINDOW
                </div>

                <div className="floor-bar">
                    BAR
                </div>

                <div className="floor-door">
                    ENTRANCE
                </div>


                {cafeTables.map((table) => {

                    const isSelected =
                        selectedTable?.id === table.id;

                    const isReserved =
                        table.status === "reserved";

                    const guestCount =
                        Number(guests);

                    const isWrongSize =
                        table.seats < guestCount ||
                        table.seats > guestCount + 2;

                    const isUnavailable =
                        isReserved || isWrongSize;


                    return (
                        <button
                            key={table.id}
                            type="button"
                            className={`
                                cafe-table
                                ${isSelected ? "selected" : ""}
                                ${isReserved ? "reserved" : ""}
                            `}
                            style={{
                                left: `${table.x}%`,
                                top: `${table.y}%`
                            }}
                            disabled={isUnavailable}
                            onClick={() =>
                                onSelectTable(table)
                            }
                        >

                            <strong>
                                {table.id}
                            </strong>

                            <span>
                                {table.seats} seats
                            </span>

                        </button>
                    );
                })}

            </div>


            {selectedTable && (

                <div className="selected-table-info">

                    <div>
                        <span>
                            Selected table
                        </span>

                        <strong>
                            {selectedTable.id}
                        </strong>
                    </div>


                    <div>
                        <span>
                            Seats
                        </span>

                        <strong>
                            {selectedTable.seats}
                        </strong>
                    </div>


                    <div>
                        <span>
                            Location
                        </span>

                        <strong>
                            {selectedTable.location}
                        </strong>
                    </div>


                    <div>
                        <span>
                            Atmosphere
                        </span>

                        <strong>
                            {selectedTable.atmosphere}
                        </strong>
                    </div>

                </div>
            )}

        </section>
    );
}

export default TableMap;