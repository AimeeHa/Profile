export default function Contact() {
  return (
    <>
      <section
        id="contact"
        name="contact"
        className="section-root flex-col h-fit py-[36px] justify-evenly"
      >
        <h1 className="section-title bg-white text-blue pt-0 after:top-[36px]">
          CONTACT ME
        </h1>
        <form className="w-[90%] tablet:w-[65%] laptop:w-1/2 desktop:w-1/2 min-h-[420px] flex flex-col justify-evenly gap-6 p-[12px] tablet:p-[24px] laptop:p-[24px] desktop:p-[24px] bg-[#e6e7f0] rounded-[16px]">
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
            <textarea id="message" rows={3} />
          </div>
          <button
            type="submit"
            className="self-end w-max mr-[12px] px-[16px] py-[4px] rounded-[16px] bg-orange text-primary hover:cursor-pointer hover:shadow-[0px_1px_10px_-1px_rgba(48,49,121,.45)] hover:translate-y-[-1px] transition ease-in-out duration-300"
          >
            Send
          </button>
        </form>
      </section>
    </>
  );
}
