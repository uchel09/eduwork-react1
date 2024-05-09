import "./contact.scss";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="top-header">
        <h1>Get My Contact</h1>
      </div>
      <div className="contact-info">
        <div className="left">
          <div className="left">
            <h2>Find Me</h2>
            <p>Email: russel.emilian@gmail.com</p>
            <p>WhatsApp: 081247302797</p>
          </div>
        </div>
        <div className="right">
          <form action="" className="form-control">
            <div className="form-input">
              <input type="text" className="input-field" placeholder="Name" />
              <input type="text" className="input-field" placeholder="Email" />
            </div>
            <div className="text-area">
              <textarea placeholder="Message"></textarea>
            </div>

            <button className="btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
