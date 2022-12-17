import './App.scss';
import { Board } from './components/Board';
import { Header } from './components/Header';
import { Keyboard } from './components/Keyboard';

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

// import { useAppState } from './hooks/useAppState';
// import { appContext } from './providers/appContext';
// const useApp = useAppState();
// <appContext.Provider value={useApp}>
//       </appContext.Provider>
