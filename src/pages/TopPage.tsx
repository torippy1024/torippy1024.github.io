import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const TopPage = () => {
  return  (
      <div data-theme="light" className="flex flex-col min-h-screen">
      <Header />
      <div className="grow container mx-auto my-5">
        TopPage
      </div>
      <Footer />
    </div>
  );
};

export default TopPage;