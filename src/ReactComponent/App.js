import logo from './logo.svg';
import CssWrap from './commons/CssWrap';
import styleCss from './commons/style.css';

function App() {

  return (
    <CssWrap style={styleCss}>
      <div className="App">
        <header>
          <img src={logo} className="logo" alt="logo" />
              <p style={{color:"blue"}} className="message">
                This is a function based React Component 
                wrapper around a Web Component
              </p>
        </header>
      </div>
    </CssWrap>
  );
}

export default App;
