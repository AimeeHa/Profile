export default function About() {
  return (
    <>
      <section
        id="about"
        name="about"
        className="section-root flex-col h-fit py-[36px] justify-evenly"
      >
        <h1 className="section-title bg-white text-blue pt-0 after:top-[36px]">
          ABOUT ME
        </h1>
        <div className="w-full min-h-[420px] flex flex-row items-center justify-evenly">
          <div className="">Others</div>
          <div className="">Skills</div>
        </div>
      </section>
    </>
  );
}
