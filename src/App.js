//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Container from './components/Container'
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header title="Galería de imágenes en React" />
      <Container />
      <Footer textFooter="Todos los derechos reservados." />
    </div>   
  );
}

export default App;
