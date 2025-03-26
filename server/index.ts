require('dotenv').config()
import express, { Request, Response } from 'express'
import cors from 'cors'
import authRoutes from './routes/authRoutes'
import supabase from './config/db'
import { authenticateToken, authorizeAdmin } from './middleware/authMiddleware'

const app = express()

// Middleware
app.use(express.json())
app.use(cors())

// Routes
app.use('/auth', authRoutes)

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the IT Quiz API')
})

// Get all categories
app.get('/categories', async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase.from('categories').select('*')
    if (error) throw error
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: (error as Error).message })
  }
})

// 🔹 GET all questions
app.get('/questions', async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase.from('questions').select('*')
    if (error) throw error
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: (error as Error).message })
  }
})

// 🔹 GET questions by category
app.get('/questions/:categoryId', async (req: Request, res: Response) => {
  const { categoryId } = req.params
  try {
    const { data, error } = await supabase
      .from('questions')
      .select('*')
      .eq('category_id', categoryId)
    if (error) throw error
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: (error as Error).message })
  }
})

// 🔹 GET answers for a specific question
app.get('/answers/:questionId', async (req: Request, res: Response) => {
  const { questionId } = req.params
  try {
    const { data, error } = await supabase.from('answers').select('*').eq('question_id', questionId)
    if (error) throw error
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: (error as Error).message })
  }
})

// 🔹 POST a new question (Admin only)
app.post(
  '/questions',
  authenticateToken,
  authorizeAdmin,
  async (req: Request, res: Response): Promise<void> => {
    const { text, category_id } = req.body
    if (!text || !category_id) {
      res.status(400).json({ error: 'Text and category_id are required' })
      return
    }
    try {
      const { data, error } = await supabase
        .from('questions')
        .insert([{ text, category_id }])
        .select()
      if (error) throw error
      res.status(201).json(data)
    } catch (error) {
      res.status(500).json({ error: (error as Error).message })
    }
  }
)

// 🔹 POST answers for a question (Admin only)
app.post(
  '/answers',
  authenticateToken,
  authorizeAdmin,
  async (req: Request, res: Response): Promise<void> => {
    const { question_id, answers } = req.body

    if (!question_id || !Array.isArray(answers) || answers.length < 2) {
      res.status(400).json({ error: 'Invalid question_id or answers format' })
      return
    }

    try {
      const { data, error } = await supabase.from('answers').insert(
        answers.map(answer => ({
          question_id,
          text: answer.text,
          is_correct: answer.is_correct,
        }))
      )
      if (error) throw error
      res.status(201).json(data)
    } catch (error) {
      res.status(500).json({ error: (error as Error).message })
    }
  }
)

// Start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
