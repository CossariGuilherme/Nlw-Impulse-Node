import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuthenticaded } from "./middleware/ensureAuthenticated";
import { GetLast3MessagesServices } from "./services/GetLast3MessagesServices";
import { ProfileUserServices } from "./services/ProfileUserServices";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post(
  "/messages",
  ensureAuthenticaded,
  new CreateMessageController().handle
);

router.get("/messages/last3", new GetLast3MessagesController().handle);

router.get("/profile", ensureAuthenticaded, new ProfileUserController().handle);

export { router };
