import { Link } from 'react-router-dom';
import '../site/site.css';
const Head = () => {
    return (
        <header>
            <div className='Nav'>
                <div><Link className='link' to='/'>All</Link></div>
                <div><Link className='link' to='/fullstack'>Fullstack</Link></div>
                <div><Link className='link' to='/data'>DataScience</Link></div>
                <div><Link className='link' to='/cyber'>Cyber Security</Link></div>
                <div><Link className='link' to='/career'>Career</Link></div>
            </div>
        </header>
    )
};

export default Head;