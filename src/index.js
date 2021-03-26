import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import data_img from './imdb_data.png';
import my_pic from './picofme.jpg';
import github_pic from './github.png'
import aita_pic from './aita_image.PNG'
import ReactCSSTransitionGroup from 'react-transition-group'; // ES6
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactPlayer from 'react-player'

function WebDev(props)
{
  return <div>
    <h3>I'm more of a data science person</h3>;
    </div>
}

/*

<div>
  <p>I am also familiar with sci-kit learn and non-deep machine learning models.</p>
  <p>One of the first projects I made was a simple AI which fit a random forest tree model to a basic platformer I made with pygame. </p>
  <p>I collected the data by playing the game and recording variables whenever I made a successful move:</p>
  <ReactPlayer url='https://www.youtube.com/watch?v=AHnLgGBiOkM' />
  <br></br>
  <a target="_blank" rel="noopener noreferrer" href="https://github.com/mgntprg/JumpingClassifier">Jumping Game</a>
  </div>

*/

function DataSci(props)
{
  
  return (
  <div className='ML'>
  
  <div>
  <p>I taught a reinforcement learning agent how to play Connect-4. Specifically, I created a deep-Q network from scratch and used a Connect-4 environment which had a minimax algorithm. </p>
  <p>Below is a video which shows a before and after of the deep-Q agent playing against a random agent. I chose to evaluate on a random agent instead of minimax since minimax is an objective solution for Connect-4</p>
  <ReactPlayer url='https://www.youtube.com/watch?v=e2ccUI-jfXE&ab_channel=MLDemos' />
  <br></br>
  <a target="_blank" rel="noopener noreferrer" href="https://www.kaggle.com/mgntprg/connectx">Connect 4 DQN</a>
  </div>

  <br></br>
  <hr></hr>

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
  <p>Below is a good example of some core code I wrote for the 2019 APTOS challenge. I used data preprocessing, augmentation, and dropout to build a convolutional classifier</p>
  <a target="_blank" rel="noopener noreferrer" href="https://github.com/mgntprg/aptos_2019/blob/master/Aptos/aptos_analysis.ipynb">APTOS Kaggle Challenge</a>
  </div>
  <br></br>


  <hr></hr>
  <p>I implemented a NLP model using the BERT architecture which analyzed posts on reddit and classified whether someone was immoral in a given situation or not</p>
  <img src={aita_pic} className='aita_pic'></img>
  <br></br>
  <a target="_blank" rel="noopener noreferrer" href="https://github.com/ml-stuff/reddit-aita-project">Reddit AITA Notebook</a>
  
  <br></br>
  <hr></hr> 

  </div>
  );
}

function Description(props)
{
  const [activated, setActivated] = useState(false);

  //useEffect(() => {document.title = "Data science stuff"})
  if(!activated) document.title = "Data science stuff";
  else document.title = "Web dev stuff";

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
    <img src={my_pic} className='mypic'/>
    <div>
    <img src={github_pic} className='github' onClick={() => window.location = 'https://github.com/mgntprg'}/>
    </div>

  </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <h2>Welcome to my page!</h2>
    <h3><span className="below">Below, you can learn more about my data science and web development knowledge</span></h3>
    <Description></Description>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
