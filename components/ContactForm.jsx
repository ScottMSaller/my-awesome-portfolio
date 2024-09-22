function ContactForm() {
    return (
        <div>
            <form>
                <fieldset>
                <legend>Contact</legend>
                <label for="first-name">First Name</label>
                <input type="text" id="first-name" required></input>

                <label for="last-name" required>Last Name</label>
                <input type="text" id="last-name"></input>

                <label for="email" required>Email Address</label>
                <input type="email" id="email"></input>

                <label for="phone">Phone Number</label>
                <input type="phone" id="phone"></input>

                <label for="message" required>Message</label>
                <textarea type="message" id="message"></textarea>

                <button type="submit" id="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}
export default ContactForm;