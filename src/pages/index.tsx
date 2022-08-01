import { css } from '@emotion/react';

import SEO from '../components/common/SEO';
import IntroduceSection from '../components/IntroduceSection';
import RecruitSection from '../components/RecruitSection';
import { layoutCss } from '../styles/constants/layout';

export default function Root() {
  return (
    <>
      <SEO urlPath="" title="GDSC at SKHU" />

      <main
        css={css`
          margin-top: 100vh;
          background-color: rgba(255, 255, 255, 0.5);
          width: 100%;
          opacity: 1;
          backdrop-filter: blur(20px);
          box-shadow: 0px -4px 20px 6px rgba(104, 112, 118, 0.08);
        `}
      >
        <div
          css={css`
            ${layoutCss}
            padding-top: 64px;
            padding-bottom: 64px;
          `}
        >
          <IntroduceSection />
          <RecruitSection />
        </div>
      </main>
    </>
  );
}
