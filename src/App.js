import './App.css';
import ColorBox from './components/ColorBox';
import ClockFeature from './features/Clock';
import HeroFeature from './features/Hero';
import MagicBoxFeature from './features/MagicBox';
import PostFeatures from './features/PostList/Index';
import TodoListFeature from './features/TodoList';

function App() {


  return (

    <div className="App">
      <h1>Clock</h1>
      <ClockFeature />
      <h1>To Do List</h1>
      <TodoListFeature />
      <h1>Post List - Get API và phân trang đơn giản</h1>
      <PostFeatures />
      <h1>Magic Box</h1>
      <MagicBoxFeature />
      <h1>Hero</h1>
      <HeroFeature />
      {/* <ColorBox />
      <TodoListFeature /> */}

    </div>
  );
}

export default App;
