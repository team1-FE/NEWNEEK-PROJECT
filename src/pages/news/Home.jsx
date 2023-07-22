import Layout from "../../features/common/Layout";
import Header from "../../features/common/Header/Header";
import HeaderNav from "../../features/common/Header/HeaderNav";
import HeaderCatagory from "../../features/common/Header/HeadeCatagory";
import { NewsItem, NewsList } from "../../features/news/newslist/NewsList";

const Home = () => {
  console.log("hello world");
  return (
    <Layout>
      <Header>
        <HeaderNav />
        <HeaderCatagory />
      </Header>
      <NewsList>
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </NewsList>
    </Layout>
  );
};

export default Home;
