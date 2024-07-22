import { useState } from "react";
import { useParams } from "react-router-dom"
import LoadingComponent from "../../../components/common/loading/loading.component";

const UserActivation = () => {
     const params = useParams();
     const [ loading, setLoading ] = useState( true )
     return ( <>
          <section className="bg-white">
               <div className="grid px-8  sm:px-12  lg:px-16 min-h-screen">

                    {
                         loading ? <div className="flex items-center justify-center">
                              <LoadingComponent />
                         </div> : <>
                         </>
                    }
               </div>
          </section>
     </> )
}
export default UserActivation