import './App.css';
import ColorBox from './components/ColorBox';
import ClockFeature from './features/Clock';
import MagicBoxFeature from './features/MagicBox';
import PostFeatures from './features/PostList/Index';
import TodoListFeature from './features/TodoList';

function App() {


  return (

    <div className="App">
      <h1>Clock</h1>
      <ClockFeature />
      <h1>Post List</h1>
      <PostFeatures />
      <h1>Magic Box</h1>
      <MagicBoxFeature />
      {/* <ColorBox />
      <TodoListFeature /> */}

    </div>
  );
}

export default App;
