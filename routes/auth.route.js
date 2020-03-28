import express from 'express';
import { auth } from '../controllers';

const router = express.Router();

router.get('/login', auth.login);
router.post('/logout', auth.logout);
router.get('/register', auth.register);

export default router;
