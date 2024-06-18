import { Router } from "express";

import { add, complete, remove } from "../controllers/ObjectivesController";

const router: Router = Router();

router.post("/add", add);
router.post("/complete", complete);
router.delete("/delete", remove);

export default router;
