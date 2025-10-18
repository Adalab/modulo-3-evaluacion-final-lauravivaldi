import { useParams } from 'react-router-dom';
import CharacterDetail from '../components/CharacterDetail';
import getCharacter from '../services/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import ls from "../services/localStorage";

const DetailPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    getCharacter().then(data => {
      const found = data.find(item => item.id === id);
      setCharacter(found);
      ls.set("characterDetail", found);
    });
  }, [id]);

  if (!character) return <p>Cargando personaje...</p>; // mientras carga

  if (!character?.id) return <NotFoundPage />; // si el personaje no existe

  return (
    <>
      <CharacterDetail {...character} />
      <Link to="/">Volver al inicio</Link>
    </>
  );
};

export default DetailPage;

