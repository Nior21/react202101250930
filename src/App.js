import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import firstImg from './assets/bg1.jpg';
import secondImg from './assets/bg3.jpg';

const App = () => {
  return (
      <>
        <Header
            title="This is a new Title"
            desc="This is Description!"
        />
        <Layout urlBg={firstImg} title="This is the first Layout" desc="This is Description">
            <p>Some text here...</p>
            <p>Some text here...</p>
            <p>Some text here...</p>
            <p>Some text here...</p>
        </Layout>
        <Layout colorBg="gray" title="This is the second Layout" desc="This is Description" />
        <Layout urlBg={secondImg} title="This is the third Layout" desc="This is Description" />
        <Footer />
      </>);
}

export default App;