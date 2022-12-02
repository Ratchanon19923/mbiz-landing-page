import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Content from "./components/Content/Content";
import Insight from "./components/Insight/Insight";
import Build from "./components/Build/Build";
import Partners from "./components/Partners/Partners";
import FAQS from "./components/FAQS/FAQS";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Content />
      <Insight />
      <Build />
      <Partners />
      <FAQS />
      <Footer />
    </>
  );
}

export default App;