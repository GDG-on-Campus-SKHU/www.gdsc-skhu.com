import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import {
  defaultFadeInUpVariants,
  defaultFadeInVariants,
  staggerFourFive,
} from '../../constants/motions';
import { bigCss, colors, defaultButtonCss } from '../../styles/constants';

const CORE_MEMBER_RECRUIT_LINK =
  'https://boom-galleon-6d9.notion.site/Core-f428033a4e594672b27091d054d613b7';

export default function RecruitSection() {
  return (
    <section>
      <motion.div
        variants={staggerFourFive}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.6 }}
        css={css`
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 95vh;
        `}
      >
        <motion.h2
          variants={defaultFadeInVariants}
          css={css`
            ${bigCss}
            text-align: center;
            margin-bottom: 120px;
          `}
        >
          성공회대 GDSC의
          <br />
          시작을 함께하고 싶다면
          <br />
        </motion.h2>

        <motion.a
          variants={defaultFadeInUpVariants}
          href={CORE_MEMBER_RECRUIT_LINK}
          target="_blank"
          rel="noreferrer"
          css={css`
            font-size: 1.5rem;
            font-weight: bold;
            width: 32rem;
            max-width: 100%;
            height: 5rem;

            ${defaultButtonCss}

            margin-bottom: 100px;
          `}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Core 멤버 지원하기
        </motion.a>

        <motion.p
          variants={defaultFadeInVariants}
          css={css`
            align-self: flex-end;
            color: ${colors.gray500};
          `}
        >
          일반 멤버는 추후 모집 예정입니다.
        </motion.p>
      </motion.div>
    </section>
  );
}
