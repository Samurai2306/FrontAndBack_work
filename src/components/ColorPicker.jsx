import { useState } from 'react'
import ColorDisplay from './ColorDisplay'
import ColorControls from './ColorControls'
import './ColorPicker.css'

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState('#3498db');

  const colors = [
    { name: 'Синий', value: '#3498db' },
    { name: 'Красный', value: '#e74c3c' },
    { name: 'Зелёный', value: '#2ecc71' },
    { name: 'Жёлтый', value: '#f1c40f' },
    { name: 'Фиолетовый', value: '#9b59b6' },
    { name: 'Оранжевый', value: '#e67e22' },
  ];

  return (
    <div className="color-picker">
      <h3>Выбор цвета</h3>
      <ColorDisplay color={selectedColor} />
      <ColorControls 
        colors={colors} 
        selectedColor={selectedColor}
        onColorSelect={setSelectedColor}
      />
    </div>
  );
}

export default ColorPicker;

