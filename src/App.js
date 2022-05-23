import './App.css';

function App() {
  return (
    <>
      <div className="main-div">


        <div class="container">

          <h1>Increment/Decrement counter</h1>
          <h4>using React and Redux</h4>

          <div class="quantity">
            <a class="quantity__minus"><span>-</span></a>
            <input name="quantity" type="text" class="quantity__input" />
            <a class="quantity__plus"><span>+</span></a>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
