import './App.scss';
import { Board } from './components/Board';
import { Header } from './components/Header';
import { Keyboard } from './components/Keyboard';
import { useAppState } from './hooks/useAppState';
import { appContext } from './providers/appContext';

function App() {
  const useApp = useAppState();

  return (
    <div className='App'>
      <Header />
      <main>
        <appContext.Provider value={useApp}>
          <Board />
          <Keyboard />
        </appContext.Provider>
      </main>
    </div>
  );
}

export default App;
