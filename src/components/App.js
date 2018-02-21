import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Home from './Home';
import ExampleComponent from './ExampleComponent';
import PageNotFound from './PageNotFound';
import Breadcrumbs from './Breadcrumbs';
import s from '../styles/app.style';


export default function App() {
  return (

    <div style={s.root}>

    <nav style={s.breadcrumbs}>
        <Breadcrumbs />
      </nav>
      <h1 style={s.title}>A place for my projects to live</h1>
      <Interactive
        as="a"
        href="https://github.com/eghan/SPA_eghan_info"
        style={s.repoLink}
        {...s.link}
      >https://github.com/eghan/SPA_eghan_info</Interactive>


      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/example" component={ExampleComponent} />
        <Route component={PageNotFound} />
      </Switch>

      <div style={s.creditLine}>
        <Interactive
          as="a"
          href="http://www.rafaelpedicini.com"
          interactiveChild
          focus={{}}
          touchActive={{}}
          touchActiveTapOnly
        >
        </Interactive>
      </div>
    </div>
  );
}
