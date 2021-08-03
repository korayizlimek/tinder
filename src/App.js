import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./components/Profile";
import { Messages, Message, CardDetail, Home } from "./views";
// import CardDetail from "./views/detail/CardDetail";
import "../src/css/index.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/chat">
            <Header backButton="/" />
            <Messages />
          </Route>
          <Route exact path="/chat/:person">
            <Header backButton="/chat" />
            <Message />
          </Route>
          <Route exact path="/detail/:character">
            <Header backButton="/" />
            <CardDetail />
          </Route>
          <Route exact path="/profile">
            <Header />
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
