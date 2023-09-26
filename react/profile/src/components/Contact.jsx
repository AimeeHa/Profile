export default function Contact() {
  return (
    <>
      <section id="contact" name="contact" className="section-root flex-col ">
        <div>Contact Me</div>
        <form className="flex flex-col gap-6">
          <div className="form-div">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className="form-div">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="form-div">
            <label htmlFor="message">Message</label>
            <textarea id="message" />
          </div>
        </form>
      </section>
    </>
  );
}
