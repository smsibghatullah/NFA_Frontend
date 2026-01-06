import { verifyToken } from '../../lib/auth';

export default function handler(req, res) {
  verifyToken(req, res, () => {
    res.status(200).json({ message: 'Welcome to the protected route!', user: req.user });
  });
}
