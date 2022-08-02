import logo from './logo.svg';
import './App.css';
import Article from './component/Article';
import ArticleBase from './component/ArticleBase';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Newsarticle from './component/Newsarticle';

function App() {
  return (
    <div className="App">
      <Article/><br/>
        
      
      <Newsarticle/>
      
    </div>
  );
}

export default App;
