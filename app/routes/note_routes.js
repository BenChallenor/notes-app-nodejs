var ObjectID = require("mongodb").ObjectID

module.exports = function(app, db) {

  app.get("/notes/:id", function(req, res) {
    const id = req.params.id;
    const details = {"_id": new ObjectID(id) };
    db.collection('notes').findOne(details, function(err, item) {
      if (err) {
        res.send({
          'error': 'An error has occured'
        });
      } else {
        res.send(item);
      }
    });
  });

  app.delete("/notes/:id", function(req, res) {
    const id = req.params.id;
    const details = {"_id": new ObjectID(id) };
    db.collection('notes').remove(details, function(err, item) {
      if (err) {
        res.send({
          'error': 'An error has occured'
        });
      } else {
        res.send("Note " + id + " deleted");
      }
    });
  });

  app.put("/notes/:id", function(req, res) {
    const id = req.params.id;
    const details = {"_id": new ObjectID(id) };
    const note = { text: req.body.body, title: req.body.title };
    db.collection('notes').update(details, note, function(err, item) {
      if (err) {
        res.send({
          'error': 'An error has occured'
        });
      } else {
        res.send(item);
      }
    });
  });

  app.post('/notes', function(req, res) {
    // // note cteated here
    // console.log(req.body)
    // res.send("Hello World")
    // // the callback
    const note = { text: req.body.body, title: req.body.title };
    db.collection('notes').insert(note, function(err, result) {
      if (err) {
        res.send({
          'error': 'An error has occured'
        });
      } else {
        res.send(result.ops[0]);
      }
    });
  });

}
