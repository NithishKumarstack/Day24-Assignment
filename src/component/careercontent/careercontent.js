import './careercontent.css';
const Car = (props) => {
    const {career} = props;
    return( 
        <div className="box">
          <div className='the'>
            <div>
                <img src={career.img} alt='img'/>
            </div>
          <h2>{career.title}</h2>
          <h4>{career.info}</h4>
          <h5>Read More...</h5>
          <hr></hr>
          <span>{career.date}</span><span>No Comments</span>
          </div>
        </div>
    )
};

export default Car;