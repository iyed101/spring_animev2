import { useEffect, useState } from "react";
import SideBare from "./SideBare";
import { NavLink } from "react-router-dom";
import User from "./User";

const Animepage = () => {
    const [animeList, setAnimeList] = useState([]);

    useEffect(() => {
        const fetchAnimeByType = async () => {
            try {
                const response = await fetch('http://localhost:4000/anime/type/Série');
                if (!response.ok) {
                    throw new Error('Failed to fetch anime data');
                }
                const data = await response.json();
                setAnimeList(data);
                console.log(data);
            } catch (error) {
                console.error('Une erreur s\'est produite lors de la récupération des données:', error);
            }
        };

        fetchAnimeByType();
    }, []);

    return (
        <div style={{ width: 1473, height: 768, position: 'relative' }}>
            <div style={{ width: 1473, height: 768, left: 0, top: 0, position: 'absolute' }}>
                <div style={{ width: 1473, height: 768, left: 0, top: 0, position: 'absolute', background: '#333333' }}></div>
                <SideBare></SideBare>
                <User></User>
                <div style={{ width: 1079, height: 245, left: 358, top: 230, position: 'absolute' }}>
                    {animeList.length > 0 && animeList.map((anime, index) => (
                        <NavLink to={`/inside/${anime.id}`} key={anime.id}>
                            <div key={index} style={{ width: 149, height: 245, left: index * 155, top: 0, position: 'absolute' }}>
                                <div style={{ width: 149, height: 29, left: 0, top: 216, position: 'absolute', color: 'white', fontSize: 13, fontFamily: 'Poppins', fontWeight: '300', wordWrap: 'break-word' }}>{anime.nom}</div>
                                <img style={{ width: 140, height: 210, left: 0, top: 0, position: 'absolute', borderRadius: 10 }} src={anime.photo} alt={`Anime ${index}`} />
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Animepage;
