import express from 'express';
import { newUser } from '../Controllers/user.js';
const router = express.Router();
router.post('/new', newUser);
export default router;
