import './App.css';
import Header from './components/Header/Header';
import Start_page from './components/Start_page/Start_page';
import User_nf from './components/User_nf/User_nf';
import Main from './components/Main/Main';
import { useState } from 'react';
import api from './api'


const App = () => {

  const [user, setUser] = useState({ init: false });
  const [repositories, setRepositories] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState(null);

  const handleSearch = (e) => {
    setUserInput(e.target.value)
  };

  const handleSubmit = async (onKeyPress) => {
    if (onKeyPress.which === 13) {
      setUser({ init: false })
      setIsFetching(true)
      try {
        let response = await api.fetchUserInfo(userInput)
        setUser({ init: true, ...response.data });
        setError(null);
        let responseRep = await api.fetchUserRepositories(userInput)
        setRepositories(responseRep.data);
      }
      catch (err) {
        setError(err.message)
      }
      setIsFetching(false)
    }
  };

  let userSearch = () => {
    if (user.init) {
      return <Main user={user} repositories={repositories} />
    }
    else if (error) {
      return <User_nf />
    }
    else {
      return <Start_page />
    }
  }

  return (
    <div className='content'>
      <Header props={{ handleSubmit, handleSearch }} />
      {isFetching
        ? <div className="loader" />
        : userSearch()
      }
    </div>
  );
}

export default App;
