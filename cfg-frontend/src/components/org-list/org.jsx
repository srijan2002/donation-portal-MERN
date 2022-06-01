import './org.css'
import { useState } from 'react';
const Org = () => {
    const [data] = useState([
        {'name':"Snehodiya", 'dist':'8 Kms','desc':' This is a description of the old age home.', 'id':'1'},
        {'name':"Snehodiya", 'dist':'8 Kms','desc':' This is a description of the old age home.', 'id':'1'},
        {'name':"Snehodiya", 'dist':'8 Kms','desc':' This is a description of the old age home.', 'id':'1'},
        {'name':"Snehodiya", 'dist':'8 Kms','desc':' This is a description of the old age home.', 'id':'1'},
        {'name':"Snehodiya", 'dist':'8 Kms','desc':' This is a description of the old age home.', 'id':'1'},
      ]);
    return ( 
        <div className="wrapper">
          <div className="title">
              Nearby NGOs
          </div>
           {
               data.map(
                   (item)=>(
                    <div className="card" key={item.id}>
                    <div className="card-name">
                            {item.name}
                          </div>
                          <div className="card-dist">
                            Distance: {item.dist}
                          </div>
                          <div className="card-desc">
                          {item.desc}
                          </div>
                    </div>

                   ))}
        </div>
     );
}
 
export default Org;