import React from 'react';
import styled from 'styled-components';
import {
  mainTitleFont,
  subTitleFont,
  sectionTitleFont,
  defaultFont,
} from './../../../styles/mixin';

export default function Intro() {
  return (
    <IntroWrap>
      <SubTitle>Frond-end Developer</SubTitle>
      <IntroTitle>DAN:D</IntroTitle>
      <SectionTitle>Projects</SectionTitle>
      <IntroDiscriotion>
        단디하는 프론트엔드 개발자 강단입니다.
      </IntroDiscriotion>
    </IntroWrap>
  );
}
const IntroWrap = styled.section`
  width: 1000px;
  margin: 440px auto 0;
`;

const IntroTitle = styled.h1`
  ${mainTitleFont}
`;

const SubTitle = styled.h2`
  ${subTitleFont}
`;

const SectionTitle = styled.h3`
  ${sectionTitleFont}
`;

const IntroDiscriotion = styled.p`
  ${defaultFont}
`;
