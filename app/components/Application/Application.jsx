import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import BodyClassName from 'react-body-classname';

import classNames from 'Config/css/_class-names.scss';

import WithBemHelper     from 'CommonComponents/WithBemHelper';
import LayoutHmmf        from 'CommonComponents/LayoutHmmf';

import NotesExplorer  from 'Components/NotesExplorer';
import Header         from 'Components/Header';
import Menu           from 'Components/Menu';
import Footer         from 'Components/Footer';

class Application extends WithBemHelper{
  render(){
    return (
      <BodyClassName {...this.classes()}>
        <Router>
          <LayoutHmmf
            klassName = {classNames.layoutHmmf}
            header = {<Header klassName={classNames.header}/>}
            menu = {<Menu klassName={classNames.menu}/>}
            main =
            {
              <Switch>
                <Route exact path="/" render={() => <Redirect to="/note"/>} />
                <Route path="/note/:id?" render={() => (
                  <NotesExplorer
                    klassName = {classNames.notesExplorer}
                  />
                )}/>
              </Switch>
            }
            footer = {<Footer klassName={classNames.footer}/>}
          />
        </Router>
      </BodyClassName>
    );
  }
}

export default Application;

