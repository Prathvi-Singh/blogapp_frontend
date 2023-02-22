import {React ,usestate}from 'react'
import { categories } from '../../constants/data.js'
import {Link,useSearchParams} from 'react-router-dom';

const style1={
    width:"100%",

    wordWrap: "break-word",
}
const Categories = () => {
        
    const [searchParams]=useSearchParams();
    const category=searchParams.get("category")


    return (
       
       <>
         

               <div className="contaner-fluid  border border-success ">  
                  <ol class="text-left mr-5 ">
                {/* <table> */}
                        {/* <tr> */}
                            {/* <button></button> */}
                            <Link  to={`/create?category=${category || ''}`}>
                            <li type="button" class="btn btn-outline-secondary " style={style1}>Create new Blog</li>
                            </Link>
                        {/* </tr> */}

                        {
                            categories.map(category => (
                                // <tr>
                                    // <td>
                                       
                                         <Link to={`/?category=${category.type}`}>
                                         <li type="button" class="btn btn-outline-info " style={style1}> 
                                         {category.type}
                                         </li>
                                         </Link>
                                  


                                    // </td>

                                // </tr>
                            ))
                        }
           </ol>  

                    </div>   
 
          
        </>
    )
}

export default Categories;