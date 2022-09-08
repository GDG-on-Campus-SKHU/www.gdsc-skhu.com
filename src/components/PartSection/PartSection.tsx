import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import {
  defaultFadeInUpVariants,
  defaultFadeInVariants,
  staggerOne,
} from '../../constants/motions';
import { bigCss, colors, mediaQuery } from '../../styles/constants';

const GOOGLE_SOLUTION_CHALLENGE_LINK =
  'https://developers.google.com/community/gdsc-solution-challenge';

export default function PartSection() {
  return (
    <motion.section
      variants={staggerOne}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.6 }}
      css={css`
        margin-top: 5rem;
        margin-bottom: 5rem;
      `}
    >
      <motion.h2
        variants={defaultFadeInVariants}
        css={css`
          ${bigCss}
          text-align: center;
          margin-bottom: 120px;

          ${mediaQuery('xs')} {
            margin-bottom: 80px;
          }
        `}
      >
        GDSC만의 경험
      </motion.h2>

      <motion.div
        variants={staggerOne}
        css={css`
          display: flex;
          justify-content: space-evenly;

          ${mediaQuery('xs')} {
            flex-direction: column;
            justify-content: center;
            gap: 12px;
            align-items: center;
          }
        `}
      >
        <motion.article css={articleCss} variants={defaultFadeInUpVariants}>
          <h3>친목 활동</h3>
          <p>
            MT, 피크닉, 회식등 친목을 위한 활동을 통해 보다 활기찬 대학 생활을 누릴 수 있도록
            계획하고 있습니다.
          </p>
        </motion.article>

        <motion.article css={articleCss} variants={defaultFadeInUpVariants}>
          <h3>스터디 활동</h3>
          <p>
            Web, Mobile, Java backend 과정으로 나누어, 입문자를 기준으로 설계한 커리큘럼을 진행해
            개발자로써의 첫 걸음을 돕습니다.
          </p>
        </motion.article>

        <motion.article css={articleCss} variants={defaultFadeInUpVariants}>
          <h3>프로젝트 활동</h3>
          <p>
            스터디를 통해 탄탄히 다진 기본기를 이용해 다른 분야의 멤버들과 함께 세상에 기여할
            서비스를 개발합니다.
            <br /> 개발한 서비스를 통해{' '}
            <a href={GOOGLE_SOLUTION_CHALLENGE_LINK} target="_blank" rel="noreferrer">
              구글의 Solution Challenge
            </a>
            에 도전하는 것을 목표로 합니다.
          </p>
        </motion.article>
      </motion.div>
    </motion.section>
  );
}

const articleCss = css`
  width: 30%;
  background-color: white;
  padding: 16px 14px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 8px 30px;

  & > h3 {
    font-size: 1.5rem;
    margin-bottom: 12px;
  }

  & > p {
    color: ${colors.gray500};
    font-size: 1rem;
    line-height: 150%;
  }

  & a {
    color: ${colors.gdscBlue};
  }

  ${mediaQuery('xs')} {
    width: 100%;
  }
`;
