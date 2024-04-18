import { Router } from "express";

import { add, complete, remove } from "../controllers/ObjectivesController";

const router: Router = Router();

router.post("/add", add);
router.post("/complete", complete);
router.post("/delete", remove);

export default router;
