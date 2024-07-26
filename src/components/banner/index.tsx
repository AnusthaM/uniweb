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
                    image: "https://www.usnews.com/dims4/USNEWS/e787cac/17177859217/resize/800x540%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2Fd1%2Ffe377768fbb26f45239bd82b4b41d0%2F20191020_COMM_coheamarketing121.png",
                    link: "",
               },
               {
                    _id: "",
                    title: "Banner Image",
                    image: "https://borderless.so/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fborderless-so.appspot.com%2Forgs%252FF7TR4XwhpGM9wZWAOEQl%252FcampusImage.jpg&w=3840&q=75",
                    link: "",
               },
               {
                    _id: "",
                    title: "Banner Image",
                    image: "https://cdn.britannica.com/08/235008-050-C82C6C44/Cornell-University-Uris-Library-Ithaca-New-York.jpg",
                    link: "",
               },
               {
                    _id: "",
                    title: "Banner Image",
                    image: "https://www.ivywise.com/core/wp-content/uploads/2022/07/Baker_Memorial_Library_Dartmouth_College_-_DSC090661.jpeg",
                    link: "",
               },
               {
                    _id: "",
                    title: "Banner Image",
                    image: "https://media.cntraveler.com/photos/5c1137222a1ed14acdea31a2/16:9/w_2560,c_limit/GettyImages-594949892.jpg",
                    link: "",
               },
               {
                    _id: "",
                    title: "Banner Image",
                    image: "https://www.princeton.edu//sites/default/files/images/2017/06/20060425_NassauHall_JJ_IMG_5973.jpg",
                    link: "",
               },
               {
                    _id: "",
                    title: "Banner Image",
                    image: "https://admissions.yale.edu/sites/default/files/styles/main-carousel-image--1280x850/public/home-main-carousel-images/crosscampus2019.png?itok=QJDBkwgU",
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
               <div className="h-max sm:h-64 xl:h-80 2xl:h-96rounded-none shadow-none">
                    <SliderComponent data={bannerData} />
               </div>
          </>
     )
}