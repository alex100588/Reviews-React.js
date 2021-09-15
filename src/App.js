
import './App.css';
import Review from './Review';


function App() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="title">
            <h2>Our reviews</h2>
          </div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
