import { useSelector } from "react-redux";
import style from "./Favorites.module.css";
import {Link} from "react-router-dom";

const Favorites = () => {
    const { myFavorites } = useSelector(state => state)
    return (
        <div>
            {
                myFavorites.map((character) => {
                    return(
                        <div>
                             <div className={style.front}>
                                <img src={character.image} alt={character.name} />
                             </div>

                             <div className={style.back}>
                             
                             <div>
                                <Link to={`/detail/${character.id}`} className={style.link}>
                                <h2 className={style.name}>{character.name}</h2>
                                </Link>
                             </div>

                      <div className={style.species}>
                         <h2>Specie: {character.species}</h2>
                         <h2>Gender: {character.gender}</h2>
                      </div>
                 </div>
                 </div>
              )
            })
           }
     </div>
    )
}

export default Favorites;