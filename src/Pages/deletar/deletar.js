import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { BackgroundContainer, BackButton } from '../Adicionar/adicionarstyled';
import { Informaçõesadicionaralbum } from './deletarstyled';
import { useNavigate } from 'react-router-dom';
import background from "../../assets/background.png";
import { goToHomePage } from '../../Routes/coordinator';


const Deletar = () => {
  const navigate = useNavigate();

  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    try {
      const response = await Axios.get('https://tiao.supliu.com.br/api/album', {
        headers: {
          'Authorization': 'adrianascosta9@gmail.com',
        },
      });
      setAlbums(response.data.data);
    } catch (error) {
      console.error('Erro ao buscar álbuns:', error);
    }
  };

  const handleDeleteAlbum = async (albumId) => {
    try {
      await Axios.delete(`https://tiao.supliu.com.br/api/album/${albumId}`, {
        headers: {
          'Authorization': 'adrianascosta9@gmail.com',
        },
      });
      console.log('Álbum excluído:', albumId);
      fetchAlbums();
      alert('Álbum excluído com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir o álbum:', error);
    }
  };

  const handleDeleteTrack = async (trackId) => {
    try {
      await Axios.delete(`https://tiao.supliu.com.br/api/track/${trackId}`, {
        headers: {
          'Authorization': 'adrianascosta9@gmail.com',
        },
      });
      console.log('Faixa excluída:', trackId);
      fetchAlbums();
      alert('Faixa excluída com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir a faixa:', error);
    }
  };



  return (
    <BackgroundContainer>
      <img className="background" src={background} alt="fundo" />
      <BackButton onClick={()=> goToHomePage(navigate)}>Voltar para a Página Inicial</BackButton>

      <Informaçõesadicionaralbum>
      <div>
          <br />
          <h1>Álbuns e Faixas existentes</h1>
          {albums.map((album) => (
            <div key={album.id}>
              <p>Album: {album.name} ({album.year})</p>
              <button
                style={{ backgroundColor: 'red', color: 'white' }}
                onClick={() => handleDeleteAlbum(album.id)}
              >
                Excluir Álbum
              </button>
              {album.tracks.map((track) => (
                <div key={track.id}>
                  <p>Faixa: {track.title} ({track.duration} segundos)</p>
                  <button
                    style={{ backgroundColor: 'red', color: 'white' }}
                    onClick={() => handleDeleteTrack(track.id)}
                  >
                    Excluir Faixa
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Informaçõesadicionaralbum>
    </BackgroundContainer>
  );
};

export default Deletar;
