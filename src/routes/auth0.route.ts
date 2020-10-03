import { Router } from 'express';

import { getUsers } from '../controllers/auth0.controller';

const router: Router = Router()

router.get('/users', getUsers);

export default router;
