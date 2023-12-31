import { styled } from "styled-components";
import Spinner from "../Spinner/Spinner";

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

const StyledAddButtonBox = styled.div`
  width: 100%;
  text-align: center;
`;

const StyledAddButton = styled.button`
  width: 300px;
  height: 55px;
  margin-top: 2rem;
  background: #fff;
  border: 1px solid #000;
  border-radius: 8px;
  outline: none;
  font-size: 0.925rem;
  &:hover {
    background: #ff6b00;
  }
`;

/**
 * @param {Function} onClick the function to call when the button is clicked
 * @param {boolean} isLoading whether the button is loading
 * @param {boolean} isHas whether the data is haved
 */

export const NewsAddButton = ({ onClick, isLoading, isHas }) => {
  if (isLoading) {
    return <Spinner />;
  }
  if (isHas) {
    return (
      <StyledAddButtonBox>
        <StyledAddButton onClick={onClick}>더보기</StyledAddButton>
      </StyledAddButtonBox>
    );
  }
};

export const AuthButton = (props) => <StyledAuthButton {...props} />;
