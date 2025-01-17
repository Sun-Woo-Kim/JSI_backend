import { Router } from "express";
const router = Router();

import {
  findAll,
  findOneByTodoid,
  create,
  updateByTodoid,
  deleteByTodoid
} from "../models/todo";

// Find All
router.get("/", (req, res) => {
  findAll()
    .then(todos => {
      if (!todos.length) return res.status(404).send({ err: "Todo not found" });
      res.send(`find successfully: ${todos}`);
    })
    .catch(err => res.status(500).send(err));
});

// Find One by todoid
router.get("/todoid/:todoid", (req, res) => {
  findOneByTodoid(req.params.todoid)
    .then(todo => {
      if (!todo) return res.status(404).send({ err: "Todo not found" });
      res.send(`findOne successfully: ${todo}`);
    })
    .catch(err => res.status(500).send(err));
});

// Create new todo document
router.post("/", (req, res) => {
  create(req.body)
    .then(todo => res.send(todo))
    .catch(err => res.status(500).send(err));
});

// Update by todoid
router.put("/todoid/:todoid", (req, res) => {
  updateByTodoid(req.params.todoid, req.body)
    .then(todo => res.send(todo))
    .catch(err => res.status(500).send(err));
});

// Delete by todoid
router.delete("/todoid/:todoid", (req, res) => {
  deleteByTodoid(req.params.todoid)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err));
});

module.exports = router;
