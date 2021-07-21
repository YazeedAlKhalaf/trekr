import express, { Application } from "express";

class App {
  public app: Application;
  public port: number;

  constructor(appInit: {
    port: number;
    middlewares: Array<any>;
    controllers: Array<any>;
  }) {
    this.app = express();
    this.port = appInit.port;

    this.app.use(express.static(`${__dirname}/../static`));

    this.middlewares(appInit.middlewares);
    this.routes(appInit.controllers);
  }

  public listen() {
    const _port = process.env.PORT || this.port;
    this.app.listen(_port, () => {
      console.log(`App going to the moon 🚀 on http://localhost:${_port}`);
    });
  }

  private middlewares(middlewares: Array<any>) {
    middlewares.forEach((middleware) => {
      this.app.use(middleware);
    });
  }

  private routes(controllers: Array<any>) {
    controllers.forEach((controller: any) => {
      this.app.use(controller.path, controller.router);
    });
  }
}

export default App;
