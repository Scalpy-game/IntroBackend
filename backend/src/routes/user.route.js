import { Router } from 'express';
import { loginUser, logoutuser, registerUSer } from '../controllers/user.controller.js';

const router = Router();

router.route('/register').post(registerUSer);
router.route('/login').post(loginUser);
router.route('/logout').post(logoutuser);

export default router;