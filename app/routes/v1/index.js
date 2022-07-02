/* eslint-disable import/no-cycle */
import { Router } from 'express';
import userRoutes from './user';
import blogRoutes from './blog';

const router = Router();

router.get('/', (req, res) => {
  res
    .status(200)
    .json({ status: 'success', code: 200, message: 'We outside!' });
});

router.use('/user', userRoutes);

router.use('/blog', blogRoutes);

export default router;
