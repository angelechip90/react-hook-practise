import './App.css';
import ColorBox from './components/ColorBox';
import ClockFeature from './features/Clock';
import PostFeatures from './features/PostList/Index';
import TodoListFeature from './features/TodoList';

function App() {


  return (

    <div className="App">
      <h1>Clock</h1>
      <ClockFeature />
      <h1>Post List</h1>
      <PostFeatures />
      {/* <ColorBox />
      <TodoListFeature /> */}

    </div>
  );
}

export default App;
