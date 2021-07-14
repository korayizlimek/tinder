import "./App.css";
import Header from "./components/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Cards from "./components/Cards";
import CardDetail from "./components/CardDetail";
import Chats from "./components/Chats";
import ChatScreen from "./components/ChatScreen";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Header />
                        <Cards />
                    </Route>
                    <Route exact path="/chat">
                        <Header backButton="/" />
                        <Chats />
                    </Route>
                    <Route exact path="/chat/:person">
                        <Header backButton="/chat" />
                        <ChatScreen />
                    </Route>
                    <Route exact path="/detail/:character">
                        <Header backButton="/" />
                        <CardDetail />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
