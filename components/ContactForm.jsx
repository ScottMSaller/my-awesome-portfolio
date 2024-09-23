function ContactForm() {
    return (
        <div>
            <form>
                <fieldset>
                <legend className="mt-1">Contact</legend>
                <p class="lead">Use this form to get in contact with me, and I will respond within the next 48 hours.</p>
                <div className="mb-3">
                <label for="first-name" className="form-label">First Name</label>
                <input type="text" id="first-name" className="form-control" placeholder="John" required></input>
                </div>
                <div>
                <label for="last-name" className="form-label">Last Name</label>
                <input type="text" id="last-name" className="form-control" placeholder="Smith" required></input>
                </div>
                <div className="mb-3">
                <label for="email" className="form-label" placeholer="some@body.com">Email Address</label>
                <input type="email" id="email" className="form-control" placeholder="some@body.com" required></input>
                </div>
                <div className="mb-3">
                <label for="phone" className="form-label"  placeholer="555-555-5555">Phone Number</label>
                <input type="phone" id="phone" className="form-control" placeholder="555-555-5555"></input>
                </div>
                <div className="mb-3">
                <label for="message" className="form-label">Message</label>
                <textarea type="message" id="message" className="form-control" placeholder="Wow, I really like the website! However, I think that you should implement some sort of error handling in case someone types in a random string into the search bar." required></textarea>
                </div>
                <div className="mb-3">
                <button type="submit" id="submit" className="btn btn-primary">Submit</button>
                </div>
                </fieldset>
            </form>
        </div>
    )
}
export default ContactForm;