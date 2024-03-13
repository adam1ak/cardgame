import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; 
import db from "./firebase-config";
import './CardAdd.css';
function CardAdd() {
    const [cardName, setCardName] = useState("");
    const [imageUrl, setImg] = useState("");
    const [cardType, setType] = useState("");
    const [rarity, setRarity] = useState("");

    const handleAddData = async () => {
        const docRef = await addDoc(collection(db, "cards"), {
            cardName : cardName,
            cardType : cardType,
            imageUrl: imageUrl,
            rarity: rarity
        });
        console.log("Document written with ID: ", docRef.id);
        restart();
    }
    const restart = () => {
        let inputs = document.querySelectorAll('input');
        setCardName("");
        setImg("");
        setType("");
        setRarity("");
        inputs.forEach(input => input.value = "");
    }

    return (
<div className="add-card">
    <h1>Add Card</h1>
    <div className="add-inputs">
        <input 
            type="text" 
            placeholder="Card Name" 
            onChange={(e) => setCardName(e.target.value)} 
        />
        <input 
            type="text" 
            placeholder="ImageUrl" 
            onChange={(e) => setImg(e.target.value)} 
        />
        <input 
            type="text" 
            placeholder="Type" 
            onChange={(e) => setType(e.target.value)} 
        />
        <select 
            placeholder="Rarity" 
            onChange={(e) => setRarity(e.target.value)}
        >
            <option value="">Select Rarity</option>
            <option value="Common">Common</option>
            <option value="Rare">Rare</option>
            <option value="Epic">Epic</option>
            <option value="Legendary">Legendary</option>
            <option value="Champion">Champion</option>
        </select>
        <button onClick={handleAddData} disabled={!imageUrl.includes('deckshop.pro')}>Add</button>
    </div>
</div>
    )
}
export default CardAdd