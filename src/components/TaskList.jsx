import './TaskList.css'

function TaskList() {
  const tasks = [
    { id: 1, title: 'Изучить основы React', completed: true },
    { id: 2, title: 'Создать компонент TaskList', completed: true },
    { id: 3, title: 'Реализовать состояние компонентов', completed: false },
    { id: 4, title: 'Добавить валидацию форм', completed: false },
    { id: 5, title: 'Опубликовать на GitHub Pages', completed: false },
  ];

  return (
    <div className="task-list">
      <h3>Список задач</h3>
      <ul className="task-list-items">
        {tasks.map((task) => (
          <li 
            key={task.id} 
            className={`task-item ${task.completed ? 'completed' : 'pending'}`}
          >
            <span className="task-checkbox">
              {task.completed ? '✓' : '○'}
            </span>
            <span className="task-title">{task.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

