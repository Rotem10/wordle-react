import './App.scss';
import { Board } from './components/Board';
import { Keyboard } from './components/Keyboard';
import { Header } from './components/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Board />
        <Keyboard />
      </main>
    </div>
  );
}

export default App;
