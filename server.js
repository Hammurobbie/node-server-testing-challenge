const express = require("express");

const cors = require("cors");

const schemesModel = require("./schemesModel");

const server = express();

server.use(express.json());

server.use(cors());

server.post("/schemes", (req, res) => {
  schemesModel
    .add(req.body)
    .then(schm => {
      res.status(200).json({ message: "The scheme was successfully created" });
    })
    .catch(() => {
      res
        .status(404)
        .json({ message: "There was a problem creating the scheme." });
    });
});

server.get("/schemes", (req, res) => {
  schemesModel
    .find()
    .then(schm => {
      res.status(200).json(schm);
    })
    .catch(() => {
      res
        .status(404)
        .json({ message: "There was a problem retrieving the schemes." });
    });
});

server.put("/schemes/:id", (req, res) => {
  schemesModel
    .findById(req.params.id)
    .then(pro => {
      if (pro) {
        schemesModel
          .update(req.body, req.params.id)
          .then(newPro => res.json(newPro));
      }
    })
    .catch(err => {
      res.status(500).json({ message: "The resource could not be updated" });
      console.log(err.message);
    });
});

server.delete("/schemes/:id", (req, res) => {
  schemesModel
    .remove(req.params.id)
    .then(schm => {
      res.status(200).json({ message: "The scheme was successfully deleted" });
    })
    .catch(() => {
      res
        .status(404)
        .json({ message: "There was a problem deleting the scheme." });
    });
});

module.exports = server;
