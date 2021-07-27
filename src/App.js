import './App.css';
import {Route, Switch} from "react-router-dom";
import Main from './pages/main.js';
import Currencies from './pages/currencies.js';
import Price from './pages/price.js';
import Nav from './components/nav.js'


function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/currencies">
          <Currencies />
        </Route>
        <Route
          path="/price/:symbol"
          render={(routerProps) => {
            return <Price {...routerProps} />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
