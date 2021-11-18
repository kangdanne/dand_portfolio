import React from 'react';
import styled from 'styled-components';
import { titleFont, defaultFont } from './../../../styles/mixin';

export default function Intro() {
  return (
    <div>
      <IntroTitle>DAN:D</IntroTitle>
      <IntroDiscriotion>
        단디하는 프론트엔드 개발자 강단입니다.
      </IntroDiscriotion>
    </div>
  );
}

const IntroTitle = styled.h1`
  ${titleFont}
`;

const IntroDiscriotion = styled.p`
  ${defaultFont}
`;
