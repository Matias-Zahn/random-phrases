const getRandomElement= (element) => {
    const index= Math.floor(Math.random() * element.length)
    return element[index]
  }

  export {
    getRandomElement
  }