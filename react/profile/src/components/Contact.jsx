export default function Contact() {
  return (
    <>
      <section id="contact" name="contact" className="section-root flex-col">
        <form className="w-2/5 flex flex-col gap-6 p-[24px] bg-[#e6e7f0] rounded-[16px]">
          <div className="text-center">Contact Me</div>
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
          <button
            type="submit"
            className="download-btn self-end w-max px-[16px] py-[4px]"
          >
            Send
          </button>
        </form>
      </section>
    </>
  );
}
