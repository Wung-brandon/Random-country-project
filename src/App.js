import { Header, Footer, MainCard } from './components';
import './App.css';
import { useState } from 'react';


function App() {
  const [isDark, setDark] = useState(false)

  function toggleBackground(){
    setDark(prevDark => !prevDark)
  }
  
  return (
    <div className={`App ${isDark ? "dark" : ""}`}>
      <Header isDark={isDark}/>
      <MainCard isDark={isDark} toggle={toggleBackground}/>

      <Footer isDark={isDark}/>

    </div>
  );
}

export default App;
