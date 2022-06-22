import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../helpers/getHeroById";


export const HeroScreen = () => {

  const navigate = useNavigate (); 

  const params = useParams();

  const { heroeId } = params;


  
  const hero = useMemo ( () => {
    return getHeroById(heroeId);
  }, [heroeId]);


  if (!hero){
    return <Navigate to='/' />
  };


  const imgPath = `/assets/${hero.id}.jpg`;

  const handleReturn = () => {

    // el -1 regresa a la pagina anterior
    navigate(-1, {
      replace: true
    });

  };


  return (
    <div className="row mt-5">
      <div className="col-4">
          <img src={imgPath} alt={hero.superhero} className="img-thumbnail mb-5 animate__animated animate__fadeInLeft"></img>
      </div>
      <div className="col-8 animate__animated animate__fadeIn">
          <h3>{hero.superhero}</h3>
          <ul className="list-group list-group-flush mt-4">
          <li className="list-group-item"><b>Alter ego: {hero.alter_ego}</b></li>
          <li className="list-group-item"><b>Publisher: {hero.publisher}</b></li>
          <li className="list-group-item"><b>First Appearance: {hero.first_appearance}</b></li>
          </ul>

          <h5 className="mt-4">Characters</h5>
          <p>{hero.characters}</p>

          <button className="btn btn-outline-info mt-3" onClick={handleReturn}>Back</button>
      </div>
    </div>
  )
}
