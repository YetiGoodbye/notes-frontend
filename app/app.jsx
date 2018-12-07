import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import $ from 'jquery';

import createStore from 'Config/store';
import Application from 'Components/Application';
import classNames from 'Config/css/_class-names.scss';

import './app.scss';

document.addEventListener("DOMContentLoaded", () => {

  const root = document.createElement('div');
  root.className = classNames.root;
  document.body.appendChild(root);

  ReactDOM.render(
    (
      <Provider store={createStore()}>
        <Application klassName={classNames.application}/>
      </Provider>
    ),
    root
  );
});
