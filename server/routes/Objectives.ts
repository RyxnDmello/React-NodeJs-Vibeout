import { Router } from "express";

import { add } from "../controllers/ObjectivesController";

const router: Router = Router();

router.post("/add", add);

export default router;
