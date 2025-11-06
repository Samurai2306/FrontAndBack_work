import './App.css'

// Компоненты занятия 19
import Greeting from './components/Greeting'
import UserCard from './components/UserCard'
import TaskList from './components/TaskList'

// Компоненты занятия 20
import Counter from './components/Counter'
import RegistrationForm from './components/RegistrationForm'
import ColorPicker from './components/ColorPicker'

function App() {
  return (
    <div className="app">
      <h1>React Практические занятия 19 и 20</h1>
      
      <section className="section">
        <h2>Занятие 19: Базовые элементы работы с React.js и JSX</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <Greeting />
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <UserCard 
            name="Чернов Глеб"
            role="Frontend Developer"
            avatarUrl="https://lh3.googleusercontent.com/d/1e-zV7dZKgUXv96QRAvwxcUrQ7ADRSGei"
            isOnline={true}
          />
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <UserCard 
            name="Чернов Глеб"
            role="Backend Developer"
            avatarUrl="https://lh3.googleusercontent.com/d/1wUTWUbSpp6N84N6HPg6hSjzlTKwHEZtC"
            isOnline={false}
          />
        </div>
        
        <TaskList />
      </section>

      <section className="section">
        <h2>Занятие 20: Менеджер состояний и компонентов</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <Counter />
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <RegistrationForm />
        </div>
        
        <ColorPicker />
      </section>
    </div>
  )
}

export default App

