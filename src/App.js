import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import RestaurantCreate from './components/RestaurantCreate';
import RestaurantDetail from './components/RestaurantDetail';
import RestaurantList from './components/RestaurantList';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantUpdate from './components/RestaurantUpdate';
import Login from './components/Login';
import Logout from './components/Logout';
import Protected from './components/Protected';
import Register from './components/Register';

function App() {
  {
    document.title = 'Welcome to Resto!';
  }
  return (
    <div className="App">
      <Router>
        <Route path="/login" render={(props) => <Login {...props} />}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Protected exact path="/list" component={RestaurantList} />
        <Protected exact path="/create" component={RestaurantCreate} />
        <Protected exact path="/details" component={RestaurantDetail} />
        <Protected exact path="/search" component={RestaurantSearch} />
        <Protected exact path="/update/:id" component={RestaurantUpdate} />
        <Protected exact path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
