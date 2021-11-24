import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import TopButton from './components/Button/TopButton';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <TopButton />
    </BrowserRouter>
  );
}
