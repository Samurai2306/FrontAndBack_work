import './ColorControls.css'

function ColorControls({ colors, selectedColor, onColorSelect }) {
  return (
    <div className="color-controls">
      <h4>Выберите цвет:</h4>
      <div className="color-controls-grid">
        {colors.map((color) => (
          <button
            key={color.value}
            className={`color-btn ${selectedColor === color.value ? 'active' : ''}`}
            style={{ backgroundColor: color.value }}
            onClick={() => onColorSelect(color.value)}
            title={color.name}
          >
            {selectedColor === color.value && '✓'}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ColorControls;

