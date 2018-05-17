import React from 'react'
import { hydrate } from 'react-dom'
import App from '../shared/App'
import { BrowserRouter } from 'react-router-dom'

hydrate(
  <BrowserRouter>
    <App data={window.__INITIAL_DATA__} data2={window.__INITIAL_DATA2__} />
  </BrowserRouter>,
  document.getElementById('app')
);


//for data={window.__INITIAL_DATA__} v. browser/index.js
 // What .hydrate is going to do is it tells React that you’ve already created the markup on the server and instead of recreating it on the client, it should preserve it and just attach any needed event handlers to the existing server rendered markup.

// At this point, assuming you’ve already run npm run start in your terminal, when you visit localhost:3000 you should see the page. The page was initially rendered on the server, then when it got to the client and the bundle.js file loaded, React took over.
