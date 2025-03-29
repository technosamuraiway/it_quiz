export enum CATEGORIES {
  REACT = 'react',
  JS = 'js',
  TS = 'ts',
  CSS = 'css',
  HTML = 'html',
  GIT = 'git',
  COMPUTER_SCIENCE = 'computerScience',
}

export type QuizQuestions = Question[]

export type Answer = {
  id: string
  title: string
  isCorrect: boolean
}

export type Question = {
  code?: string
  id: number
  category?: CATEGORIES
  title: string
  answers?: Answer[]
  docLinks?: string[]
  comments?: string[]
}

export type Nullable<T> = T | null
export type Undefinable<T> = T | undefined
