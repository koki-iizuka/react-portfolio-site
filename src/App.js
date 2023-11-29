import './App.css';
// Headerコンポーネントをimportする
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <Skills />
      <Contact />
    </>
  );
}

export default App;

/*import './App.css';
// headerコンポーネントをimportする
import { Header } from './components/Header';

function App() {
  return
  (
    <Header /> //Headerコンポーネントを呼び出す  
  );
}

export default App;*/
