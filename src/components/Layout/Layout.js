import React from 'react';
import styled from 'styled-components';
import {
  sectionTitleFont,
  defaultFontStyle,
  defaultFontSize,
} from './../../styles/mixin';

export default function Layout() {
  return (
    <LayoutWrap>
      <SectionTitle>Skills</SectionTitle>
      <Text>단디하는 프론트엔드 개발자 강단입니다.</Text>
    </LayoutWrap>
  );
}
const LayoutWrap = styled.section`
  width: 1000px;
  margin: 440px auto 0;
`;
const SectionTitle = styled.h3`
  ${sectionTitleFont}
`;

const Text = styled.p`
  ${defaultFontStyle}
  ${defaultFontSize}
`;
