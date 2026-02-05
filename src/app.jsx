import { h, Component } from 'preact';
import Router, { route } from 'preact-router';
import { Editor, Landing, Login, Settings, Task } from './components';
import { useEffect } from 'preact/hooks';
import { useAccountStore } from './store';
import { useAuth, useTodos, useUserCatagories } from './hooks';

const App = () => {
  const { getUserFromLocalStorage } = useAuth();
  const { UserLogdS, UserNameS, TodoCatagoriesS } = useAccountStore();
  const {getAllCatagories} = useUserCatagories();
  const {getAllTodo} = useTodos();


  useEffect(() => {
    getUserFromLocalStorage();
    
  }, []);
  
  useEffect(() => {
    if (UserLogdS) {
      route('/home');
      getAllCatagories();
      getAllTodo();
    }

  }, [UserLogdS]);


  return (
    <div class="text-white h-full w-full ">

      <Router >
        <Landing path="/" />
        <Login path="/login" />
        <Task path="/home" />
        <Editor path="/editor" />
        <Settings path="/settings" />
      </Router>
    </div>
  );
};

export default App;                  
