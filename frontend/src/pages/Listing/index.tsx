import axios from 'axios';
import MovieCard from 'components/MovieCard';
import Pagination from 'components/Pagination';
import { useEffect, useState } from 'react';
import { MoviePage } from 'types/movie';
import { BASE_URL } from 'utils/requests';
import Spinner from 'react-bootstrap/Spinner';
import './style.css';

export default function Listing() {
  const [pageNumber, setPageNumber] = useState(0);
  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`)
      .then((response) => {
        const data = response.data as MoviePage;
        setPage(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [pageNumber]);

  const handlePageChange = (newPageNumber: number) => {
    setPageNumber(newPageNumber);
  };

  return (
    <>
      <Pagination page={page} onChange={handlePageChange} />

      <div className='container'>
        {loading ? (
          <div className='loading'>
            <Spinner animation='grow' role='status' variant='success' size='sm'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
            <Spinner animation='grow' role='status' variant='success'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
            <Spinner animation='grow' role='status' variant='success' size='sm'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
            <Spinner animation='grow' role='status' variant='success'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
            <Spinner animation='grow' role='status' variant='success' size='sm'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          </div>
        ) : (
          <div className='row'>
            {page.content.map((movie) => (
              <div key={movie.id} className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
