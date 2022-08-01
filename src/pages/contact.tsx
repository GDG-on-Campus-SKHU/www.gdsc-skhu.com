import { css } from '@emotion/react';
import { motion, Variants } from 'framer-motion';

import SEO from '../components/common/SEO';
import { defaultEasing } from '../constants/motions';
import { colors, defaultButtonCss, layoutCss } from '../styles/constants';

const EMAIL = 'gdsc.skhu@gmail.com';
const PHONE = '010-5036-1390';

export default function Contact() {
  return (
    <>
      <SEO title="Contact to GDSC at SKHU" />

      <motion.main
        variants={rightInOutVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        css={css`
          ${layoutCss}
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        `}
      >
        <article
          css={css`
            width: 400px;
            max-width: 100%;
            /* height: 420px;
            max-height: 90vh; */
            padding: 20px 16px;

            background-color: rgba(255, 255, 255, 0.5);
            backdrop-filter: blur(20px);
            box-shadow: 0px -4px 20px 6px rgba(104, 112, 118, 0.08);

            display: flex;
            flex-direction: column;
          `}
        >
          <h2
            css={css`
              font-size: 3rem;
              line-height: 3.5rem;
              margin-bottom: 16px;
            `}
          >
            무엇이든
            <br />
            물어보세요.
          </h2>
          <p
            css={css`
              font-size: 1.125rem;
              line-height: 1.375rem;
              color: ${colors.gray500};
              margin-bottom: 32px;
            `}
          >
            궁금한 점부터 일상적인 대화까지
            <br />
            편하게 연락해주세요.
          </p>

          <section
            css={css`
              display: flex;
              flex-direction: column;
              gap: 12px;
            `}
          >
            <motion.a
              href={`mailto:${EMAIL}`}
              css={css`
                ${defaultButtonCss}
                width: 100%;
                height: 50px;
                display: flex;
                justify-content: space-between;
                padding: 0 1.25rem;
              `}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Email</span>
              <span>{EMAIL}</span>
            </motion.a>

            <span
              css={css`
                ${defaultButtonCss}
                width: 100%;
                height: 50px;
                display: flex;
                justify-content: space-between;
                padding: 0 1.25rem;
              `}
            >
              <span>Phone</span>
              <span>{PHONE}</span>
            </span>
          </section>
        </article>
      </motion.main>
    </>
  );
}

const rightInOutVariants: Variants = {
  initial: {
    x: '100vw',
    transition: { duration: 0.75, ease: defaultEasing },
  },
  animate: {
    x: 0,
    transition: { duration: 0.75, ease: defaultEasing },
  },
  exit: {
    x: '100vw',
    transition: { duration: 0.75, ease: defaultEasing },
  },
};
