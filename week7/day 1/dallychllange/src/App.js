import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
function App() {
  return (
    <div className="App">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img className='d-block mx-auto'
            style={{ width: '40%' }}
            src='https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp' alt='' />
          <Carousel.Caption><h3> first diapo</h3></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block mx-auto'
            style={{ width: '40%' }}
            src='https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg' alt='' />
          <Carousel.Caption><h3> last diapo</h3></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block mx-auto'
            style={{ width: '40%' }}
            src='https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp' alt='' />
          <Carousel.Caption><h3> third diapo</h3></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block mx-auto'
            style={{ width: '40%' }}
            src='https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp' alt='' />
          <Carousel.Caption><h3> fourth diapo</h3></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
