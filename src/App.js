import './App.css';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <head>
        <Header />
      </head>

      <body>
        <nav>
          <Navbar />
        </nav>

        <main>
          <Main />
        </main>

        <footer>
          <Footer/>
        </footer>
      </body>

    </div>
  );
}

export default App;
