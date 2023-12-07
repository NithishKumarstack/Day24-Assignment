import './data.css';
import Content from '../datacontent/datacontent';
const Data = (props) =>{
    const Data = props;
    console.log('lists:',Data);
    return(
     <div>
        <h1 className="padding">Data Science</h1>
        <br />
        <h3 className="padding">One of the most propelling careers on the planet today, Data Science is a vast arena of diverse technologies and techniques. Are you ready to step into the world of Data? Then you probably should not miss this corner of articles that is an assorted curation out of tedious research & exploration.</h3>
        <br />
        <h3 className="padding">The GUVI Blog’s Data Science category is here to help you steer through a lot of opinions that float on the internet. High-Quality content curated by experts!</h3>
        <hr></hr>
        <div className='box'>
              {props.Data.map((data, index) => 
               <Content  data={data} key={index} />
              )};
            </div>

     </div>
    )
};

export default Data;