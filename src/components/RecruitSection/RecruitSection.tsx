import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import {
  defaultFadeInUpVariants,
  defaultFadeInVariants,
  staggerFourFive,
} from '../../constants/motions';
import { bigCss, colors, defaultButtonCss } from '../../styles/constants';

const REACT_RECRUIT_LINK =
  'https://windy-bedbug-ef3.notion.site/GDSC-SKHU-React-Team-Recruiting-eeaf91e977804acc95aa3ad4a3dd7597?pvs=4';
const FLUTTER_RECRUIT_LINK =
  'https://windy-bedbug-ef3.notion.site/GDSC-SKHU-Flutter-Team-Recruiting-f4c0551089544937bb53b0c5d678a36b?pvs=4';
const SPRING_RECRUIT_LINK =
  'https://windy-bedbug-ef3.notion.site/GDSC-SKHU-Spring-Team-Recruiting-f87babd9aac74463bc1fd4efb35cad29?pvs=4';
const PM_RECRUIT_LINK =
  'https://windy-bedbug-ef3.notion.site/GDSC-SKHU-PM-Part-Recruiting-6bf72d1d772b4d3da0c225e2d8ace302?pvs=4';
const AI_RECRUIT_LINK =
  'https://windy-bedbug-ef3.notion.site/GDSC-SKHU-AI-ML-Team-Recruiting-4fea39476b6e4a4898292d893acf03cf?pvs=4';

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
          성공회대 GDSC와
          <br />
          함께하고 싶다면
          <br />
        </motion.h2>
        <RecruitAnchor href={REACT_RECRUIT_LINK} text="React 파트 멤버 지원하기" />
        <RecruitAnchor href={FLUTTER_RECRUIT_LINK} text="Flutter 파트 멤버 지원하기" />
        <RecruitAnchor href={SPRING_RECRUIT_LINK} text="Spring 파트 멤버 지원하기" />
        <RecruitAnchor href={AI_RECRUIT_LINK} text="AI/ML 파트 멤버 지원하기" />
        <RecruitAnchor href={PM_RECRUIT_LINK} text="PM 파트 멤버 지원하기" />
      </motion.div>
    </section>
  );
}

interface RecruitAnchorProps {
  href: string;
  text: string;
  disable?: boolean;
}

function RecruitAnchor({ href, text, disable = false }: RecruitAnchorProps) {
  if (disable) {
    return (
      <motion.button
        variants={defaultFadeInUpVariants}
        onClick={() => {
          alert('모집 기간이 아닙니다.');
        }}
        css={css`
          ${defaultButtonCss}

          font-size: 1.5rem;
          font-weight: bold;
          width: 32rem;
          max-width: 100%;
          height: 5rem;

          margin-bottom: 14px;

          color: ${colors.gray100};
          background-color: rgba(255, 255, 255, 0.2);
        `}
      >
        {text}
      </motion.button>
    );
  }

  return (
    <motion.a
      variants={defaultFadeInUpVariants}
      href={href}
      target="_blank"
      rel="noreferrer"
      css={css`
        ${defaultButtonCss}

        font-size: 1.5rem;
        font-weight: bold;
        width: 32rem;
        max-width: 100%;
        height: 5rem;

        margin-bottom: 14px;
      `}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {text}
    </motion.a>
  );
}
