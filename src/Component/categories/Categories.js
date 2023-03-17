import {React ,usestate}from 'react'
import { categories } from '../../constants/data.js'
import {Link,useSearchParams} from 'react-router-dom';

const style1={
    width:"100%",
    wordBreak: "break-all",
    wordWrap: "break-word",
    overFlow: " hidden",
    whiteSpace: 'pre-wrap', overflowWrap: 'break-word'
}
const Categories = () => {
        
    const [searchParams]=useSearchParams();
    const category=searchParams.get("category")
    console.log("--?",category);


    return (
       
       <>
         

               <div className="contaner-fluid  mt-4 ">  
                  <div class="align-items-center ">
                
                            <Link  to={`/create?category=${category || ''}`}>
                            <div type="button" class="btn btn-outline-secondary " style={style1}>Create new Blog</div>
                            </Link>
                        {/* </tr> */}

                        {
                            categories.map(category => (
                                // <tr>
                                    // <td>
                                       
                                         <Link to={`/?category=${category.type}`}>
                                         <div type="button" class="btn btn-outline-info " style={style1}> 
                                         {category.type}
                                         </div>
                                         </Link>
                                  


                                    // </td>

                                // </tr>
                            ))
                        }
           </div>  

                    </div>   
 
          
        </>
    )
}

export default Categories;