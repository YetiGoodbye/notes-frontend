import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener("DOMContentLoaded", () => {
  const approot = document.createElement('div');
  document.body.appendChild(approot);

  ReactDOM.render(
    (
      <p>hello</p>
    ),
    approot
  );
});
