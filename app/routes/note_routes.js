module.exports = function(app, db) {

  app.post('/notes', function(req, res) {
    // note cteated here
    console.log(req.body)
    res.send("Hello World")
    // the callback
  })

}
