import express from "express"
import cors from "cors"
import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter, matchPath } from "react-router-dom"
import serialize from "serialize-javascript"  //con este, es posible actualizar aquí la propriedad data que empieza desde App.js , que luego va en el hydrate del index.js del browser
import App from '../shared/App'

const app = express()

app.use(cors())
app.use(express.static("public"))

app.get("*", (req, res, next) => {
  const name = 'Juan';
  const name2 = 'Sara';
  const markup = renderToString(
    <App data={name} data2 = {name2} />
  )

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with RR</title>
      </head>

      <body>
        <h1>React Server Side Rendering 1<h1>
        <div id="app">${markup}</div>
        <script src="/bundle.js" defer></script>
        <script>window.__INITIAL_DATA__ = ${serialize(name)}</script>
        <script>window.__INITIAL_DATA2__ = ${serialize(name2)}</script>
      </body>
    </html>
  `)
})


app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})
