import './App.css';
import './Animations.css';
import './Card.css'
import './MyCard.css'
import React, { useEffect, useState } from 'react';
import { collection, doc, getDocs } from "firebase/firestore";
import db from "./firebase-config";
import CardList from './CardList';

function CardComponent() {
  const [displayedCards, setDisplayedCards] = useState([]);
  const [remainingCards, setRemainingCards] = useState([]);
  const [myCards, setMyCards] = useState([]);

  useEffect(() => {fetchData()},[])


  const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }; 

  const fetchData = async () => {
    let newList = []
    const querySnapshot = await getDocs(collection(db, "cards"));
        querySnapshot.forEach((doc) => {
        const card = {
            name: doc.data().cardName,
            imageUrl: doc.data().imageUrl,
            type: doc.data().cardType,
            rarity: doc.data().rarity
        }
        newList.push(card);
    });
    newList = shuffle(newList);
  
    const randomCards = [];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * newList.length);
      randomCards.push(newList[randomIndex]);
      newList.splice(randomIndex, 1); 
    }
    setDisplayedCards(randomCards);
    setRemainingCards(newList);
    
    }

    const handleCardClick = (index) => {
      let updatedDeck = [...displayedCards];
      const removedCard = updatedDeck.splice(index, 1); 
      myCards.push(removedCard[0]);
    
      if (myCards.length === 4) {
        setDisplayedCards([]);
        document.getElementById("main").style.display = "none";
        document.getElementById("mycard").style.display = "flex";
        document.getElementById("play-again").style.visibility = "visible";
        return;
      }
    
      while (updatedDeck.length < 3 && remainingCards.length > 0) {
        const cardToAdd = remainingCards.pop();
        updatedDeck.push(cardToAdd);
      }
    
      shuffle(updatedDeck);
      setDisplayedCards(updatedDeck);
    };

    const handlePlayAgain = () => {
      setRemainingCards([]);
      setMyCards([]);
      setDisplayedCards([]);
      fetchData();
      document.getElementById("main").style.display = "flex";
      document.getElementById("mycard").style.display = "none";
      document.getElementById("play-again").style.visibility = "hidden";
    }


  return (
    <div className='container'>
      <div className='header'>
        <p>CoC deck</p>
      </div>
      <div className='main' id='main'>
        <CardList deck={displayedCards} onCardClick={handleCardClick} />
      </div>
      <div className='mycard' id='mycard'>
        <button id='play-again' onClick={handlePlayAgain}><span>play again?</span><i></i></button>
        <CardList deck={myCards} />
      </div>
    </div>
  );
}

export default CardComponent;
