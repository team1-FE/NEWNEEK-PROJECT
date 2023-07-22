import { styled } from "styled-components";

const StyledAuthButton = styled.button`
  appearance: auto;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  margin: 0em;
  font: inherit;
  text-align: center;
  cursor: pointer;
  position: relative;
  border-radius: 8px;
  background: #051619;
  border: 1px solid #051619;
  color: #fff;
  padding: 10px 1.5rem 11px;
  display: inline-block;
  min-width: 104px;
  width: 100%;
  &:disabled {
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
  }
  &:enabled:hover {
    background: #fff;
    color: #000;
    cursor: pointer;
  }
`;

export const AuthButton = (props) => <StyledAuthButton {...props} />;
