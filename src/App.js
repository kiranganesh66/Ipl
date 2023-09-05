import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import './App.css'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/team-matches/:id" component={TeamMatches} />
      <Route exact component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
