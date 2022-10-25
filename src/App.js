import classes from './App.module.css';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className={classes.app}>
      <div className={classes.background}>
      </div>
      <LoginForm />
    </div>
  );
}

export default App;
