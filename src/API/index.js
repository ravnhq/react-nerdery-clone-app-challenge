import { create, router, defaults } from "json-server";
import {} from "express";
/* eslint-disable @typescript-eslint/no-var-requires, no-undef */
const places = require("./places.json");
const users = require("./users.json");

const app = create();
const ownRouter = router({
  places,
  users,
});

const middlewares = defaults();

const port = process.env.PORT || 3000;

// /!\ Bind the router db to the app
app.db = router.db;

// You must apply the auth middleware before the router
app.use(middlewares);
app.use(auth);
app.use(ownRouter);
app.listen(port, () => {
  console.log("App started on", port);
});
