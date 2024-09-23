function ContactForm() {
    return (
        <div>
            <form>
                <fieldset>
                <legend>Contact</legend>
                
                <div class="mb-3">
                <label for="first-name" class="form-label">First Name</label>
                <input type="text" id="first-name" class="form-control" placeholder="John" required></input>
                </div>
                <div class="mb-3">
                <label for="last-name" class="form-label">Last Name</label>
                <input type="text" id="last-name" class="form-control" placeholder="Smith" required></input>
                </div>
                <div class="mb-3">
                <label for="email" class="form-label" placeholer="some@body.com">Email Address</label>
                <input type="email" id="email" class="form-control" placeholder="some@body.com" required></input>
                </div>
                <div class="mb-3">
                <label for="phone" class="form-label"  placeholer="555-555-5555">Phone Number</label>
                <input type="phone" id="phone" class="form-control" placeholder="555-555-5555"></input>
                </div>
                <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea type="message" id="message" class="form-control" placeholder="Wow, I really like the website! However, I think that you should implement some sort of error handling in case someone types in a random string into the search bar." required></textarea>
                </div>
                <div class="mb-3">
                <button type="submit" id="submit" class="btn btn-primary">Submit</button>
                </div>
                </fieldset>
            </form>
        </div>
    )
}
export default ContactForm;