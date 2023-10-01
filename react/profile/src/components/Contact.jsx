export default function Contact() {
  return (
    <>
      <section
        id="contact"
        name="contact"
        className="section-root flex-col min-h-max justify-evenly"
      >
        <h1 className="section-title bg-white text-blue pt-0 after:top-[36px]">
          CONTACT ME
        </h1>
        <form className="w-1/2 min-w-[320px] min-h-[480px] flex flex-col justify-evenly gap-6 p-[24px] pt-0 bg-[#e6e7f0] rounded-[8px]">
          <div className="form-div pt-[24px]">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className="form-div">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="form-div">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={3} />
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
