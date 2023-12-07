import Car from "../careercontent/careercontent";
import './career.css';

const Career = (props) => {
    const Career = props;
    console.log('list:',Career);
    return(
       <div>
           <h1>Career</h1>
           <br />
           <hr></hr>
           <div className='box'>
              {props.Career.map((career, index) => 
               <Car  career={career} key={index} />
              )};
            </div>
       </div>
    )
};

export default Career;