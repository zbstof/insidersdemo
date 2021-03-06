import React from 'react'
import { Route } from 'react-router-dom'
import SweetHome from './route-home'
import { Grid, Row } from 'react-bootstrap'
import NavigationBar from './NavigationBar'
import About from './route-about'

// TODO: #5 add about page
const App = () => (
  <Grid>
    <Row>
    <NavigationBar/>
    </Row>
      <Route exact path="" component={SweetHome} />
      <Route exact path="/about" component={About} />
  </Grid>
)

export default App
