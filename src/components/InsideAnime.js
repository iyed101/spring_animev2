import { useParams } from "react-router-dom";
import SideBare from "./SideBare";
import User from "./User";
import { useEffect, useState } from "react";
import heart from './img/heart.png'

const InsideAnime =()=>{
    const { id } = useParams();
    const [anime, setAnime] = useState({});
    const [episodes, setEpisodes] = useState([]);
    useEffect(() => {
        const fetchAnimeAndEpisodes = async () => {
            try {
                // Récupérer les détails de l'anime par son ID
                const animeResponse = await fetch(`http://localhost:4000/anime/${id}`);
                if (!animeResponse.ok) {
                    throw new Error("Error fetching anime by ID");
                }
                const animeData = await animeResponse.json();
                setAnime(animeData);
                console.log(animeData);
                // Récupérer les épisodes de l'anime par son ID
                const episodesResponse = await fetch(`http://localhost:4000/episode/byAnime/${id}`);
                if (!episodesResponse.ok) {
                    throw new Error("Error fetching episodes by anime ID");
                }
                const episodesData = await episodesResponse.json();
                setEpisodes(episodesData);
                
            } catch (error) {
                console.error(error);
            }
        };

        fetchAnimeAndEpisodes();
    }, [id]);

    return(
        <div style={{width: 1473, height: 768, position: 'relative'}}>
  <div style={{width: 1473, height: 768, left: 0, top: 0, position: 'absolute'}}>
    <div style={{width: 1473, height: 768, left: 0, top: 0, position: 'absolute', background: '#333333'}}></div>
    <SideBare></SideBare>
    <User></User>
    <div style={{width: 803, height: 636, left: 358, top: 102, position: 'absolute'}}>
      <div style={{width: 803, height: 636, left: 0, top: 0, position: 'absolute', background: 'black', borderRadius: 15}} />
      {episodes.map((episode, index) => (
      <div key={index} style={{width: 250, height: 176, left: 19+(260*index), top: 36, position: 'absolute'}}>
        <div style={{width: 149, height: 29, left: 0, top: 147, position: 'absolute', color: 'white', fontSize: 13, fontFamily: 'Poppins', fontWeight: '300', wordWrap: 'break-word'}}>{episode.nom}</div>
        <img style={{width: 250, height: 140.62, left: 0, top: 0, position: 'absolute', borderRadius: 17}} src={episode.photo} />
      </div>
      ))}
    </div>
    <div style={{width: 270, height: 636, left: 1183, top: 102, position: 'absolute'}}>
        
      <div style={{width: 270, height: 636, left: 0, top: 0, position: 'absolute', background: 'black', borderRadius: 15}} />
      <div style={{width: 200, height: 250, left: 35, top: 24, position: 'absolute'}}>
        <div style={{width: 200, height: 250, left: 0, top: 0, position: 'absolute', background: '#333333', borderRadius: 15}} />
        <img style={{width: 180, height: 229.50, left: 10, top: 10, position: 'absolute', borderRadius: 10}} src={anime.photo} />
      </div>
      <div style={{width: 183, height: 12, left: 43, top: 282, position: 'absolute'}}>
      </div>
      <div style={{width: 84, height: 34, left: 16, top: 354, position: 'absolute', color: 'white', fontSize: 15, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Année :</div>
      <div style={{width: 84, height: 34, left: 16, top: 522, position: 'absolute', color: 'white', fontSize: 15, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Studio :</div>
      <div style={{width: 84, height: 34, left: 176, top: 354, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 15, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>{anime.dateDebut}</div>
      <div style={{width: 84, height: 34, left: 176, top: 522, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 15, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>{anime.studio}</div>
      <div style={{width: 84, height: 34, left: 16, top: 388, position: 'absolute', color: 'white', fontSize: 15, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Saison :</div>
      <div style={{width: 84, height: 34, left: 176, top: 388, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 15, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>{anime.seison}</div>
      <div style={{width: 134, height: 34, left: 16, top: 422, position: 'absolute', color: 'white', fontSize: 15, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Tranche d'âge :</div>
      <div style={{width: 84, height: 34, left: 176, top: 422, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 15, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>{anime.trancheAge}</div>
      <div style={{width: 96, height: 34, left: 16, top: 456, position: 'absolute', color: 'white', fontSize: 15, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Épisodes :</div>
      <div style={{width: 84, height: 34, left: 176, top: 454, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 15, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>{anime.nombreEpisode}/{anime.nombreEpisode}</div>
      <div style={{width: 251, height: 2, left: 9, top: 499, position: 'absolute', background: 'white'}} />
      <div style={{width: 69, height: 39, left: 100, top: 295, position: 'absolute'}}>
        <button style={{width: 69, height: 39, left: 0, top: 0, position: 'absolute', background: '#333333', borderRadius: 20, border: '1px white solid'}} ><img style={{width: 20, height: 20, left: 25, top: 10, position: 'absolute'}} src={heart}/></button>
      </div>
    </div>
  </div>
</div>
    )
}
export default InsideAnime;