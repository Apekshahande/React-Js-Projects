import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
  <>
    <h1>Netflix 5 Series</h1>
    <p>Here the list of my fav 5 Netflix Series</p>
    <ol>
      <li>Dark</li>
      <li>Extra Curricular</li>
      <li>My Holo Love</li>
      <li>My First-2 love</li>
      <li>Mr Robot</li>
    </ol>
  </>,
  // it's excepting one single element.

  document.getElementById("root")
)