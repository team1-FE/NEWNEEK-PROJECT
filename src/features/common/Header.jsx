import styled from "styled-components";
import { Link } from "react-router-dom";
import navLogo from "../../assets/logo.png";
import { UserOutlined, SearchOutlined } from "@ant-design/icons";

const HeaderCol = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StHeaderNav = styled.nav`
  position: relative;
  width: 100%;
  padding: 2.5rem;
  box-sizing: border-box;
  border-bottom: 1px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;

  #nav-logo {
    width: 240px;
    height: 34px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  #nav-user {
    position: absolute;
    right: 10%;
    border: 1px solid #333;
    display: flex;
    align-items: center;
    .nav-link {
      width: 50px;
      height: 50px;
      font-size: 1.4rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .nav-link:first-child {
      border-right: 1px solid #333;
    }
  }
`;

const HeaderCatagoryBox = styled.div`
  width: 100%;
  border-bottom: 1px solid #333;
  background: #fff;
  display: flex;
  justify-content: center;
`;

const HeaderCatagoryList = styled.ul`
  display: flex;
`;

const HeaderCatagoryItem = styled.li`
  font-size: 1rem;
  font-weight: 500;
  padding: 20px 10px;
  margin: 0 10px;
  &:hover {
    color: #ff6b00;
  }
`;

const Header = () => {
  return (
    <HeaderCol>
      <HeaderNav />
      <HeaderCatagory />
    </HeaderCol>
  );
};

const HeaderNav = () => {
  return (
    <StHeaderNav>
      {/* 헤더 로고 부분 */}
      <Link id="nav-logo">
        <img src={navLogo} />
      </Link>
      {/* 헤더 유저 및 검색창 버튼 부분 */}
      <div id="nav-user">
        <Link className="nav-link">
          <SearchOutlined />
        </Link>
        <Link className="nav-link">
          <UserOutlined />
        </Link>
      </div>
    </StHeaderNav>
  );
};

const HeaderCatagory = () => {
  const arr = ["태크", "환경", "경제", "연애", "인권", "사회", "문화"];
  return (
    <HeaderCatagoryBox>
      <HeaderCatagoryList>
        {arr.map((item) => (
          <HeaderCatagoryItem>
            <Link to="/">{item}</Link>
          </HeaderCatagoryItem>
        ))}
      </HeaderCatagoryList>
    </HeaderCatagoryBox>
  );
};

export default Header;
