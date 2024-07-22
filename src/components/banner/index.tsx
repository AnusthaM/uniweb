import { useEffect, useState } from "react"
import SliderComponent from "../slider/index"
import { SingleSlider } from "../slider/__contracts/slider.contracts"


export const BannerComponent = () => {
     const [ bannerData, setBannerData ] = useState( [] as Array<SingleSlider> )
     const getAllBanner = () => {
          //load Api
          const response: Array<SingleSlider> = [
               {
                    _id: "",
                    title: "Banner Image",
                    image: "https://icms-image.slatic.net/images/ims-web/9904c7a7-2da6-4783-8a10-d068e8c408e0.jpg_1200x1200.jpg",
                    link: "https://google.com",
               },
               {
                    _id: "",
                    title: "Banner Image",
                    image: "https://icms-image.slatic.net/images/ims-web/be727802-ea20-435a-9cda-bb01a221b1ab.jpg",
                    link: "",
               },
               {
                    _id: "",
                    title: "Banner Image",
                    image: "https://icms-image.slatic.net/images/ims-web/b980d7dc-e23b-4f30-b413-ee17b6e06d82.png",
                    link: "",
               },
               {
                    _id: "",
                    title: "Banner Image",
                    image: "https://icms-image.slatic.net/images/ims-web/8219dc4b-18ec-481d-a34c-ff76d36ee6f8.jpg",
                    link: "",
               }
          ]
          setBannerData( response );
     }
     useEffect( () => {
          //TODO Api caller
          getAllBanner()
     }, [] )
     return (
          <>
               <div className="h-52  sm:h-64 xl:h-80 2xl:h-[450px]">
                    <SliderComponent data={bannerData} />
               </div>
          </>
     )
}