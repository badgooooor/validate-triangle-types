import { observer } from 'mobx-react';
import React from 'react';
import InputForm from './components/InputForm';

const App = observer(() => {
  return (
    <div className="App">
      <InputForm />
    </div>
  );
});

export default App;
