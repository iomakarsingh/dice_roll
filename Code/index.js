// DICE ROLLER PROGRAM

function rollDice() {
  const numDice = document.getElementById("numDice").value;
  const result = document.getElementById("result");
  const image = document.getElementById("image");
  const values = [];
  const images = [];

  for (let i = 0; i < numDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="images/${value}.png" alt="Dice ${value}">`);
  }

  result.textContent = `Dice: ${values.join(", ")}`;
  image.innerHTML = images.join("");
}
