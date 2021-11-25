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
      <SectionTitle>Title</SectionTitle>
    </LayoutWrap>
  );
}

const LayoutWrap = styled.section`
  width: 1000px;
  margin: 200px auto;
`;

const SectionTitle = styled.h3`
  ${sectionTitleFont}
`;

const Text = styled.p`
  ${defaultFontStyle}
  ${defaultFontSize}
`;
