import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch("http://127.0.0.1:8000/hello")
      .then(res => res.json())
      .then(data => {
        console.log(data); // juste pour test
        setMessage(data.message); // si tu renvoies { message: "blabla" } depuis Laravel
      })
      .catch(err => console.error("Erreur:", err));
  }, []);

  return (
    <div>
      <h1>Réponse de Laravel :</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;