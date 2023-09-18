export default function Contact() {
  return (
    <>
      <div className="w-full h-screen flex flex-col gap-6 items-center justify-center bg-red-50">
        <div>Contact Me</div>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" />
          </div>
        </form>
      </div>
    </>
  );
}
