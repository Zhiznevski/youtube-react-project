import './App.css';
import Header from './components/Header/Header';
import MobileMenu from './components/MobileMenu/MobileMenu';
import VideosFeed from './components/VideosFeed/VideosFeed';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className='main'>
      <div class="main-container container">
        <VideosFeed/>
      </div>
      </main>
      <MobileMenu/>
    </div>
  );
}

export default App;
