import { Router } from "express";
import { getMe, login, register } from "../controllers/auth.js";
import { checkAuth } from "../middleware/checkAuth.js";

const router = new Router();

router.post("/login", login);

router.post("/register", register);

router.get("/me", checkAuth, getMe);

export default router;
