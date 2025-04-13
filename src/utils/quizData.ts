export type Answer = {
  id: number
  text: string
  isCorrect: boolean
}

export type Question = {
  id: number
  categoryId: number
  text: string
  answers: Answer[]
}

export type Category = {
  id: number
  name: string
}

const categories: Category[] = [
  { id: 1, name: 'HTML' },
  { id: 2, name: 'CSS' },
  { id: 3, name: 'JavaScript' },
  { id: 4, name: 'React' },
  { id: 5, name: 'TypeScript' },
  { id: 6, name: 'QA' },
  { id: 7, name: 'GIT' },
  { id: 8, name: 'Computer Science' },
]

const questions: Question[] = [
  // HTML questions
  ...Array.from({ length: 10 }, (_, i) => ({
    id: 100 + i + 1,
    categoryId: 1,
    text: `HTML Question ${i + 1}`,
    answers: [
      { id: 1 + i * 4, text: 'HTML A', isCorrect: i % 4 === 0 },
      { id: 2 + i * 4, text: 'HTML B', isCorrect: i % 4 === 1 },
      { id: 3 + i * 4, text: 'HTML C', isCorrect: i % 4 === 2 },
      { id: 4 + i * 4, text: 'HTML D', isCorrect: i % 4 === 3 },
    ]
  })),

  // CSS questions
  ...Array.from({ length: 10 }, (_, i) => ({
    id: 200 + i + 1,
    categoryId: 2,
    text: `CSS Question ${i + 1}`,
    answers: [
      { id: 100 + i * 4 + 1, text: 'CSS A', isCorrect: i % 4 === 0 },
      { id: 100 + i * 4 + 2, text: 'CSS B', isCorrect: i % 4 === 1 },
      { id: 100 + i * 4 + 3, text: 'CSS C', isCorrect: i % 4 === 2 },
      { id: 100 + i * 4 + 4, text: 'CSS D', isCorrect: i % 4 === 3 },
    ]
  })),

  // JavaScript questions
  ...Array.from({ length: 10 }, (_, i) => ({
    id: 300 + i + 1,
    categoryId: 3,
    text: `JavaScript Question ${i + 1}`,
    answers: [
      { id: 200 + i * 4 + 1, text: 'JS A', isCorrect: i % 4 === 0 },
      { id: 200 + i * 4 + 2, text: 'JS B', isCorrect: i % 4 === 1 },
      { id: 200 + i * 4 + 3, text: 'JS C', isCorrect: i % 4 === 2 },
      { id: 200 + i * 4 + 4, text: 'JS D', isCorrect: i % 4 === 3 },
    ]
  })),

  // React questions
  ...Array.from({ length: 10 }, (_, i) => ({
    id: 400 + i + 1,
    categoryId: 4,
    text: `React Question ${i + 1}`,
    answers: [
      { id: 300 + i * 4 + 1, text: 'React A', isCorrect: i % 4 === 0 },
      { id: 300 + i * 4 + 2, text: 'React B', isCorrect: i % 4 === 1 },
      { id: 300 + i * 4 + 3, text: 'React C', isCorrect: i % 4 === 2 },
      { id: 300 + i * 4 + 4, text: 'React D', isCorrect: i % 4 === 3 },
    ]
  })),

  // TypeScript questions
  ...Array.from({ length: 10 }, (_, i) => ({
    id: 500 + i + 1,
    categoryId: 5,
    text: `TypeScript Question ${i + 1}`,
    answers: [
      { id: 400 + i * 4 + 1, text: 'TS A', isCorrect: i % 4 === 0 },
      { id: 400 + i * 4 + 2, text: 'TS B', isCorrect: i % 4 === 1 },
      { id: 400 + i * 4 + 3, text: 'TS C', isCorrect: i % 4 === 2 },
      { id: 400 + i * 4 + 4, text: 'TS D', isCorrect: i % 4 === 3 },
    ]
  })),

  // QA questions
  ...Array.from({ length: 10 }, (_, i) => ({
    id: 600 + i + 1,
    categoryId: 6,
    text: `QA Question ${i + 1}`,
    answers: [
      { id: 500 + i * 4 + 1, text: 'QA A', isCorrect: i % 4 === 0 },
      { id: 500 + i * 4 + 2, text: 'QA B', isCorrect: i % 4 === 1 },
      { id: 500 + i * 4 + 3, text: 'QA C', isCorrect: i % 4 === 2 },
      { id: 500 + i * 4 + 4, text: 'QA D', isCorrect: i % 4 === 3 },
    ]
  })),

  // GIT questions
  ...Array.from({ length: 10 }, (_, i) => ({
    id: 700 + i + 1,
    categoryId: 7,
    text: `GIT Question ${i + 1}`,
    answers: [
      { id: 600 + i * 4 + 1, text: 'GIT A', isCorrect: i % 4 === 0 },
      { id: 600 + i * 4 + 2, text: 'GIT B', isCorrect: i % 4 === 1 },
      { id: 600 + i * 4 + 3, text: 'GIT C', isCorrect: i % 4 === 2 },
      { id: 600 + i * 4 + 4, text: 'GIT D', isCorrect: i % 4 === 3 },
    ]
  })),

  // Computer Science questions
  ...Array.from({ length: 10 }, (_, i) => ({
    id: 800 + i + 1,
    categoryId: 8,
    text: `CS Question ${i + 1}`,
    answers: [
      { id: 700 + i * 4 + 1, text: 'CS A', isCorrect: i % 4 === 0 },
      { id: 700 + i * 4 + 2, text: 'CS B', isCorrect: i % 4 === 1 },
      { id: 700 + i * 4 + 3, text: 'CS C', isCorrect: i % 4 === 2 },
      { id: 700 + i * 4 + 4, text: 'CS D', isCorrect: i % 4 === 3 },
    ]
  })),
]

export const quizService = {
  getCategories: (): Category[] => categories,

  getQuestionsByCategoryId: (categoryId: number): Question[] => {
    return questions.filter(q => q.categoryId === categoryId)
  },

  getAllQuestions: (): Question[] => questions,

  getQuestionById: (id: number): Question | undefined => {
    return questions.find(q => q.id === id)
  },
}
