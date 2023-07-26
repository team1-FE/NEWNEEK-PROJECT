import { styled } from "styled-components";

const StCardBox = styled.div`
  width: 300px;
  padding-bottom: 30px;
  border-right: 1px solid #333;
  border-bottom: 1px solid #333;
  display: flex;
  flex-direction: column;
  &:hover {
    background: #fff;
    img {
      filter: grayscale(0);
    }
  }
`;

const StCardImg = styled.img`
  width: 300px;
  height: 250px;
  margin-bottom: 16px;
  border-bottom: 1px solid #333;
  background: rgb(211, 211, 211);
  object-fit: cover;
  filter: grayscale(1);
`;

const StCardText = styled.span`
  width: 300px;
  margin: 8px 24px;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  span {
    font-size: 0.9rem;
    margin-left: 12px;
  }
`;

/**
 * @param {string} title card 제목
 * @param {string} src card 이미지 주소
 * @param {string} date 게시글 날짜
 */

const Card = ({ title, src, date }) => {
  return (
    <StCardBox>
      <StCardImg src={src} />
      <StCardText size="1.2rem" weight="650">
        {title}
      </StCardText>
      <StCardText size="0.9rem" weight="500">
        {date} <span>사회</span>
      </StCardText>
    </StCardBox>
  );
};

export default Card;
