import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import { useDebounce } from '../../hooks/useDebounce';

import './SearchPage.css';

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);

  let useQuery = () => new URLSearchParams(useLocation().search);
  const searchTerm = useQuery().get('q');
  const debouncedSearchTerm = useDebounce(searchTerm);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const res = await axios.get(`/search/multi?include_adult=false&query=${searchTerm}`);
      setSearchResults(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(debouncedSearchTerm) fetchSearchMovie(debouncedSearchTerm);
  }, [debouncedSearchTerm]);
  
  if (searchResults.length > 0) {
    return (
      <section className='search-container'>
        {searchResults.map((movie) => {
          if(movie.backdrop_path !== null && movie.media_type !== 'person') {
            const movieImageUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
            return (
              <div className={`movie ${movie.id}`} key={movie.id}>
                <div className='movie__column-poster' onClick={() => navigate(`/${movie.id}`)} >
                  <img src={movieImageUrl} alt="movie" className='movie__poster' />
                </div>
              </div>
            );
          } 
        })}
      </section>
    );
  } else {
    return (
      <section className='no-results'>
        <div className='no-results__text'>
          <p>
            {`찾고자하는 검색어 "${searchTerm}" 에 맞는 영화가 없습니다.`}
          </p>
        </div>
      </section>
    );
  }
};

export default SearchPage;
