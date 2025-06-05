/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import {
  defaultFadeInUpVariants,
  defaultFadeInVariants,
  staggerOne,
} from '../../constants/motions';
import { bigCss, colors, mediaQuery } from '../../styles/constants';

const GOOGLE_SOLUTION_CHALLENGE_LINK =
  'https://developers.google.com/community/GDSC-solution-challenge';

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
        GDGoC만의 경험
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
            GDGoC는 개발에 있어 다른 무엇보다 협력과 소통이 가장 중요하다고 생각합니다.
            <br />
            <br />
            친해지길 바래 MT와 종강 파티, 즐거운 회식 등, GDGoC와 함께했을 때 보다 활기차고 신나는
            대학 생활을 누리며 멤버들이 더 넓은 인간 관계를 가질 수 있도록 계획하고 있습니다.
          </p>
        </motion.article>

        <motion.article css={articleCss} variants={defaultFadeInUpVariants}>
          <h3>스터디 활동</h3>
          <p>
            Web, App, Server, AI/ML, PM, DESIGN 과정으로 나누어, 입문자를 기준으로 설계한 커리큘럼을
            통해 파트별 스터디를 진행합니다.
            <br />
            <br />
            빠르게 성장하고 싶은 열정과 배우고자 하는 의지만 있다면 누구나 좋은 개발자로서의 첫
            걸음을 내딛을 수 있도록 돕습니다.
          </p>
        </motion.article>

        <motion.article css={articleCss} variants={defaultFadeInUpVariants}>
          <h3>프로젝트 활동</h3>
          <p>
            스터디를 통해 탄탄히 다진 기본기를 바탕으로 다른 파트의 멤버들과 함께 세상에 기여할
            서비스를 개발합니다.
            <br />
            <br />
            아이디어 회의, 도메인 설계와 개발, 서비스 배포까지, 전반적인 개발 프로세스에 대해 경험할
            수 있도록 최선을 다할 것입니다.
          </p>
        </motion.article>
      </motion.div>
      <motion.div
        css={css`
          display: flex;
          justify-content: space-evenly;
          margin-top: 1rem;
          ${mediaQuery('xs')} {
            flex-direction: column;
            justify-content: center;
            gap: 12px;
            align-items: center;
            margin-top: 1rem;
          }
        `}
        variants={staggerOne}
      >
        <motion.article css={articleCss({ width: '95%' })} variants={defaultFadeInUpVariants}>
          <h3>Solution Challenge</h3>
          <p>
            GDGoC와 함께 진행한 다양한 활동 경험들을 통해,
            <a href={GOOGLE_SOLUTION_CHALLENGE_LINK} target="_blank" rel="noreferrer">
              &nbsp;Google의 전 세계적 개발 대회인 Solution Challenge
            </a>
            에 도전하는 것을 목표로 합니다. Solution Challenge는 UN에서 정한 17가지 지속 발전 가능
            개발 목표를 바탕으로 공동체 및 지역 사회의 문제를 해결하는 서비스를 개발하는 대회입니다.
            <br />
            만일 Solution Challenge에서 좋은 성적을 거두면 현직 Google 개발자의 멘토링 기회 뿐만
            아니라 많은 상금도 받을 수 있습니다!
          </p>
        </motion.article>
      </motion.div>
    </motion.section>
  );
}

const articleCss = ({ width = '30%' }: { width?: string }) => css`
  width: ${width};
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
