import { Router } from 'express';

import { checkUser } from '../controllers/insta.controller';

const router: Router = Router();

router.post('/check', checkUser);

export default router;