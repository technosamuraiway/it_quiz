import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { Request, Response } from 'express'
import { getUserByUsername } from '../models/userModel.js'

export const login = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body

  try {
    const user: User | null = await getUserByUsername(username)

    if (!user) return res.status(400).json({ error: 'Invalid credentials' })
    if (!user.password) return res.status(400).json({ error: 'Password is missing' })
    if (!user.is_admin) return res.status(403).json({ error: 'Access denied' }) // Only allow admin login

    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) return res.status(400).json({ error: 'Invalid credentials' })

    const token = jwt.sign(
      { id: user.id, username: user.username, is_admin: user.is_admin },
      process.env.JWT_SECRET as string,
      { expiresIn: '1h' }
    )

    return res.json({ token })
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error', err })
  }
}
