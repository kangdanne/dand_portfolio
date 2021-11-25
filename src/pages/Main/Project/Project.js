import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  sectionTitleFont,
  mediumFontStyle,
  defaultFontStyle,
  defaultFontSize,
  smallFontSize,
} from '../../../styles/mixin';
import DefaultlButton from '../../../components/Button/DefaultlButton/DefaultlButton';

export default function Project() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch(`/data/ProjectData.json`)
      .then(data => data.json())
      .then(data => setProject(data));
  }, []);

  return (
    <SectionWrap>
      <SectionTitle>Project</SectionTitle>
      <ProjectList>
        {project &&
          project.map(
            ({
              projectId,
              projectImg,
              projectTitle,
              projectDiscription,
              role,
              usedskill,
              githubURL,
              postURL,
            }) => {
              return (
                <ProjectContent key={projectId}>
                  <ProjectImg>
                    <img alt={projectTitle} src={projectImg} />
                  </ProjectImg>
                  <ProjectDetail>
                    <ProjectTitle>
                      <span>{projectTitle}</span>
                      <span>{projectDiscription}</span>
                    </ProjectTitle>
                    <Details>
                      <li>
                        <p>Front-end</p>
                        <p>{role}</p>
                      </li>
                      <li>
                        <p>Skill</p>
                        <p>
                          작업한 내용이 들어갈 영역
                          <br />
                          작업한 내용이 들어갈 영역
                          <Buttons>
                            {githubURL && (
                              <DefaultlButton
                                text="GitHub"
                                buttonLink={githubURL}
                              />
                            )}
                            {postURL && (
                              <DefaultlButton
                                text="Posting"
                                buttonLink={postURL}
                              />
                            )}
                          </Buttons>
                        </p>
                      </li>
                    </Details>
                  </ProjectDetail>
                </ProjectContent>
              );
            }
          )}
      </ProjectList>
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

const ProjectList = styled.ul`
  margin-left: 200px;
`;

const ProjectContent = styled.li`
  display: flex;
  height: 300px;
`;

const ProjectImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  margin-right: 50px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.2);

  img {
    width: 150px;
    height: auto;
  }
`;

const ProjectDetail = styled.div`
  width: 400px;
`;

const ProjectTitle = styled.p`
  display: flex;
  align-items: center;
  padding-bottom: 5px;
  margin-bottom: 5px;

  span {
    flex: 2.5;
    ${defaultFontStyle}
    ${mediumFontStyle}

    &:nth-child(1) {
      font-weight: 600;
    }

    &:nth-child(2) {
      flex: 7.5;
      color: #888;
      ${smallFontSize}
    }
  }
`;

const Details = styled.ul`
  margin-bottom: 20px;

  li {
    display: flex;
    ${defaultFontStyle}
    ${defaultFontSize}

    & > p:nth-child(1) {
      position: relative;
      flex: 2;
      text-align: right;

      &:after {
        content: '';
        position: absolute;
        top: 10px;
        right: -16px;
        width: 1px;
        height: 8px;
        background: #000;
      }
    }

    & > p:nth-child(2) {
      margin-left: 30px;
      flex: 8;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  a {
    margin: 10px 0;
  }
`;
