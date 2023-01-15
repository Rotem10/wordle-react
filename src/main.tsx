import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.scss';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import { Welcome } from './pages/Welcome';
import { NavBar } from './components/NavBar';
import { HelpModal } from './components/HelpModal';
import { UserFormModal } from './components/UserFormModal';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <NavBar />
        <HelpModal />
        <UserFormModal />
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/app' element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
