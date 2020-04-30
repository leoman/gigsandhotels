import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Title } from './styles';
import Search from './views/Search';
import Gig from './views/Gig';
import Gigs from './views/Gigs';

const App = () => (
  <>
    <Container>
      <Title>GigsAndHotels</Title>
      <Router>
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/gig" exact component={Gig} />
          <Route path="/gigs" exact component={Gigs} />
        </Switch>
      </Router>
    </Container>
  </>
);

export default App;
