import './ColorDisplay.css'

function ColorDisplay({ color }) {
  return (
    <div className="color-display">
      <div 
        className="color-display-box"
        style={{ backgroundColor: color }}
      ></div>
      <p className="color-display-text">
        Выбранный цвет: <span style={{ color }}>{color}</span>
      </p>
    </div>
  );
}

export default ColorDisplay;

