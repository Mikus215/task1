import React, { useEffect } from 'react';
import './styles/app.css'
import { fetchUser } from './actions/userActions';
import { useDispatch } from 'react-redux'
import Form from './components/Form';

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  }, [])

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
