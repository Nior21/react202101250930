import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import firstImg from './accert/bg3.jpg';
import secondImg from './accert/bg2.jpg';

const App = () => {
  return (
      <>
        <Header
            title="This is new Title"
            desc="This is Description!"
        />
        <Layout urlBg={firstImg} />
        <Layout colorBg="gray" />
        <Layout urlBg={secondImg} />
        <Footer />
      </>);
}

export default App;