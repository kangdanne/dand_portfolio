import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function TopButton() {
  return (
    <TopButtonWrap>
      <p className="text">Scroll</p>
      <p className="line" />
    </TopButtonWrap>
  );
}

const upDown = keyframes`
    0%{
      width:100%;
    }
    100% {
      width:0;
    }
`;

const TopButtonWrap = styled.div`
  position: fixed;
  right: 50%;
  /* margin-right: -500px; */
  margin-right: -600px;
  bottom: 90px;
  width: 80px;
  height: 20px;
  cursor: pointer;
  transform: rotate(270deg);

  &:hover > p.text {
    opacity: 0.7;
  }

  p.text {
    height: 100%;
    padding-top: 6px;
    text-align: right;
    font-size: 13px;
    letter-spacing: 2px;
  }

  p.line {
    position: relative;
    width: 100%;
    height: 1px;
    background: #8a8a8a;

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      width: 20px;
      height: 1px;
      background: #8a8a8a;
      transform-origin: bottom left;
      transform: rotate(310deg);
    }

    &:after {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      width: 100%;
      height: 2px;
      background: #fff;
      animation-duration: 2s;
      animation-timing-function: ease-out;
      animation-name: ${upDown};
      animation-iteration-count: infinite;
    }
  }
`;
