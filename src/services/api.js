const getCharacter = () => {
  return fetch("https://hp-api.onrender.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((item) => ({
        name: item.name,
        image: item.image,
        species: item.species,
        house: item.house,
        id: item.id,
        gender: item.gender,
        alternate_names: item.alternate_names,
        alive: item.alive, 
      }));
      console.log(cleanData);
      return cleanData;
      
     
    })
    .catch((error) => {
      console.error("Error", error);
    });
};

export default getCharacter;


