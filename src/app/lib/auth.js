import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export function verifyToken(req, next) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return next({ status: 401, message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return next({ status: 403, message: 'Invalid token' });
  }
}