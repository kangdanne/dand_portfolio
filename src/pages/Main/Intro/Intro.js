import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  mainTitleFont,
  subTitleFont,
  defaultFontStyle,
  defaultFontSize,
  smallFontSize,
} from '../../../styles/mixin';

export default function Intro() {
  const [introContents, setIntroContents] = useState({});

  useEffect(() => {
    fetch(`/data/introData.json`)
      .then(data => data.json())
      .then(data => setIntroContents(data));
  }, []);

  return (
    <IntroWrap>
      <SubTitle>{introContents.position}</SubTitle>
      <IntroTitle>{introContents.title}</IntroTitle>

      {introContents.firstLine &&
        introContents.firstLine.map(idx => {
          return <IntroMainDiscriotion key={idx}>{idx}</IntroMainDiscriotion>;
        })}

      <Remark className="remark">{introContents.remark}</Remark>
      <IntroSubDiscriotion className="introDiscriotion">
        {introContents.secondLine}
      </IntroSubDiscriotion>
      <IntroSubDiscriotion>
        {introContents.thirdLine &&
          introContents.thirdLine.map(idx => {
            return <span key={idx}>{idx}</span>;
          })}
      </IntroSubDiscriotion>
    </IntroWrap>
  );
}

const IntroWrap = styled.section`
  width: 1000px;
  margin: 400px auto 0;
`;

const IntroTitle = styled.h1`
  ${mainTitleFont}
  text-indent: -7px;
`;

const SubTitle = styled.h2`
  ${subTitleFont}
`;

const IntroMainDiscriotion = styled.span`
  ${defaultFontStyle};
  ${defaultFontSize};
  cursor: pointer;

  &:nth-child(odd) {
    font-weight: 600;
  }
  &:hover ~ p.remark {
    color: #acacac;
    transition: all 0.8s;
    text-indent: 13px;
  }
  &:hover ~ p.introDiscriotion {
    margin-top: 20px;
    transition: all 0.3s;
  }
`;

const IntroSubDiscriotion = styled.p`
  ${defaultFontStyle};
  ${defaultFontSize};
`;

const Remark = styled.p`
  height: 0;
  ${defaultFontStyle};
  ${smallFontSize};
  color: #fff;
  text-indent: -10px;
`;
