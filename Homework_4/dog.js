"use strict";

/* Необязательная задача

Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.
*/

// Получение изображений собак с API и отображение их на странице
const dogImages = [];

async function fetchDogImages() {
  for (let i = 0; i < 10; i++) {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    dogImages.push(data.message);
  }
  displayDogImages();
  console.log(dogImages); // Отображение списка изображений собак в консоли
}

let currentImageIndex = 0;

function displayDogImages() {
  const slider = document.getElementById('dogImage');
  slider.src = dogImages[currentImageIndex];
  currentImageIndex = (currentImageIndex + 1) % 10;
  setTimeout(displayDogImages, 3000);
}

fetchDogImages();

