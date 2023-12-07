import './datacontent.css';
const Content = (props) => {
    const {data} = props;
    return( 
        <div className="box">
          <div className='the'>
            <div>
                <img src={data.img} alt='img'/>
            </div>
          <h2>{data.title}</h2>
          <h4>{data.info}</h4>
          <h5>Read More...</h5>
          <hr></hr>
          <span>{data.date}</span><span>No Comments</span>
          </div>
        </div>
    )
};

export default Content;