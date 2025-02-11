import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  const fetchData = async () => {
    const response = await axios.get('http://127.0.0.1:8000/');
    setMessage(response.data.message);
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={fetchData}>Fetch from FastAPI</button>
    </div>
  );
}

export default App;
