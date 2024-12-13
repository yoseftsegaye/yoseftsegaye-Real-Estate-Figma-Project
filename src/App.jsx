import Footer from './components/Footer';
import Home from './components/Home';
import Information from './components/Information';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Resources from './components/Resources';
import Search from './components/Search';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Information />
      <Resources />
      <Subscribe />
      <Search />
      <Layout />
      <Footer />
    </div>
  );
}

export default App;