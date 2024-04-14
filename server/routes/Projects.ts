import { Router } from "express";

import { projects, create } from "../controllers/ProjectsController";

const router: Router = Router();

router.post("/", projects);
router.post("/create", create);

export default router;
