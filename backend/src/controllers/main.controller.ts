import { Request, Response, Router } from "express";
import path from "path";

class MainController {
  public path: string = "/";
  public router: Router = Router();

  constructor() {
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get("/discover", this.discover);
  }

  private async discover(req: Request, res: Response) {
    try {
      return res.status(200).sendFile(path.join(__dirname, "..", "resources", "discover.json"));
    } catch (exception) {
      console.error(
        `MainController => discover() => Exception: ${exception}`
      );

      return res.status(500).end();
    }
  }
}

export default MainController;
