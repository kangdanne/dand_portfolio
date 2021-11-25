import React from 'react';
import styled from 'styled-components';
import Intro from './Intro';
import Skill from './Skill';
import SubSkill from './SubSkill';
import LearningLog from './LearningLog/LearningLog';
import Projects from './Projects/Projects';
import WorkExperiences from './WorkExperiences/WorkExperiences';
import OtherExperiences from './OtherExperiences/OtherExperiences';
import Educations from './Educations/Educations';

export default function Main() {
  return (
    <MainWrap>
      <Intro />
      <Skill />
      <SubSkill />
      <LearningLog />
      <Projects />
      <WorkExperiences />
      <OtherExperiences />
      <Educations />
    </MainWrap>
  );
}

const MainWrap = styled.div``;
