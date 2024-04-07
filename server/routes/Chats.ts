import { Router } from "express";

import { chats } from "../controllers/ChatsController";

export const router = Router();

router.get("/", chats);

export default router;
