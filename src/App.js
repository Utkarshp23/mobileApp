import { Switch ,BrowserRouter as Router, Route} from "react-router-dom";
import ConnectBtn from "./components/ConnectBtn";
import PopUpForm from "./components/PopUpForm";
import WifiLoader from "./components/WifiLoader";
import ConnectedWindow from "./components/ConnectedWindow";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <ConnectBtn />
          </Route>
          <Route path="/ipform">
            <PopUpForm />
          </Route>
          <Route path="/wifiloader">
            <WifiLoader />
          </Route>
          <Route path="/connectedWindow">
            <ConnectedWindow />
          </Route>
        </Switch>

      </div>
    </Router>

  );
}

export default App;
