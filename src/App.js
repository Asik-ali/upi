import React, { useState } from 'react'
import { QrReader } from 'react-qr-reader';

const App = () => {


  const [result, setResult] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  }

  const handleError = (error) => {
    console.error(error);
  }

  return (
    <div>
      <h2>UPI Scanner</h2>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      {result && (
        <div>
          <h3>Scanned Data:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  )
}

export default App