import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Home, CreatePost } from './pages/index'
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Link to="/">Home</Link> <br />
        <Link to="/create-post">Add Post</Link>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/create-post" exact>
            <CreatePost />
          </Route>
          <Route path="/" exact>

          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
