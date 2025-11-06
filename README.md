# React Практические занятия 19 и 20

React-приложение, созданное с использованием Vite, демонстрирующее базовые элементы работы с React.js и JSX, а также управление состоянием компонентов.

## Структура проекта

### Занятие 19: Базовые элементы работы с React.js и JSX

1. **Greeting** — компонент приветствия
   - Отображает приветствие в зависимости от времени суток (утро, день, вечер)
   - Использует переменную с именем пользователя

2. **UserCard** — компонент карточки пользователя
   - Принимает через props: `name`, `role`, `avatarUrl`, `isOnline`
   - Отображает аватар, имя, роль и статус (онлайн/офлайн)
   - Использует деструктуризацию props

3. **TaskList** — компонент списка задач
   - Отображает массив задач с полями: `id`, `title`, `completed`
   - Использует метод `map()` для рендеринга списка
   - Добавляет условное оформление для выполненных и невыполненных задач
   - Использует уникальные `key` для каждого элемента списка

### Занятие 20: Менеджер состояний и компонентов

1. **Counter** — счётчик с кнопками
   - Увеличивать, уменьшать и сбрасывать значение
   - Отображает текущее значение
   - Использует `useState` для управления состоянием

2. **RegistrationForm** — форма регистрации
   - Поля: имя, email, пароль
   - Валидация email в реальном времени
   - Обработчик отправки формы с выводом данных в консоль

3. **ColorPicker** — выбор цвета
   - Родительский компонент хранит состояние выбранного цвета
   - Дочерние компоненты: `ColorDisplay` (отображает цвет) и `ColorControls` (кнопки выбора)
   - Реализует подъём состояния (lifting state up)

## Установка и запуск

1. Установите зависимости:
```bash
npm install
```

2. Запустите dev-сервер:
```bash
npm run dev
```

3. Соберите проект для production:
```bash
npm run build
```

4. Предпросмотр production сборки:
```bash
npm run preview
```

## Публикация на GitHub Pages

### Способ 1: Использование GitHub Actions (рекомендуется)

1. Создайте файл `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. В `vite.config.js` добавьте базовый путь:
```js
export default defineConfig({
  plugins: [react()],
  base: '/FrontAndBack_work/', // замените на имя вашего репозитория
})
```

3. В настройках репозитория GitHub включите GitHub Pages (Settings → Pages → Source: GitHub Actions)

### Способ 2: Ручная публикация

1. Установите пакет для деплоя:
```bash
npm install --save-dev gh-pages
```

2. Добавьте скрипты в `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Обновите `vite.config.js` с базовым путём (как в способе 1)

4. Запустите деплой:
```bash
npm run deploy
```

## Технологии

- React 18
- Vite 5
- JavaScript (ES6+)

## Структура файлов

```
├── src/
│   ├── components/
│   │   ├── Greeting.jsx
│   │   ├── UserCard.jsx
│   │   ├── TaskList.jsx
│   │   ├── Counter.jsx
│   │   ├── RegistrationForm.jsx
│   │   ├── ColorPicker.jsx
│   │   ├── ColorDisplay.jsx
│   │   └── ColorControls.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

