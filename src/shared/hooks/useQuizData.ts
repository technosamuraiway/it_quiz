import { getApiUrl } from '@/config/config'
import { useEffect, useState } from 'react'

interface Category {
  id: number
  category_name: string
}

interface Question {
  id: number
  question_text: string
  category_id: number
  isCode?: boolean
  answer_descr: string
  docs?: string
}

interface Answer {
  id: number
  question_id: number
  text: string
  is_correct: boolean
}

interface QuizData {
  categories: Category[]
  questions: Question[]
  answers: Answer[]
}


const useQuizData = () => {
  const API_URL = getApiUrl()
  const [data, setData] = useState<QuizData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(`${API_URL}/data`)
      .then(res => res.json())
      .then(json => {
        setData(json)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const addCategory = async (category_name: string) => {
    try {
      // Запрашиваем текущие категории для определения последнего ID
      const response = await fetch(`${API_URL}/categories`)
      if (!response.ok) throw new Error('Ошибка при получении категорий')
  
      const categories: Category[] = await response.json()
  
      // Определяем последний ID (если категорий нет, начинаем с 1)
      const lastId = categories.length > 0 ? Math.max(...categories.map(c => c.id)) : 0
      const newCategory = { id: lastId + 1, category_name }
  
      // Отправляем новую категорию на сервер
      const postResponse = await fetch(`${API_URL}/categories`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCategory),
      })
  
      if (!postResponse.ok) throw new Error('Ошибка при добавлении категории')
  
      const savedCategory = await postResponse.json()
  
      // Обновляем состояние
      setData(prev =>
        prev ? { ...prev, categories: [...prev.categories, savedCategory] } : null
      )
    } catch (err) {
      console.error('Ошибка при добавлении категории:', err)
    }
  }
  

  const addQuestion = async (category_id: number, question_text: string, isCode = false, answer_descr = "", docs = "") => {
    try {
      const response = await fetch(`${API_URL}/questions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category_id, question_text, isCode, answer_descr, docs })
      })
      const newQuestion = await response.json()
      setData(prev => prev ? { ...prev, questions: [...prev.questions, newQuestion] } : null)
    } catch (err) {
      console.error('Ошибка при добавлении вопроса', err)
    }
  }

  const addAnswer = async (question_id: number, text: string, is_correct: boolean) => {
    try {
      const response = await fetch(`${API_URL}/answers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question_id, text, is_correct })
      })
      const newAnswer = await response.json()
      setData(prev => prev ? { ...prev, answers: [...prev.answers, newAnswer] } : null)
    } catch (err) {
      console.error('Ошибка при добавлении ответа', err)
    }
  }

  const deleteQuestion = async (question_id: number) => {
    try {
      await fetch(`${API_URL}/questions/${question_id}`, { method: 'DELETE' })
      setData(prev => prev ? { 
        ...prev,
        questions: prev.questions.filter(q => q.id !== question_id),
        answers: prev.answers.filter(a => a.question_id !== question_id)
      } : null)
    } catch (err) {
      console.error('Ошибка при удалении вопроса', err)
    }
  }

  const updateAnswer = async (answerId: number, newText: string, newIsCorrect: boolean) => {
    try {
      const response = await fetch(`${API_URL}/answers/${answerId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: newText, is_correct: newIsCorrect })
      })
      const updatedAnswer = await response.json()
      setData(prev => prev ? {
        ...prev,
        answers: prev.answers.map(a => a.id === answerId ? updatedAnswer : a)
      } : null)
    } catch (err) {
      console.error('Ошибка при обновлении ответа', err)
    }
  }

  const updateQuestionCategory = async (question_id: number, new_category_id: number) => {
    try {
      const response = await fetch(`${API_URL}/questions/${question_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category_id: new_category_id })
      })
      const updatedQuestion = await response.json()
      setData(prev => prev ? {
        ...prev,
        questions: prev.questions.map(q => q.id === question_id ? updatedQuestion : q)
      } : null)
    } catch (err) {
      console.error('Ошибка при изменении категории вопроса', err)
    }
  }

  const getQuestionsByCategory = (category_id: number | null): Question[] => {
    return data ? (category_id === null ? data.questions : data.questions.filter(q => q.category_id === category_id)) : []
  }

  const getAnswersByQuestion = (question_id: number): Answer[] => {
    return data ? data.answers.filter(a => a.question_id === question_id) : []
  }

  const fetchAllDataFromRemote = async () => {
    try {
      setLoading(true)
  
      const [categoriesRes, questionsRes, answersRes] = await Promise.all([
        fetch(`${API_URL}/categories`),
        fetch(`${API_URL}/questions`),
        fetch(`${API_URL}/answers`)
      ])
  
      if (!categoriesRes.ok || !questionsRes.ok || !answersRes.ok) {
        throw new Error('Ошибка при загрузке данных')
      }
  
      const [categories, questions, answers] = await Promise.all([
        categoriesRes.json(),
        questionsRes.json(),
        answersRes.json()
      ])
  
      const fullData: QuizData = { categories, questions, answers }
      setData(fullData)
      setLoading(false)
    } catch (err) {
      console.error('Ошибка при получении данных с сервера:', err)
      setLoading(false)
    }
  }
  

  return {
    data,
    loading,
    error,
    addCategory,
    addQuestion,
    addAnswer,
    deleteQuestion,
    updateAnswer,
    updateQuestionCategory,
    getQuestionsByCategory,
    getAnswersByQuestion,
    fetchAllDataFromRemote
  }
}

export default useQuizData
