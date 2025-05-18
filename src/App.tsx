import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';


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