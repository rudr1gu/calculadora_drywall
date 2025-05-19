import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <Layout />
      <Footer />
    </div>
  );
}

export default App;