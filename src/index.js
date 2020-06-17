import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import data_img from './imdb_data.png';
import ReactCSSTransitionGroup from 'react-transition-group'; // ES6

function WebDev(props)
{
  return <h1></h1>;
}

function DataSci(props)
{
  
  return (
  <div className='ML'>
  
  <div>
  <p>This was one of my very simple but fun projects. I scraped data from IMDB using matplotlib and then made visualizations</p>
  <p>Below is a sample image</p>
  <img src={data_img}/>
  <br></br>
  <a target="_blank" rel="noopener noreferrer" href="https://github.com/mgntprg/imdb_data/blob/master/IMDB_vs_user.ipynb">IMDB Ratings vs User Ratings</a>
  </div>

  <br></br>
  <hr></hr>

  <div>
  <p>To build deep learning models, I use tensorflow and keras. </p>
  <p>Below is a good example of some core code I wrote for the 2019 APTOS challenge. I used data preprocessing (see parent dir), augmentation, and dropout to build a convolutional classifier</p>
  <a target="_blank" rel="noopener noreferrer" href="https://github.com/mgntprg/aptos_2019/blob/master/Aptos/aptos_analysis.ipynb">APTOS Kaggle Challenge</a>
  </div>
  <br></br>

  <hr></hr>

  <div>
  <p>To get a strong mathematical foundation and theoretical foundation, I took multivariable calculus, statistics, and linear algebra during high school and read the Goodfellow Deep Learning Book</p>
  <p>I also read research papers to further my knowledge and make my notes publicly available on github:</p>
  </div>
  
  <br></br>

  <hr></hr>

  <div>
  <p>I am also familiar with sci-kit learn and non-deep machine learning models.</p>
  <p>One of the first projects I made was a simple AI which fit a random forest tree model to a basic platformer I made with pygame. </p>
  <p>I collected the data by playing the game and recording variables whenever I made a successful move:</p>
  <a target="_blank" rel="noopener noreferrer" href="https://github.com/mgntprg/JumpingClassifier">Jumping Game</a>
  </div>

  <br></br>
  <hr></hr>

  <div>
  <p>In this project, I tried to remove imperfections from filtered pictures.</p>
  <p>I got this inspiration because I noticed there were flaws whenever I used a PDF scanner, which could be fixed with basic editing</p>
  <p>I used OpenCV to apply filters to images in bulk, manually removed imperfections, and then used a generative model to get the final result</p>
  <a target="_blank" rel="noopener noreferrer" href="https://github.com/mgntprg/blackboard_effect">Blackboard Effect</a>
  </div>

  </div>
  );
}

function Description(props)
{
  const [activated, setActivated] = useState(false);
  return (
  <div>
    <div>
      <button className="WebDev" onClick={() => setActivated(true)} >
        Web Development 
      </button>
      <button className="DataSci" onClick={() => setActivated(false)} >
        Data Science
      </button>
    </div>
    <div>
      {activated && <WebDev />}
      {!activated && <DataSci />}
    </div>
  </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <h2>Welcome to my page!</h2>
    <h3>Below, you can learn more about my data science and web development knowledge</h3>
    <Description></Description>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
