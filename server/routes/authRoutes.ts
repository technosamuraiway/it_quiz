// server/routes/authRoutes.ts
import express, { Request, Response } from 'express' // Importing express along with types
import { login } from '../controllers/authController.js'

const router = express.Router()

// Define the POST route for login, properly typing `req` and `res`
router.post('/login', async (req: Request, res: Response) => {
  try {
    await login(req, res) // Call the `login` function from the controller
  } catch (err) {
    res.status(500).json({ error: 'Server error', err }) // Handle any errors properly
  }
})

export default router
