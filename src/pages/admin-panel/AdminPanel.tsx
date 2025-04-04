import { useEffect, useState } from 'react';
import useQuizData from '@/shared/hooks/useQuizData';

const AdminPanel = () => {
  const {
    data,
    addCategory,
    addQuestion,
    addAnswer,
    deleteQuestion,
    updateAnswer,
    updateQuestionCategory,
    getQuestionsByCategory,
    fetchAllDataFromRemote
  } = useQuizData();

  const [question, setQuestion] = useState('');
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [isCode, setIsCode] = useState(false);
  const [answers, setAnswers] = useState([
    { text: '', isCorrect: false },
    { text: '', isCorrect: false },
    { text: '', isCorrect: false },
    { text: '', isCorrect: false },
  ]);
  const [newCategory, setNewCategory] = useState('');

  useEffect(() => {
    fetchAllDataFromRemote();
    console.log('data', data);
    console.log('categories', getQuestionsByCategory(1));
    console.log('questions', data?.questions);

    console.log(data);
  }, [data]);

  const handleAddQuestion = () => {
    if (!categoryId || question.trim() === '') {
      return alert('Заполните все поля');
    }

    const questionId = addQuestion(categoryId, question, isCode);
    answers.forEach(answer => addAnswer(Number(questionId), answer.text, answer.isCorrect));

    setQuestion('');
    setAnswers([
      { text: '', isCorrect: false },
      { text: '', isCorrect: false },
      { text: '', isCorrect: false },
      { text: '', isCorrect: false },
    ]);
    alert('Вопрос и ответы добавлены!');
  };

  const handleAddCategory = () => {
    if (newCategory.trim() === '') return;
    addCategory(newCategory);
    setNewCategory('');
  };

  const handleDeleteQuestion = (questionId: number) => {
    deleteQuestion(questionId);
  };

  const handleUpdateAnswer = (answerId: number, newText: string, newIsCorrect: boolean) => {
    updateAnswer(answerId, newText, newIsCorrect);
  };

  const handleUpdateQuestionCategory = (questionId: number, newCategoryId: number) => {
    updateQuestionCategory(questionId, newCategoryId);
  };

  return (
    <div>
      <h2>Добавить новый вопрос</h2>
      <input
        type="text"
        placeholder="Текст вопроса"
        value={question}
        onChange={e => setQuestion(e.target.value)}
      />
      <br />
      <input type="checkbox" checked={isCode} onChange={() => setIsCode(prev => !prev)} />
      <label>Вопрос содержит код</label>
      <br />
      <br />
      <select onChange={e => setCategoryId(Number(e.target.value))}>
        <option value="">Выберите категорию</option>
        {data?.categories.map(cat => (
          <option key={cat.id} value={cat.id}>
            {cat.category_name}
          </option>
        ))}
      </select>

      <h3>Варианты ответов</h3>
      {answers.map((ans, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder={`Ответ ${index + 1}`}
            value={ans.text}
            onChange={e => {
              const newAnswers = [...answers];
              newAnswers[index].text = e.target.value;
              setAnswers(newAnswers);
            }}
          />
          <input
            type="checkbox"
            checked={ans.isCorrect}
            onChange={() => {
              const newAnswers = answers.map((a, i) => ({
                ...a,
                isCorrect: i === index,
              }));
              setAnswers(newAnswers);
            }}
          />
          <label>Правильный</label>
        </div>
      ))}

      <button onClick={handleAddQuestion}>Добавить вопрос</button>

      <h2>Добавить новую категорию</h2>
      <input
        type="text"
        placeholder="Название категории"
        value={newCategory}
        onChange={e => setNewCategory(e.target.value)}
      />
      <button onClick={handleAddCategory}>Добавить категорию</button>

      <h2>Список вопросов</h2>
      {data?.questions.map(q => (
        <div key={q.id}>
          <p>{q.question_text}</p>
          <button onClick={() => handleDeleteQuestion(q.id)}>Удалить</button>
          <select onChange={e => handleUpdateQuestionCategory(q.id, Number(e.target.value))}>
            <option value="">Выберите новую категорию</option>
            {data.categories.map(cat => (
              <option key={cat.id} value={cat.id}>
                {cat.category_name}
              </option>
            ))}
          </select>
          <h4>Ответы:</h4>
          {data.answers
            .filter(a => a.question_id === q.id)
            .map(answer => (
              <div key={answer.id}>
                <input
                  type="text"
                  value={answer.text}
                  onChange={e => handleUpdateAnswer(answer.id, e.target.value, answer.is_correct)}
                />
                <input
                  type="checkbox"
                  checked={answer.is_correct}
                  onChange={() => handleUpdateAnswer(answer.id, answer.text, !answer.is_correct)}
                />
                <label>Правильный</label>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;