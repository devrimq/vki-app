import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState('');
  const [comment, setComment] = useState('');

  const calculateBMI = () => {
    const bmiValue = (weight / ((height / 100) ** 2)).toFixed(2);
    setBMI(bmiValue);

    if (bmiValue > 40) {
      setComment('Aşırı obezsin, bir hekime başvurmalısın!');
    } else if (bmiValue > 30 && bmiValue <= 40) {
      setComment('Malesef... obezsin bir hekime danışsan nasıl olur?');
    } else if (bmiValue > 27 && bmiValue <= 30) {
      setComment('Aşırı kilolusun, birşeyler yapmazsan geç olabilir');
    } else if (bmiValue > 22 && bmiValue <= 27) {
      setComment('Biraz kilolusun, sanırım diyet ve egzersiz yapmalısın');
    } else if (bmiValue >= 21 && bmiValue <= 22) {
      setComment('Sana imreniyorum. Aynen devam et!!');
    } else if (bmiValue >= 18 && bmiValue < 21) {
      setComment('Zayıfsın, yiyebiliyorken tadını çıkar.');
    } else if (bmiValue >= 16 && bmiValue < 18) {
      setComment('Sanırım aç dolaşıyorsun. Yemene dikkat et!');
    } else if (bmiValue < 16) {
      setComment('Sanırım hiçbir şey yemiyorsun, Hastaneye gitmek zorunda kalabilirsin');
    }
  };

  const clearForm = () => {
    setWeight('');
    setHeight('');
    setBMI('');
    setComment('');
  };

  return (
    <div className="App">
      <h4>Vücut Kitle Endeksi Hesaplayıcı</h4>
      <label>Ağırlığınız (kg):</label>
      <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />

      <label>Boyunuz (cm):</label>
      <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />

      <label>Vücut Kitle Endeksiniz:</label>
      <input type="text" value={bmi} readOnly />

      <label>Yorum:</label>
      <input type="text" value={comment} readOnly />

      <button onClick={calculateBMI}>Hesapla</button>
      <button onClick={clearForm}>Temizle</button>
    </div>
  );
}

export default App;
