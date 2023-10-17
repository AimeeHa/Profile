import { useEffect, useState } from 'react';
import styles from '../statics/styles';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [confirmation, setConfirmation] = useState(0);
  const [isDisplay, setIsDisplay] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.status === 200) {
        setIsDisplay(true);
        setConfirmation(200);

        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' });
          setConfirmation(0);
          setIsDisplay(false);
        }, 2500);
      } else {
        setConfirmation(400);
        setIsDisplay(true);
      }
    });
  };

  return (
    <>
      <section
        id="contact"
        name="contact"
        className="section-root h-max flex-col py-[36px]"
      >
        <h1 className="section-title bg-white text-blue pt-0 after:top-[36px]">
          CONTACT ME
        </h1>
        <form
          className="w-full tablet:w-[65%] laptop:w-1/2 desktop:w-1/2 min-h-[460px]
        flex flex-col justify-evenly gap-6 p-[12px] tablet:p-[24px] laptop:p-[24px]
        desktop:p-[24px] bg-[#e6e7f0] rounded-[16px] mb-[12px] relative"
          action="/api/contact"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className={styles.formDiv}>
            <label className={styles.formLabel} htmlFor="name">
              Name
            </label>
            <input
              className={styles.formInput}
              type="text"
              id="name"
              placeholder="ABC"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>
          <div className={styles.formDiv}>
            <label className={styles.formLabel} htmlFor="email">
              Email
            </label>
            <input
              className={styles.formInput}
              type="email"
              id="email"
              placeholder="abc@xyz.com"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className={styles.formDiv}>
            <label className={styles.formLabel} htmlFor="message">
              Message
            </label>
            <textarea
              className={styles.formInput}
              id="message"
              rows={3}
              placeholder="I came across your portfolio and ..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            />
          </div>
          <button
            type="submit"
            className={`self-end mr-[12px] ${styles.orangeBtn}`}
          >
            Send
          </button>

          <article
            className={`${isDisplay ? 'flex' : 'hidden'}
            w-full h-full bg-primary rounded-[16px] absolute top-0 left-0
            flex-col items-center justify-center gap-[28px] tablet:p-[24px]
            laptop:p-[24px] desktop:p-[24px] text-lightblue font-[500] z-10
            transition ease-in duration-300`}
          >
            {confirmation === 200 ? (
              <div
                className="flex items-center justify-center bg-[#daf0da] w-[136px]
                  h-[136px] rounded-[50%] shadow-[0px_0px_12px_0px_#d0dcd0]"
              >
                <span
                  className="w-[100px] h-[100px] rounded-[50%]
                    bg-[#68b868] z-10 flex items-center justify-center"
                >
                  <ThumbUpIcon
                    className="text-white"
                    style={{ width: '38px', height: '38px' }}
                  />{' '}
                </span>
              </div>
            ) : confirmation === 400 ? (
              <div
                className="flex items-center justify-center bg-lightbeige w-[136px]
                h-[136px] rounded-[50%] shadow-[0px_0px_12px_0px_#d0dcd0]"
              >
                <span
                  className="w-[100px] h-[100px] rounded-[50%]
                  bg-beige z-10 flex items-center justify-center"
                >
                  <ThumbDownIcon
                    className="text-white"
                    style={{ width: '38px', height: '38px' }}
                  />{' '}
                </span>
              </div>
            ) : null}

            <div className="flex flex-col items-center justify-center gap-[24px] p-[12px]">
              {confirmation === 200 ? (
                <>
                  {' '}
                  <p className="text-[21px] text-orange">
                    THANK YOU,{' '}
                    <span className="text-orange">
                      {formData.name.toUpperCase()}
                    </span>
                    !
                  </p>
                  <p className="balance text-center">
                    Your message has been received. I'll get back to you soon!
                  </p>
                </>
              ) : confirmation === 400 ? (
                <>
                  <p className="text-[21px] text-orange">
                    SORRY,{' '}
                    <span className="text-orange">
                      {formData.name.toUpperCase()}
                    </span>
                    !
                  </p>
                  <p className="balance text-center">
                    Something went wrong. Please try again or{' '}
                    <span className="text-blue">
                      <a href="mailto:aimee.ha95@gmail.com">email me</a>.
                    </span>
                  </p>
                </>
              ) : null}
            </div>
          </article>
        </form>
      </section>
    </>
  );
}
