import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import {
  defaultFadeInUpVariants,
  defaultFadeInVariants,
  staggerFourFive,
} from '../../constants/motions';
import { bigCss, colors, defaultButtonCss } from '../../styles/constants';

const WEB_RECRUIT_LINK =
  'https://noble-animal-f7e.notion.site/GDGoC-4-209dacc0346380f380adef75e3e201fc';
const APP_RECRUIT_LINK =
  'https://noble-animal-f7e.notion.site/GDGoC-4-209dacc0346380f380adef75e3e201fc';
const SERVER_RECRUIT_LINK =
  'https://noble-animal-f7e.notion.site/GDGoC-4-209dacc0346380f380adef75e3e201fc';
const PM_RECRUIT_LINK =
  'https://noble-animal-f7e.notion.site/GDGoC-4-209dacc0346380f380adef75e3e201fc';
const AI_RECRUIT_LINK =
  'https://noble-animal-f7e.notion.site/GDGoC-4-209dacc0346380f380adef75e3e201fc';
const DESIGN_RECRUIT_LINK =
  'https://noble-animal-f7e.notion.site/GDGoC-4-209dacc0346380f380adef75e3e201fc';

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
          성공회대 GDGoC와
          <br />
          함께하고 싶다면
          <br />
        </motion.h2>
        <RecruitAnchor href={AI_RECRUIT_LINK} text="AI/ML 파트 멤버 지원하기" />
        <RecruitAnchor href={PM_RECRUIT_LINK} text="PM 파트 멤버 지원하기" />
        <RecruitAnchor href={DESIGN_RECRUIT_LINK} text="Design 파트 멤버 지원하기" />
        <RecruitAnchor href={WEB_RECRUIT_LINK} text="Web 파트 멤버 지원하기" />
        <RecruitAnchor href={APP_RECRUIT_LINK} text="App 파트 멤버 지원하기" />
        <RecruitAnchor href={SERVER_RECRUIT_LINK} text="Server 파트 멤버 지원하기" />
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
