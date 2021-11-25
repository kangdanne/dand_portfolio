import React from 'react';
import styled from 'styled-components';
import { smallFontSize } from '../../../styles/mixin';

export default function DefaultlButton({ buttonLink, text }) {
  return (
    <ButtonWrap href={buttonLink} target="_blank" rel="noreferrer">
      <p className="text">{text}</p>
      <p className="line" />
    </ButtonWrap>
  );
}

const ButtonWrap = styled.a`
  display: flex;
  justify-content: space-around;
  width: 120px;
  height: 25px;
  padding: 3px 10px;
  color: #000;
  ${smallFontSize}
  font-weight: 400;
  border: 1px solid #000;
  border-radius: 5px;
  cursor: pointer;

  p.text {
    height: 100%;
    line-height: 15px;
  }

  p.line {
    position: relative;
    width: 30px;
    height: 1px;
    margin-top: 12px;
    background: #000;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 10px;
      height: 1px;
      background: #000;
      transform-origin: bottom right;
      transform: rotate(45deg);
    }
  }

  &:hover p.line {
    transform: translateX(35px);
    transition: all 0.4s ease;
  }
`;
