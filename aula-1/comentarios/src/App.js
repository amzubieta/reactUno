import React from 'react';
import logo from './logo.svg';
import Comentarios from './Components/Comentarios'
import './App.css';



function App() {
  return (
    <div className="App">
      <Comentarios
        img={logo}
        nome="mell"
        titulo="Amei esse titulo"
        descricao="lPhasellus vitae nunc augue. In nec metus lacinia, pellentesque est non, accumsan turpis. In fermentum sapien massa, quis lobortis arcu fermentum sit amet. Etiam sed elit tincidunt dolor mollis maximus sit amet sed arcu. Nam sit amet metus tempus, laoreet magna dapibus, fringilla ligula. Maecenas mi orci, sollicitudin sed facilisis eget, vestibulum id urna. Nunc egestas dui vitae sem elementum facilisis. Maecenas ac tempus ligula, non finibus dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam interdum sapien a pharetra luctus. Praesent euismod felis eu egestas ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus."
      />

      <Comentarios
        img={logo}
        nome="Raissa"
        titulo="Que lindooooooo"
        descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis efficitur dui. Nam at odio semper eros malesuada vehicula. Donec velit nulla, efficitur quis gravida in, ullamcorper non eros. Phasellus eu elit arcu. Ut malesuada tincidunt posuere. Sed varius nisi quis efficitur condimentum. Donec porta, quam nec dapibus dictum, eros dolor tincidunt justo, at tincidunt nunc orci a purus. Suspendisse ornare, nibh eu commodo mollis, odio elit aliquam turpis, mollis placerat odio lectus quis est. Pellentesque eget nisl orci. Fusce et enim sed quam pulvinar fermentum. Pellentesque ut orci et nulla vehicula venenatis ut ut arcu. Nulla congue scelerisque arcu sit amet scelerisque."
      />
    </div>
  );
}

export default App;
