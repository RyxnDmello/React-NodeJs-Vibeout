import { Router } from "express";

import { create } from "../controllers/AccountController";

const router: Router = Router();

router.post("/create", create);
router.post("/login", create);

export default router;
