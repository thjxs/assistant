import color from './color/color'

function App() {
  return (
    <div className="App">
      {color.map(item => {
        return <span style={{backgroundColor: `rgba(${item.rgb})`, margin: '5px', display: 'inline-block', width: '120px', height: '80px', borderRadius: '25px'}}></span>
      })}
    </div>
  );
}

export default App;
