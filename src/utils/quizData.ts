// src/utils/quizData.ts

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
  {
    id: 101,
    categoryId: 1,
    text: 'What does HTML stand for?',
    answers: [
      { id: 1, text: 'HyperText Markup Language', isCorrect: true },
      { id: 2, text: 'Hyper Tool Multi Language', isCorrect: false },
      { id: 3, text: 'HighText Machine Language', isCorrect: false },
    ],
  },
  {
    id: 102,
    categoryId: 2,
    text: 'What property controls the text size?',
    answers: [
      { id: 4, text: 'font-style', isCorrect: false },
      { id: 5, text: 'text-size', isCorrect: false },
      { id: 6, text: 'font-size', isCorrect: true },
    ],
  },
  // Add more questions...
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
