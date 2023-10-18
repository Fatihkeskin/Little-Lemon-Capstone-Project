import styles from './App.css';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <head>
        <div className="meta-info">

          <meta charset="UTF-8" />
          <meta name="title" content="Little Lemon" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="language" content="english" />
          <meta
            name="description"
            content="Little Lemon Restaurant Booking Table"
          />
          <meta name="author" content="Fatih Keskin" />
          <meta name="copyright" content="Copyright 2023" />
          <meta name="format-detection" content="telephone=yes" />
          <meta name="HandheldFriendly" content="true" />
          <meta name="theme-color" content="#000000" />
          <meta name="og:title" content="Little Lemon" />
          <meta name="og:description" content="Order food online!" />
          <meta name="og:image" content="" />
          <link href={styles} rel="stylesheet"></link>

        </div>
      </head>

      <body>
        <nav>
          <Header />
          <Navbar />
        </nav>

        <main>
          <Main />
        </main>

        <footer>
          <Footer />
        </footer>
      </body>

    </div>
  );
}

export default App;
