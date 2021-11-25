import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  sectionTitleFont,
  defaultFontStyle,
  defaultFontSize,
} from '../../../styles/mixin';

export default function LearningLog() {
  const [learningLog, setLearningLog] = useState([]);

  useEffect(() => {
    fetch(`/data/LearningLogData.json`)
      .then(data => data.json())
      .then(data => setLearningLog(data));
  }, []);

  return (
    <SectionWrap>
      <SectionTitle>
        Learning
        <br />
        Log
      </SectionTitle>
      <LogList>
        {learningLog &&
          learningLog.map(({ linkCategory, linkText, linkURL }, idx) => {
            return (
              <LogContent key={idx}>
                <LogTitle>{linkCategory}</LogTitle>
                <LogUrl href={linkURL} target="_blank" rel="noreferrer">
                  {linkText}
                </LogUrl>
              </LogContent>
            );
          })}
      </LogList>
    </SectionWrap>
  );
}

const SectionWrap = styled.section`
  width: 1000px;
  margin: 200px auto;
`;

const SectionTitle = styled.h3`
  ${sectionTitleFont}
`;

const LogList = styled.ul`
  margin-left: 200px;
`;

const LogContent = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const LogTitle = styled.p`
  width: 100px;
  margin-right: 20px;
  ${defaultFontStyle}
  ${defaultFontSize}
  text-align:right;
`;

const LogUrl = styled.a`
  position: relative;
  ${defaultFontStyle}
  ${defaultFontSize}
  color:${({ theme }) => theme.linkColor};

  &:before {
    content: '';
    position: absolute;
    top: 13px;
    left: 0;
    width: 0;
    height: 9px;
    background: #f6dd13;
    opacity: 0.5;
    z-index: -1;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #084831;
  }

  &:hover:before {
    width: 120%;
  }
`;
