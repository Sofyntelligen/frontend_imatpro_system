
import { Container } from 'react-bootstrap';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Frontend ImatPro System</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
