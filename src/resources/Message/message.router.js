import { Router } from 'express';
import { storeContactUsMessage } from './message.controller';

const router = Router();

// api/message
router.route('/message').post(storeContactUsMessage);

// export router
export default router