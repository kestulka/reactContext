function randomColor() {
  // Generate random values for red, green, and blue components
  const red = Math.floor(Math.random() * 256); // Random integer between 0 and 255
  const green = Math.floor(Math.random() * 256); // Random integer between 0 and 255
  const blue = Math.floor(Math.random() * 256); // Random integer between 0 and 255

  // Construct the RGB color string
  const color = `rgb(${red}, ${green}, ${blue})`;

  return color;
}
