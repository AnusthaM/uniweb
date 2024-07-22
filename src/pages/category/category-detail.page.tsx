import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom"

const CategoryDetail = () => {
     const params = useParams();
     const [ query, setQuery ] = useSearchParams();
     useEffect( () => {
          setTimeout( () => {
               setQuery( "page=1&tittle=test" )
          }, 3000 )
     }, [] )

     console.log( query.get( "page" ) )
     return (
          <>
               <p className="m-10 p-10">
                    Category Detail of {params.slug}
               </p>
          </>
     )
}
export default CategoryDetail