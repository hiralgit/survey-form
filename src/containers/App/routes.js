import * as React from 'react';
import { Switch, Route } from "react-router";
import SurveyPage from '../SurveyPage';
import LandingPage from '../LandingPage';

export default () => (
  <Switch>
    <Route exact path="/" component={LandingPage}></Route>
    <Route path="/survey" component={SurveyPage}></Route>
    <Route path="/thanks" render={() => (<div><h1>Thank you for completing the survey</h1></div>)} ></Route>
  </Switch>
);
