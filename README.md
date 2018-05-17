# React Server Side Rendering starter kit
Tutorial: https://tylermcginnis.com/react-router-server-rendering/
Tutorial (video): https://www.youtube.com/watch?v=mZEv4mHsU5E&t=1056s

#Tools: Babel, Nodemon, Webpack, React, webpack-node-externals, Node, serialize-javascript;

What happens:
1. A user types your URL into their web browser and hits enter.
2. Your server sees there is a GET request for the path ”/“.
3. It renders your app’s main component and wraps it inside of a standard HTML doc (DOCTYPE, html, head, body, etc) and sends the whole thing back as a response.
4. The browser sees it got an HTML document back from the server and its rendering engine goes to work. It soon finishes rendering the page.
5. At this point, the page is viewable and the browser starts downloading any scripts.
6. Once the scripts are downloaded, React takes over and the page is interactive.


What we need:
1. A React component - even just a basic one that renders “Hello World” for now.
2. A server which spits back our basic React component after it’s wrapped it in some HTML structure.
3. A React app which is going to pick up from where the server rendered HTML left off and add in any event listeners to the existing markup where needed.


webpack -w will watch our code and recompile when it when it changes and nodemon server.js will re-start our server whenever our server code changes.

Procedures:
1. Install all dependencies: npm install;
2. run: npm starts;
3. Connect to localhost:3000 to see the page
