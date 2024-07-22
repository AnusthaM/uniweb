

import "./landing.css";
import { BannerComponent } from "../../components/banner";
import { Heading3 } from "../../components/common/title";
import { ImageWithTitleCard, SingleProductCard } from "../../components/common/card/single-card.component";

const LandingPage = () => {
     return (
          <>

               <BannerComponent />
               <div className="flex justify-between mx-20 mt-20 border-b border-solid border-teal-500/50 pb-3">
                    <Heading3>
                         <>
                              Catogery List
                         </>
                    </Heading3>
                    <a className="bg-teal-700 text-white text-center pt-2.5 rounded-lg w-40" href="/catogories">
                         View All 	&rarr;
                    </a>
               </div>

               <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mx-20 my-20">
                    <ImageWithTitleCard data={
                         {
                              _id: "",
                              title: "Gaming Chairs",
                              slug: "/category/gaming-chairs",
                              image: "https://static-01.daraz.com.np/p/28a3252842056b2e13d6ebc0eafa5af3.png_300x0q75.webp"
                         }
                    } />

                    <ImageWithTitleCard data={
                         {
                              _id: "",
                              title: "Gaming Chairs",
                              slug: "/category/gaming-chairs",
                              image: "https://static-01.daraz.com.np/p/28a3252842056b2e13d6ebc0eafa5af3.png_300x0q75.webp"
                         }
                    } />

                    <ImageWithTitleCard data={
                         {
                              _id: "",
                              title: "Gaming Chairs",
                              slug: "/category/gaming-chairs",
                              image: "https://static-01.daraz.com.np/p/28a3252842056b2e13d6ebc0eafa5af3.png_300x0q75.webp"
                         }
                    } />

                    <ImageWithTitleCard data={
                         {
                              _id: "",
                              title: "Gaming Chairs",
                              slug: "/category/gaming-chairs",
                              image: "https://static-01.daraz.com.np/p/28a3252842056b2e13d6ebc0eafa5af3.png_300x0q75.webp"
                         }
                    } />

                    <ImageWithTitleCard data={
                         {
                              _id: "",
                              title: "Gaming Chairs",
                              slug: "/category/gaming-chairs",
                              image: "https://static-01.daraz.com.np/p/28a3252842056b2e13d6ebc0eafa5af3.png_300x0q75.webp"
                         }
                    } />

                    <ImageWithTitleCard data={
                         {
                              _id: "",
                              title: "Gaming Chairs",
                              slug: "/category/gaming-chairs",
                              image: "https://static-01.daraz.com.np/p/28a3252842056b2e13d6ebc0eafa5af3.png_300x0q75.webp"
                         }
                    } />
               </div>

               <div className="flex justify-between mx-20 mt-20 border-b border-solid border-teal-500/50 pb-3">
                    <Heading3>
                         <>
                              Product List
                         </>
                    </Heading3>
                    <a className="bg-teal-700 text-white text-center pt-2.5 rounded-lg w-40" href="/catogories">
                         View All 	&rarr;
                    </a>
               </div>

               <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mx-20 my-20">
                    <SingleProductCard data={{}} />
                    <SingleProductCard data={{}} />
                    <SingleProductCard data={{}} />
                    <SingleProductCard data={{}} />
                    <SingleProductCard data={{}} />
                    <SingleProductCard data={{}} />
                    <SingleProductCard data={{}} />
                    <SingleProductCard data={{}} />
                    <SingleProductCard data={{}} />
                    <SingleProductCard data={{}} />
                    <SingleProductCard data={{}} />
                    <SingleProductCard data={{}} />
                    <SingleProductCard data={{}} />
                    <SingleProductCard data={{}} />
                    <SingleProductCard data={{}} />
                    <SingleProductCard data={{}} />
                    <SingleProductCard data={{}} />
                    <SingleProductCard data={{}} />
                    <SingleProductCard data={{}} />
                    <SingleProductCard data={{}} />
                    <SingleProductCard data={{}} />


               </div>




          </>

     )
}

export default LandingPage;