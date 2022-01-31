const express = require('express'),
      app = express(),
      port = 3000

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`example role sent at port ${port}.`)
})