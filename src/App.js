import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

const firstImg = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e4337cf5-3f3b-4436-b045-8aff91da2cac/bg1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210128T174857Z&X-Amz-Expires=86400&X-Amz-Signature=e5e18210846374bce462fb1d9888dbe93ae9104032b25c64ef10c61ab1459ea4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bg1.jpg%22";
const secondImg = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3e62948f-bef9-4af8-b2f6-c0a97abc27a7/bg3.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210128T174907Z&X-Amz-Expires=86400&X-Amz-Signature=5e4f2ac996bffb542b4194c49092c61a34aa6bed53f6f810f55e664d92c2e770&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bg3.jpg%22";

const App = () => {
  return (
      <>
        <Header
            title="This is new Title"
            descr="This is Description!"
        />
        <Layout urlBg={firstImg} />
        <Layout colorBg="gray" />
        <Layout urlBg={secondImg} />
        <Footer />
      </>);
}

export default App;