import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [image, setImage] = useState(null);
  const [dogName, setDogName] = useState("");
  const [breed, setBreed] = useState("");
  const [memberName, setMemberName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [expiration, setExpiration] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container">
      
      <button onClick={handlePrint} className="print-button">Print ID Card</button>
      <br></br>      
      <input type="file" accept="image/*" onChange={handleImageUpload} className="input-field" />
      <input type="text" placeholder="Dog's Name" value={dogName} onChange={(e) => setDogName(e.target.value)} className="input-field" />
      <input type="text" placeholder="Breed" value={breed} onChange={(e) => setBreed(e.target.value)} className="input-field" />
      <input type="text" placeholder="Associate Member's Name" value={memberName} onChange={(e) => setMemberName(e.target.value)} className="input-field" />
      <input type="text" placeholder="ID Number" value={idNumber} onChange={(e) => setIdNumber(e.target.value)} className="input-field" />
      <input type="text" placeholder="Expiration Date" value={expiration} onChange={(e) => setExpiration(e.target.value)} className="input-field" />
      
      <div className="id-card">
        {image && <img src={image} alt="ID" className="uploaded-photo" />}
        <p className="dog-name">{dogName}</p>
        <p className="breed">{breed}</p>
        <p className="member-name">{memberName}</p>
        <p className="id-number">{idNumber}</p>
        <p className="expiration">{expiration}</p>
      </div>
      
    </div>
  );
};

export default App;
