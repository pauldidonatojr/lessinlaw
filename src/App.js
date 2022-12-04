import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, ErrorPage } from './pages/Index'
import { Navbar, Sidebar, SearchBar, Footer } from './components'
import React from 'react'
function App() {
 return (
  <Router>
   <Navbar />
   <Sidebar />
   <SearchBar />
   <Switch>
    <Route exact path="/">
     <Home />
    </Route>
    <Route exact path="/"></Route>
    <Route exact path="/"></Route>
    <Route path="*">
     <ErrorPage />
    </Route>
   </Switch>
   <Footer />
  </Router>
 )
}

export default App
