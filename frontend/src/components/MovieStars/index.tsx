import { ReactComponent as StarFull } from 'assets/Star-full.svg';
import { ReactComponent as StarHalf } from 'assets/Star-half.svg';
import { ReactComponent as StarEmpty } from 'assets/Star-empty.svg';
import './style.css';
export default function MovieStars() {
  return (
    <div className='dsmovie-stars-container'>
      <StarFull />
      <StarFull />
      <StarFull />
      <StarHalf />
      <StarEmpty />
    </div>
  );
}
