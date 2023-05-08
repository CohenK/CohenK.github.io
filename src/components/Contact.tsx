import "../styles/Contact.css";

function Contact() {
  return (
    <section className="ContactPage">
      <form
        className="form"
        action="https://formsubmit.co/kangcohen@gmail.com"
        method="POST"
      >
        <div className="top">
          <div className="subject">
            <p>subject:</p>
            <input id="subject" type="text" name="_subject" required />
          </div>
          <div className="email">
            <p>your email:</p>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="(optional)"
            />
          </div>
        </div>

        <textarea
          className="message"
          id="message"
          name="message"
          placeholder="your message"
          required
        />
        <button className="button" type="submit">
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
