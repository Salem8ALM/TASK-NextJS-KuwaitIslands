"use client";

import React, { useState } from "react";
import Image from "next/image";

function IslandForm({ island }) {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }
  const isConfirmed = window.confirm(`sure u wanna submit ${island.name}`);
  if (isConfirmed) {
    setFullName("");
    setPhoneNumber("");
    alert(`confirmed for ${island.name}`);
  }
  return (
    <div className="island-form">
      <h2>Book a trip to {island.name}</h2>
      <img src={island.img} alt={island.name} width="300" height="200" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Type Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <button type="submit">Book for today!</button>
      </form>
    </div>
  );
}

export default IslandForm;
