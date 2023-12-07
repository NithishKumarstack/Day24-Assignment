import './cybercontent.css';
const Cyike = (props) => {
    const {cyber} = props;
    return( 
        <div className="box">
          <div className='the'>
            <div>
                <img src={cyber.img} alt='img'/>
            </div>
          <h2>{cyber.title}</h2>
          <h4>{cyber.info}</h4>
          <h5>Read More...</h5>
          <hr></hr>
          <span>{cyber.date}</span><span>No Comments</span>
          </div>
        </div>
    )
};

export default Cyike;