const Book = () => {
    return(
        <div>
            <h1>Book a table</h1>
            <form method="POST">
                <div>
                    <label for="user-first-name">Name: </label>
                    <input type="text" id="user-first-name" name="user-first-name" required="" />
                    
                </div>

                <div>
                    <label for="user-email">Email: </label>
                    <input type="email" id="user-email" name="user-email" required="" />
                </div>

                <div>
                    <label for="booking_date">Booking Data</label>
                    <input type="date" id="booking_date" name="booking_date" />
                </div>

                <div>
                    <label for="booking_people">Number of People</label>
                    <input type="range" id="booking_people" name="booking_people" min="1" max="10" value="4" oninput="this.nextElementSibling.value = this.value" />
                    <output>4</output>
                </div>

                <div>
                    <fieldset id="location">
                        <input type="radio" value="indoors" name="location" checked="" /> Indoors
                        <input type="radio" value="outdoors" name="location" checked="" /> Outdoors
                    </fieldset>
                </div>
                <div>
                    <button type="submit">Book Table</button>
                </div>

            </form>
        </div>
    );
}

export default Book;