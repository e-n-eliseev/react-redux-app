import './App.css';
import LikeDislikeBtn from './components/LikeDislikeBtn';
import FotoDescription from './components/FotoDescription';
import Comments from './components/Comments';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='left'>
          <div className='img'>
            <img className='photo' src='https://images.unsplash.com/photo-1612528443702-f6741f70a049?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80' alt='picture'></img>
          </div>
          <FotoDescription />
          <LikeDislikeBtn />
          <a className='github_link' href='https://github.com/e-n-eliseev'>Created by e-n-eliseev. Visit my GitHub page.</a>
        </div>
        <Comments />
      </div>
    </div>
  );
}

export default App;
