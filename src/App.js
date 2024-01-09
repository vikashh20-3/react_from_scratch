import './App.css';

function App1() {

  const handleNameChange = () => {
    const names = ['vikash', 'bob', 'dave'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello {handleNameChange()}!
        </p>
        {/* we can render js code as a string  */}

        <p>Vikash</p>
        <p>{"Vikash"}</p>
        <p>{[2, 3, 4]}</p>

        {/* we cannot display object in this way  */}
        {/* <p>{{a:3}}</p> */}
        {/* it will show that object cannot be rendered */}
        boolean can also be not rendered in this way

      </header>
    </div>
  );
}

export default App1;
