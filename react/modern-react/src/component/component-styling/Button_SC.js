import React from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 0 1rem;
  justify-content: center;
  align-items: center;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  background: ${props => props.theme.pallete.blue};
  &:hover {
    background: ${props => lighten(0.1, props.theme.pallete.blue)};
  }
  &:active {
    background: ${props => darken(0.1, props.theme.pallete.blue)};
  }

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;
const Button_SC = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button_SC;
