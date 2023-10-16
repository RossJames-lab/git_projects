// random component generator

function getRandomComponent(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  
  const genres = {
    sciFi: {
      adjectives: ['Futuristic', 'Otherworldly', 'Space Opera', 'Time-Traveling', 'Interstellar'],
      randomWords: ['Galactic', 'Alien Encounter', 'Starship', 'Cybernetic', 'Dimensional'],
      separators: ['in', 'beyond', 'among', 'across', 'through'],
      suffixes: ['Chronicles', 'Exploration', 'Odyssey', 'Universe', 'Future Quest']
    },
    horror: {
      adjectives: ['Terrifying', 'Haunting', 'Dark', 'Supernatural', 'Eerie'],
      randomWords: ['Cursed', 'Nightmare', 'Ghostly', 'Mansion', 'Scream'],
      separators: ['in', 'beyond', 'among', 'across', 'through'],
      suffixes: ['Terror', 'Fright', 'Chills', 'Night', 'Horror']
    },
    romance: {
      adjectives: ['Romantic', 'Heartwarming', 'Passionate', 'Love-Struck', 'Enchanting'],
      randomWords: ['Love', 'Affection', 'Heart', 'Soulmate', 'Romance'],
      separators: ['of', 'in', 'with', 'around', 'beneath'],
      suffixes: ['Love Story', 'Romance', 'Passion', 'Affection', 'Heart']
    },
    fantasy: {
      adjectives: ['Magical', 'Enchanted', 'Mythical', 'Fantastical', 'Whimsical'],
      randomWords: ['Kingdom', 'Dragon', 'Quest', 'Magic', 'Adventure'],
      separators: ['in', 'beyond', 'among', 'across', 'through'],
      suffixes: ['Legends', 'Fantasy', 'Myth', 'Kingdom', 'Quest']
    }
  };
  
  // Generate movie title
  
  function generateMovieTitle(genreName) {
    const genre = genres[genreName];
    if (!genre) {
      return "Invalid genre";
    }
  
    const adjective = getRandomComponent(genre.adjectives);
    const randomWord = getRandomComponent(genre.randomWords);
    const separator = getRandomComponent(genre.separators);
    const suffix = getRandomComponent(genre.suffixes);
  
    const movieTitle = `${adjective} ${randomWord} ${separator} ${suffix}`;
    return movieTitle;
  }
  
  // Example usage:
  const selectedGenre = "horror"; // Change to the desired genre
  const movieTitle = generateMovieTitle(selectedGenre);
  console.log(movieTitle);
  
  
  
  