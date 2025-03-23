import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { getUserByUsername } from '../models/userModel'
import { Request, Response } from 'express'
import { User } from '../custom'

export const login = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body
  const { rows } = await getUserByUsername(username)

  if (rows.length === 0) return res.status(400).json({ error: 'Invalid credentials' })

  const user: User = rows[0] // Cast rows[0] as User

  if (!user.password) return res.status(400).json({ error: 'Password is missing' }) // Check if password exists

  const validPassword = await bcrypt.compare(password, user.password)
  if (!validPassword) return res.status(400).json({ error: 'Invalid credentials' })

  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET as string,
    { expiresIn: '1h' }
  )
  return res.json({ token })
}
