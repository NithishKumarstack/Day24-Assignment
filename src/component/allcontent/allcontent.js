import './allcontent.css';
const Thing = (props) => {
    const {all} = props;
    return( 
        <div className="box">
          <div className='the'>
            <div>
                <img src={all.img} alt='img'/>
            </div>
          <h2>{all.title}</h2>
          <h4>{all.info}</h4>
          <h5>Read More...</h5>
          <hr></hr>
          <span>{all.date}</span><span>No Comments</span>
          </div>
        </div>
    )
};

export default Thing;