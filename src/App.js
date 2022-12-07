import { useEffect, useState } from 'react';
import './App.css';
import DashBoard from './pages/DashBoard/Dashboard';
import LoginPage from './pages/LoginPage';

function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleSize);
    handleSize();
    return () => window.removeEventListener('resize', handleSize);
  }, []);
  useEffect(() => {
    if (windowSize > 739) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [windowSize]);

  return (
    <div>
      {/* <LoginPage isMobile={isMobile} /> */}
      <DashBoard isMobile={isMobile} />
    </div>
  );
}

export default App;
