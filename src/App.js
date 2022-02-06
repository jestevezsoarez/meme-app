import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  // Estados
  const [linea1, setLinea1]     = useState('');
  const [linea2, setLinea2]     = useState('');
  const [imagen, setImagen]     = useState('');  

  const onChangeLinea1 = function(event) {    
    setLinea1(event.target.value);
  }

  const onChangeLinea2 = (event) => setLinea2(event.target.value);

  const onChangeImagen = (event) => setImagen(event.target.value);

  const onClickExportar = () => {    
    html2canvas(document.querySelector("#meme")).then(canvas => {      
      var link = document.createElement('a');
      link.download = 'filename.png';
      link.href = canvas.toDataURL()
      link.click();
    }); 
  };

  return (
    <div className="App">

      <select onChange={onChangeImagen} value={"dog"}>
        <option value="alien">Alien</option>
        <option value="mr_bean">Mr. Bean</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="cartoon">Cartoon</option>
        <option value="dinosaur">Dinosaur</option>
      </select><br />
      
      <input type="text" placeholder='Pimer Linea' onChange={onChangeLinea1} /><br />
      <input type="text" placeholder='Segunda Linea' onChange={onChangeLinea2} /><br />      
      <button onClick={onClickExportar}>Exportar</button>

      <div className="meme" id="meme">
        <span>{linea1}</span>
        <span>{linea2}</span>        
        <img src={"/img/" + imagen + ".jpg"}></img>
      </div>

    </div>
  );
}

export default App;
