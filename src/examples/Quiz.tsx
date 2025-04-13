// src/components/Quiz.tsx
import { useState } from 'react';
import { quizService, Category, Question } from '../utils/quizData';

const Quiz = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);

  const handleCategorySelect = (categoryId: number) => {
    setSelectedCategory(categoryId);
    const filtered = quizService.getQuestionsByCategoryId(categoryId);
    setQuestions(filtered);
  };

  return (
    <div>
      <h2>Select Category</h2>
      {quizService.getCategories().map((cat) => (
        <button key={cat.id} onClick={() => handleCategorySelect(cat.id)}>
          {cat.name}
        </button>
      ))}

      {questions.length > 0 && (
        <>
          <h3>Questions:</h3>
          {questions.map((q) => (
            <div key={q.id}>
              <p>{q.text}</p>
              <ul>
                {q.answers.map((a) => (
                  <li key={a.id}>{a.text}</li>
                ))}
              </ul>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Quiz;
