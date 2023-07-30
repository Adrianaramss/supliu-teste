import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import background from "../../assets/background.png";
import { ImagemBackground, Gradiente, HeaderGradiente, Texto, Input, Botao, Listaalbumefaixa, Album, Faixas, Buttoncriaralbumefaixa } from './HomePagestyled';
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { goToAdicionar } from '../../Routes/coordinator';

const HomePage = () => {
  const navigate = useNavigate();

  const [albums, setAlbums] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async (keyword = '') => {
    try {
      const response = await Axios.get('https://tiao.supliu.com.br/api/album', {
        headers: {
          'Authorization': 'adrianascosta9@gmail.com',
        },
        params: {
          keyword: keyword
        }
      });
      setAlbums(response.data.data);
    } catch (error) {
      console.error('Erro ao buscar álbuns:', error);
    }
  };

  const handleSearch = () => {
    fetchAlbums(searchKeyword);
  };

  return (
    <>
      <Buttoncriaralbumefaixa onClick={() => goToAdicionar(navigate)}>Clique aqui! Adicione um novo álbum e faixa</Buttoncriaralbumefaixa>

      <ImagemBackground>
        <img className="background" src={background} alt="fundo" />
      </ImagemBackground>

      <HeaderGradiente>
        <img className="logo" src={logo} alt="logo" />
        <h1>Discografia</h1>
      </HeaderGradiente>
      
      <Gradiente>
        <Texto>
          <p>Digite uma palavra chave</p>
        </Texto>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Input type="text" placeholder="Min" value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} />
          <Botao onClick={handleSearch}>Procurar</Botao>
        </div>

        <Listaalbumefaixa>
          {albums.length > 0 ? (
            albums.map(album => (
              <Album key={album.id}>
                <h2>Álbum: {album.name}, {album.year}</h2>
                {album.tracks && album.tracks.length > 0 ? (
                  <Faixas>
                    <thead>
                      <tr>
                        <th>Nº Faixa</th>
                        <th>Nome da Faixa</th>
                        <th>Duração</th>
                      </tr>
                    </thead>
                    <tbody>
                      {album.tracks.map(track => (
                        <tr key={track.id}>
                          <td>{track.number}</td>
                          <td>{track.title}</td>
                          <td>{track.duration} segundos</td>
                        </tr>
                      ))}
                    </tbody>
                  </Faixas>
                ) : (
                  <p>não possui faixas </p>
                )}
              </Album>
            ))
          ) : (
            <p>Nenhum álbum encontrado.</p>
          )}
        </Listaalbumefaixa>
      </Gradiente>
    </>
  );
};

export default HomePage;
