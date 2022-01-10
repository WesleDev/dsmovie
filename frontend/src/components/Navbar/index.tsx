import { ReactComponent as GithubIcon } from 'assets/Vector.svg';
import './style.css';
function Navbar() {
  return (
    <header>
      <nav className='container'>
        <div className='dsmovie-nav-content'>
          <h1>DSMovie</h1>
          <a href='https://github.com/WesleDev'>
            <div className='dsmovie-contact-container'>
              <GithubIcon />
              <p className='dsmovie-contact-link'>/wesledev</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
