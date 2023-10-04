export default function About() {
  return (
    <>
      <section
        id="about"
        name="about"
        className="section-root flex-col px-0 gap-6 pt-0"
      >
        <article className="w-[100%] h-[30%] bg-orange px-8  tablet:px-12 laptop:px-16 desktop:px-24">
          Skills
        </article>
        <article className="w-[100%] h-[70%] px-8 tablet:px-12 laptop:px-16 desktop:px-24">
          Others
        </article>
      </section>
    </>
  );
}
