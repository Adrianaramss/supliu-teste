import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { BackgroundContainer, BackButton, Informaçõesadicionaralbum, BackButtondeletar } from './adicionarstyled';
import { useNavigate } from 'react-router-dom';
import background from "../../assets/background.png";
import { goToDeletar, goToHomePage } from '../../Routes/coordinator';

const Adicionar = () => {
  const navigate = useNavigate();

  const [newAlbum, setNewAlbum] = useState({
    name: '',
    year: '',
  });

  const [albums, setAlbums] = useState([]);
  const [newTrack, setNewTrack] = useState({
    album_id: '',
    number: '',
    title: '',
    duration: '',
  });

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

  const handleAddAlbum = async () => {
    try {
      const response = await Axios.post('https://tiao.supliu.com.br/api/album', newAlbum, {
        headers: {
          'Authorization': 'adrianascosta9@gmail.com',
        },
      });
      console.log('Novo álbum adicionado:', response.data);
      setNewAlbum({
        name: '',
        year: '',
      });
      fetchAlbums();
      alert('Álbum adicionado com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar o álbum:', error);
    }
  };

  const handleAddTrack = async () => {
    try {
      if (!newTrack.album_id || !newTrack.number || !newTrack.title || !newTrack.duration) {
        console.error('Preencha todas as informações da faixa.');
        return;
      }

      const response = await Axios.post('https://tiao.supliu.com.br/api/track', newTrack, {
        headers: {
          'Authorization': 'adrianascosta9@gmail.com',
        },
      });

      console.log('Nova faixa adicionada:', response.data);

      setNewTrack({
        album_id: '',
        number: '',
        title: '',
        duration: '',
      });

      fetchAlbums();
      alert('Faixa adicionada com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar a faixa:', error);
    }
  };

  return (
    <BackgroundContainer>
      <img className="background" src={background} alt="fundo" />
      <BackButton  onClick={()=> goToHomePage(navigate)}>Voltar para a Página Inicial</BackButton>
      <BackButtondeletar  onClick={()=> goToDeletar(navigate)}>Clique aqui! Deletar albuns e faixas</BackButtondeletar>
      <Informaçõesadicionaralbum>

        <div>
          <h1>Adicionar Álbum</h1>
          <input
            type="text"
            placeholder="Nome do Álbum"
            value={newAlbum.name}
            onChange={(e) => setNewAlbum({ ...newAlbum, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Ano do Álbum"
            value={newAlbum.year}
            onChange={(e) => setNewAlbum({ ...newAlbum, year: e.target.value })}
          />
          <button onClick={handleAddAlbum}>Adicionar Álbum</button>
        </div>
        <div>
          <br />
          <h1>Adicionar Faixa</h1>
          <select
            value={newTrack.album_id}
            onChange={(e) => setNewTrack({ ...newTrack, album_id: e.target.value })}
          >
            <option value="">Selecione um álbum</option>
            {albums.map((album) => (
              <option key={album.id} value={album.id}>
                {album.name} ({album.year})
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Número da Faixa"
            value={newTrack.number}
            onChange={(e) => setNewTrack({ ...newTrack, number: e.target.value })}
          />
          <input
            type="text"
            placeholder="Nome da Faixa"
            value={newTrack.title}
            onChange={(e) => setNewTrack({ ...newTrack, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Duração da Faixa (em segundos)"
            value={newTrack.duration}
            onChange={(e) => setNewTrack({ ...newTrack, duration: e.target.value })}
          />
          <button onClick={handleAddTrack}>Adicionar Faixa</button>
        </div>
    
      </Informaçõesadicionaralbum>
    </BackgroundContainer>
  );
};

export default Adicionar;
