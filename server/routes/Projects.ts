import { Router } from "express";

import { projects, add } from "../controllers/ProjectsController";

const router = Router();

router.post("/", projects);
router.post("/add", add);

export default router;
