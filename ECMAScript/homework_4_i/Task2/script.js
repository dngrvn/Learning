// Необязательная задача, если вдруг первой показалось мало

// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

const randomDog = async (url) => {
  const res = await fetch(url);
  const linkDog = await res.json();
  return linkDog.message;
};

const createEl = (link) => {
  const dogSlideEl = document.querySelector(".dogSlide");
  const imgDog = document.createElement("img");
  imgDog.src = link;
  dogSlideEl.appendChild(imgDog);
};

(async () => {
  try {
    const url = "https://dog.ceo/api/breeds/image/random";
    const linksDogArray = [];
    for (let i = 0; i < 10; i++) {
      urlDog = await randomDog(url);
      linksDogArray.push(urlDog);
    }
    linksDogArray.forEach((link, index) => {
      setTimeout(() => createEl(link), index * 3000);
    });
  } catch (error) {
    console.log("Ошибка:", error);
  }
})();
