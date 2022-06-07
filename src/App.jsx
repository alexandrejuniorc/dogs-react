import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Login } from './components/login/Login';
import { UserStorage } from './hooks/userContext';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
};

export default App;
