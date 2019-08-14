import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import SignIn from './SignInForm';
import SignUp from './SignUpForm';
import Category from './Category';
import HirerInfo from './HirerInfo';

const Main = () => {
    return(
        <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/hirer-info" component={HirerInfo}/>
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/automotive" component={Category}/>
              <Route path="/domestic" component={Category} />
              <Route path="/electrical" component={Category} />
              <Route path="/artcraft" component={Category} />
              <Route path="/academic" component={Category} />
            </Switch>
        </main>
    );
};

export default Main;