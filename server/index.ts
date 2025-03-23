require('dotenv').config()
import express from 'express'
import cors from 'cors'
import authRoutes from './routes/authRoutes'
import { authenticateToken } from './middleware/authMiddleware'
import pool from './config/db' // Import the database pool

const app = express()

// Middleware
app.use(express.json())
app.use(cors())

// Routes
app.use('/auth', authRoutes)
// Add other routes similarly

// Function to create tables if they don't exist
const createTables = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS categories (
      id SERIAL PRIMARY KEY,
      name VARCHAR(50) UNIQUE NOT NULL
    );

    CREATE TABLE IF NOT EXISTS questions (
      id SERIAL PRIMARY KEY,
      text TEXT NOT NULL,
      category_id INT REFERENCES categories(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS answers (
      id SERIAL PRIMARY KEY,
      question_id INT REFERENCES questions(id) ON DELETE CASCADE,
      text TEXT NOT NULL,
      is_correct BOOLEAN NOT NULL
    );
  `

  try {
    await pool.query(query)
    console.log('✅ Database tables created successfully!')
  } catch (error) {
    console.error('❌ Error creating tables:', error)
  }
}

// Start server after creating tables
createTables().then(() => {
  const PORT = process.env.PORT || 5000
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
})
