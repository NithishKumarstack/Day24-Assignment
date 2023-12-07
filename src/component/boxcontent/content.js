import './content.css';
const Box = (props) => {
    const {full} = props;
    return( 
        <div className="box">
          <div className='the'>
            <div>
                <img src={full.img} alt='img'/>
            </div>
          <h2>{full.title}</h2>
          <h4>{full.info}</h4>
          <h5>Read More...</h5>
          <hr></hr>
          <span>{full.date}</span><span>No Comments</span>
          </div>
        </div>
    )
};

export default Box;