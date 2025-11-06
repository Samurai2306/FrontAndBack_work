import './Greeting.css'

function Greeting() {
  const userName = 'Глеб';
  
  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return 'утро';
    } else if (hour >= 12 && hour < 18) {
      return 'день';
    } else {
      return 'вечер';
    }
  };

  const getGreeting = () => {
    const timeOfDay = getTimeOfDay();
    const greetings = {
      утро: 'Доброе утро',
      день: 'Добрый день',
      вечер: 'Добрый вечер'
    };
    return greetings[timeOfDay];
  };

  return (
    <div className="greeting">
      <h3>{getGreeting()}, {userName}!</h3>
      <p className="greeting-time">Сейчас {getTimeOfDay()}</p>
    </div>
  );
}

export default Greeting;

