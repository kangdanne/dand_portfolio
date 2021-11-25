import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  sectionTitleFont,
  mediumFontStyle,
  defaultFontStyle,
  defaultFontSize,
} from '../../../styles/mixin';

export default function Skill() {
  const [skill, setSkill] = useState([]);

  useEffect(() => {
    fetch(`/data/skillData.json`)
      .then(data => data.json())
      .then(data => setSkill(data));
  }, []);

  return (
    <SectionWrap>
      <SectionTitle>Skill</SectionTitle>
      <SkillList>
        {skill &&
          skill.map(({ skillName, skillDiscripttion }, idx) => {
            return (
              <SkillContent key={idx}>
                <SkillTitle>{skillName}</SkillTitle>
                <Text>{skillDiscripttion}</Text>
              </SkillContent>
            );
          })}
      </SkillList>
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

const SkillList = styled.ul`
  margin-left: 200px;
`;

const SkillContent = styled.li`
  height: 200px;
`;

const SkillTitle = styled.p`
  padding-bottom: 5px;
  margin-bottom: 5px;
  ${defaultFontStyle}
  ${mediumFontStyle}
  border-bottom: 1px solid #005B3A;
`;

const Text = styled.p`
  ${defaultFontStyle}
  ${defaultFontSize}
`;
