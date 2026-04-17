import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: string;
  };
}

export const protectRoute = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

export const isDSW = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (req.user?.role !== 'DSW') {
    return res.status(403).json({ error: 'Access denied: DSW only' });
  }
  next();
};

export const isDirector = (req: AuthRequest, res: Response, next: NextFunction) => {
  const allowedRoles = ['TECHNICAL_DIRECTOR', 'NON_TECHNICAL_DIRECTOR', 'DSW'];
  if (!allowedRoles.includes(req.user?.role || '')) {
    return res.status(403).json({ error: 'Access denied: Directors only' });
  }
  next();
};
