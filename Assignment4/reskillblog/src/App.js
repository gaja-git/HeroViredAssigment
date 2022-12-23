import logo from './logo.svg';
import './App.css';


import BlogHeader from './components/BlogHeader';
import BlogContent from './components/BlogContent';
import BlogFooter from './components/BlogFooter';

function App() {
  return (
    <div className="App">      
      <BlogHeader></BlogHeader>
      <BlogContent></BlogContent>
      <BlogFooter></BlogFooter>
    </div>
  );
}

export default App;
