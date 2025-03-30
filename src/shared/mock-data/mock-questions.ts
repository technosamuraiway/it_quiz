import { CATEGORIES, Question } from '@/shared'

export const mockQuestions: Question[] = [
  {
    id: 1,
    category: CATEGORIES.JS,
    title: ' Сколько типов данных в Javascript ?',
    code: `for (let i = 0; i < 10; i++) {
  if (i == 5) {
    console.log('break')
    break
  }
  console.log(i)
}`,
  },
  {
    id: 2,
    category: CATEGORIES.JS,
    title: 'А на хуя  Javascript ?',
    code: `for (let i = 0; i < 10; i++) {
  if (i == 5) {
    console.log('break')
    break
  }
  console.log(i)
}`,
  },
  { id: 3, title: 'Что такое массив ?', code: ``, category: CATEGORIES.JS },
]
