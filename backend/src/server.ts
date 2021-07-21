import App from "./core/app";
import express from "express";
import MainController from "./controllers/main.controller";

const app = new App({
  port: 3000,
  middlewares: <any>[express.json(), express.urlencoded({ extended: true })],
  controllers: <any>[new MainController()],
});

app.listen();
