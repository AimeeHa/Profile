import styles from '../statics/styles';

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        name="contact"
        className="section-root h-max flex-col py-[36px] "
      >
        <h1 className="section-title bg-white text-blue pt-0 after:top-[36px]">
          CONTACT ME
        </h1>
        <form
          className="w-full tablet:w-[65%] laptop:w-1/2 desktop:w-1/2 min-h-[460px]
        flex flex-col justify-evenly gap-6 p-[12px] tablet:p-[24px] laptop:p-[24px]
        desktop:p-[24px] bg-[#e6e7f0] rounded-[16px] mb-[12px]"
        >
          <div className={styles.formDiv}>
            <label className={styles.formLabel} htmlFor="name">
              Name
            </label>
            <input className={styles.formInput} type="text" id="name" />
          </div>
          <div className={styles.formDiv}>
            <label className={styles.formLabel} htmlFor="email">
              Email
            </label>
            <input className={styles.formInput} type="email" id="email" />
          </div>
          <div className={styles.formDiv}>
            <label className={styles.formLabel} htmlFor="message">
              Message
            </label>
            <textarea className={styles.formInput} id="message" rows={3} />
          </div>
          <button
            type="submit"
            className={`self-end mr-[12px] ${styles.orangeBtn}`}
          >
            Send
          </button>
        </form>
      </section>
    </>
  );
}
