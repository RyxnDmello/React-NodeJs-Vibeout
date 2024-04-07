import { Router } from "express";

import { projects } from "../controllers/ProjectsController";

const router = Router();

router.post("/", projects);

export default router;
