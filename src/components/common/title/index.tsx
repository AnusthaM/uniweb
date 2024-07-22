import { useState, ReactElement, useEffect } from "react"

// interface HeadingProps{
//      value:string
// }

export const Heading1=({children}:{children:ReactElement})=>{
return(
     <>
     <h1>
          {children}
     </h1>
     </>
)
}

export const Heading2=(props :{value?:string})=>{
     return(
          <>
          <h1>
               {props.value}
          </h1>
          </>
     )
     }

// export class Heading3 extends Component{
//      constructor(props:any){
//           super(props)
//           this.state={
//                value : props.value
//           }
//           console.log("I am first loaded")
//      }
//      componentDidMount(): void {
//           console.log("I am third call")
//           this.setState((prev)) => {
//                return { 
//                ...prev,
//                value:"Updated Value"
//                loading: false
//           }
//           }
//      }
//      render=()=> {
//           console.log("I am second loaded")
//           return(
//                <>
//                <h3> 
//                     {
//                          this.state.loading ? "Loading..." :this.state.value
//                     }                  
//                      </h3>
//                </>
//           )
          
//      }
// }
export const Heading3 = ({children}: {children:ReactElement})=>{
     let[loading , setLoading]=useState(true) 
     let[loading1,setLoading1]=useState(true);
      
     useEffect(()=>{
          //body
          console.log("  I am always called on any state change")
        
     })
     useEffect(()=>{
          //onlyonce
          console.log("  I am only called when the component renders once ")
          setTimeout(()=>{
               setLoading1(false)
          },5000)
     },[])




     useEffect(()=>{
          console.log("  I am only called when loading state gets updated/created")
     },[loading])


     return(
          <>
               <h3 className="font-extrabold text-gray-900 hover:cursor-pointer text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[30px]">
                    {children}
               </h3>
          </>
     )
}