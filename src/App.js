import './App.css';
import LikeDislikeBtn from './components/LikeDislikeBtn';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='left'>
          <div className='img'>
            <img className='photo' src='https://images.unsplash.com/photo-1612528443702-f6741f70a049?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80' alt='picture'></img>
          </div>
          <div className='description'></div>
          <div className='description'></div>

          <LikeDislikeBtn />

          <a className='github_link' href='https://github.com/e-n-eliseev'>Created by e-n-eliseev. Visit my GitHub pages</a>
        </div>
        <div className='right'>
          <div className='comment'></div>
          <ul className='comments_list' >
            <li className='comments_item'><p className='comments_text'  >lorem5</p><button className='delete_btn'>&times;</button></li>
            <li className='comments_item'><p className='comments_text'  >lorem5</p><button className='delete_btn'>&times;</button></li>
            <li className='comments_item'><p className='comments_text'  >lorem5</p><button className='delete_btn'>&times;</button></li>
            <li className='comments_item'><p className='comments_text'  >lorem5</p><button className='delete_btn'>&times;</button></li>
            <li className='comments_item'><p className='comments_text'  >lorem5</p><button className='delete_btn'>&times;</button></li>
            <li className='comments_item'><p className='comments_text'  >lorem5</p><button className='delete_btn'>&times;</button></li>
            <li className='comments_item'><p className='comments_text'  >lorem5</p><button className='delete_btn'>&times;</button></li>
            <li className='comments_item'><p className='comments_text'  >lorem5</p><button className='delete_btn'>&times;</button></li>
            <li className='comments_item'><p className='comments_text'  >lorem5</p><button className='delete_btn'>&times;</button></li>
            <li className='comments_item'><p className='comments_text'  >lorem5</p><button className='delete_btn'>&times;</button></li>
            <li className='comments_item'><p className='comments_text'  >lorem5</p><button className='delete_btn'>&times;</button></li>
            <li className='comments_item'><p className='comments_text'  >lorem5</p><button className='delete_btn'>&times;</button></li>
            <li className='comments_item'><p className='comments_text'  >lorem5</p><button className='delete_btn'>&times;</button></li>
            <li className='comments_item'><p className='comments_text'  >lorem5</p><button className='delete_btn'>&times;</button></li>
            <li className='comments_item'><p className='comments_text'  >lorem5</p><button className='delete_btn'>&times;</button></li>
            <li className='comments_item'><p className='comments_text'  >lorem5</p><button className='delete_btn'>&times;</button></li>
            <li className='comments_item'><p className='comments_text'  >lorem5</p><button className='delete_btn'>&times;</button></li>
            <li className='comments_item'><p className='comments_text'  >lorem5</p><button className='delete_btn'>&times;</button></li>
            <li className='comments_item'><p className='comments_text'  >lorem5</p><button className='delete_btn'>&times;</button></li>
            <li className='comments_item'><p className='comments_text'  >lorem5</p><button className='delete_btn'>&times;</button></li>
            <li className='comments_item'><p className='comments_text'  >lorem5</p><button className='delete_btn'>&times;</button></li>
            <li className='comments_item'><p className='comments_text'  >lorem5</p><button className='delete_btn'>&times;</button></li>
            <li className='comments_item'><p className='comments_text'  >lorem5</p><button className='delete_btn'>&times;</button></li>
            <li className='comments_item'><p className='comments_text'  >lorem5</p><button className='delete_btn'>&times;</button></li>
            <li className='comments_item'><p className='comments_text'  >lorem5</p><button className='delete_btn'>&times;</button></li>
            <li className='comments_item'><p className='comments_text'  >lorem5</p><button className='delete_btn'>&times;</button></li>
            <li className='comments_item'><p className='comments_text'  >lorem5</p><button className='delete_btn'>&times;</button></li>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
