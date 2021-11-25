import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  sectionTitleFont,
  mediumFontStyle,
  defaultFontStyle,
  defaultFontSize,
} from '../../../styles/mixin';

export default function SubSkill() {
  const [subSkill, setSubskill] = useState({});

  useEffect(() => {
    fetch(`/data/SubSkillData.json`)
      .then(data => data.json())
      .then(data => setSubskill(data));
  }, []);

  return (
    <SectionWrap>
      <SectionTitle>Sub skill</SectionTitle>
      <SectionContent>
        <SkillTitle>{subSkill.subSkillName}</SkillTitle>
        <SkillList>
          {subSkill.subSkillList &&
            subSkill.subSkillList.map(idx => {
              return (
                <SkillContent key={idx}>
                  <Text>{idx}</Text>
                </SkillContent>
              );
            })}
        </SkillList>
      </SectionContent>
    </SectionWrap>
  );
}

const SectionWrap = styled.section`
  display: flex;
  justify-content: space-around;
  width: 1000px;
  margin: 200px auto;
`;

const SectionTitle = styled.h3`
  flex: 2;
  ${sectionTitleFont};
`;

const SectionContent = styled.article`
  flex: 3;
`;

const SkillList = styled.ul``;

const SkillContent = styled.li`
  text-indent: 50px;
`;

const SkillTitle = styled.p`
  padding-bottom: 5px;
  margin-bottom: 5px;
  ${defaultFontStyle}
  ${mediumFontStyle}
  border-bottom: 1px solid #005B3A;
`;

const Text = styled.p`
  margin-bottom: 5px;
  ${defaultFontStyle}
  ${defaultFontSize}
`;
