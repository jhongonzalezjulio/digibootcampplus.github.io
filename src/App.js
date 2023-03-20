import './App.css';
import Menu from './components/Menu.js';
import Boton from './components/Boton.js';
import Section01 from './components/Section01.js';
import Section02 from './components/Section02.js';
import Section03 from './components/Section03.js';
import Section04 from './components/Section04.js';
import Section05 from './components/Section05.js';
import Section06 from './components/Section06.js';
import Section07 from './components/Section07.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu className='contmenu' />
        <Boton />
      </header>
      <div className='App-cuerpo'>
        <Section01 />
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
        <Section06 />
        <Section07 />
      </div>
    </div>
  );
}

export default App;
