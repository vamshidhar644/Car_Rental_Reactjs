
import '../Styles/Contact.css'

const Contact = () => {

  return (
    <section id="contact">
      <div className="contact-container">
        <h1>Contact us</h1>
        <div className="form">
          <form className="contact-parent" action="" >
            <div className="contact-details">
              <input type="text" id="name" name="name" placeholder="Your name" required />
              <input type="email" id="email" name="email" placeholder="Email id" required />
              <input type="phone" id="phone" name="phone" placeholder="Phone no." required />
            </div>
            <div className="message">
              <textarea id="message" rows="4" name="message" placeholder="How can I help you?" ></textarea>
              <div className="submit">
                <button type="submit" className="submit-btn">
                  send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
