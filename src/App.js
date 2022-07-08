import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, ErrorPage } from './pages'
import { Navbar, Sidebar } from './components'
function App() {
 return (
  <Router>
   <Navbar />
   <Sidebar />
   <Switch>
    <Route exact path="/"><Home/></Route>
    <Route exact path="/"></Route>
    <Route exact path="/"></Route>
    <Route path="*">
     <ErrorPage />
    </Route>
   </Switch>
  </Router>
 )
}

export default App
