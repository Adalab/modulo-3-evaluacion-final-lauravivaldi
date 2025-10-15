const getCharacter = () => {
  return fetch("https://hp-api.onrender.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((item) => ({
        name: item.name,
        image: item.image,
        species: item.species,
        house: item.house,
        id: item.id
      }));
      return cleanData;
     
    })
    .catch((error) => {
      console.error("Error", error);
    });
};

export default getCharacter;




/* Mañana, cuando retomes:

getCharacterName() ya hace su trabajo: obtiene los datos de la API 
y te devuelve un array con solo los campos que necesitas (name, image, species).

Tu trabajo en el componente será usar useEffect para:

Llamar a getCharacterName() (hacer el fetch).

Filtrar el array según los valores del input (name) y del select (select).

Guardar el resultado en el estado (setCharacters) para que React lo renderice.

✅ En otras palabras: useEffect controla cuándo y cómo se actualizan los datos 
en pantalla. */