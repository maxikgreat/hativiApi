import { Router } from 'express'
import { authorize } from '../controllers/auth0.controller';

const router: Router = Router()

router.get('/authorize', authorize);

export default router;
