import express from "express"
import { Login, logOut, Me, Signup } from "../controllers/Auth.js"

const router = express.Router();

router.get('/me', Me);
router.post('/signup', Signup);
router.post('/login', Login);
router.delete('/logout', logOut);

export default router;