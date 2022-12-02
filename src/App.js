import './App.css';
import React, {useState} from 'react';
import FirebaseAuthService from './FirebaseAuthService';
import LoginForm from './Components/LoginForm';

function App() {

  const [user, setUser] = useState(null);

  FirebaseAuthService.subscribetoAuthChanges(setUser)

  return (
    <div className="App">
      <div className='title-row'>
        <h1 className='title'>Firebase Recipes</h1>
        <LoginForm existingUser={user}/>
      </div>
    </div>
  );
}

export default App;
