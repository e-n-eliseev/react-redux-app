import './App.css';

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
          <div className='btn_container'>
            <button className='btn'>
              &hearts;</button>
            <button className='btn'>👎</button>
          </div>
        </div>
        <div className='right'>
          <div className='comment'></div>
          <ul className='comments_list' >

          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
