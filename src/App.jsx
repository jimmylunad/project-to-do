import { useState } from 'react';
import TopBar from './components/TopBar';
import Home from './pages/Home';

const App = () => {
  const [action, setAction] = useState(true);

  const handleActive = () => {
    setAction(!action);
  };

  return (
    <div>
      <TopBar action={handleActive} trash={action} />
      <Home action={action} />
    </div>
  );
};

export default App;
