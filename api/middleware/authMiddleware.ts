import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express'

interface AuthRequest extends Request {
  user?: User;
}

export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction): void => {
  const token = req.header('Authorization')?.split(' ')[1] // Extract token from "Bearer <token>"
  if (!token) {
    res.status(401).json({ error: 'Access denied' })
    return
  }

  jwt.verify(token, process.env.JWT_SECRET as string, (err: Error | null, decoded: unknown) => {

    if (err) {
      res.status(403).json({ error: 'Invalid token' })
      return
    }

    req.user = decoded as User // Attach the user to req.user
    next() // Proceed to the next middleware or route handler
  })
}

// 🔹 Admin-only middleware
export const authorizeAdmin = (req: AuthRequest, res: Response, next: NextFunction): void => {
  if (!req.user || req.user.role !== 'admin') {
    res.status(403).json({ error: 'Admin access required' })
    return
  }
  next() // Proceed to the next middleware or route handler
}
