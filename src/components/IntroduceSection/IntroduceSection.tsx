import { PropsWithChildren } from 'react';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import {
  defaultFadeInUpVariants,
  defaultFadeInVariants,
  staggerFourFive,
} from '../../constants/motions';
import { bigCss, colors, paragraphCss } from '../../styles/constants';

export default function IntroduceSection() {
  return (
    <section>
      <motion.div
        variants={staggerFourFive}
        initial="initial"
        whileInView="animate"
        exit="exit"
        viewport={{ once: true, amount: 0.6 }}
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <MotionSpan key="a">성공회대에</MotionSpan>

        <motion.span
          key="b"
          variants={defaultFadeInUpVariants}
          css={css`
            ${bigCss}
          `}
        >
          <span
            css={css`
              color: ${colors.gdscRed};
            `}
          >
            G
          </span>
          <span
            css={css`
              color: ${colors.gdscBlue};
            `}
          >
            D
          </span>
          <span
            css={css`
              color: ${colors.gdscYellow};
            `}
          >
            S
          </span>
          <span
            css={css`
              color: ${colors.gdscGreen};
            `}
          >
            C
          </span>
          가
        </motion.span>
        <MotionSpan key="c">처음으로</MotionSpan>
        <MotionSpan key="d">유치되었습니다.</MotionSpan>

        <motion.p
          key="p-a"
          css={css`
            ${paragraphCss}
            margin-top: 3rem;
            line-height: 3rem;
          `}
          variants={defaultFadeInVariants}
        >
          Google과 함께 교내 최고의 개발 커뮤니티를 만들고자 합니다.
        </motion.p>

        <motion.p key="p-b" css={paragraphCss} variants={defaultFadeInVariants}>
          뜻을 함께하는 많은 분들과 함께하고 싶으니, 큰 관심 부탁드리겠습니다.
        </motion.p>
      </motion.div>
    </section>
  );
}

function MotionSpan({ children }: PropsWithChildren<{}>) {
  return (
    <motion.span
      variants={defaultFadeInUpVariants}
      css={css`
        ${bigCss}
        line-height: 6rem;
      `}
    >
      {children}
    </motion.span>
  );
}
