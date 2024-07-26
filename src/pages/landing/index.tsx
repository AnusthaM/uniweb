import "./landing.css";
import TextCardComponent from "../../components/common/card/text-card.component";
import { BannerComponent } from "../../components/banner";
import MultipleCardComponent from "../../components/common/card/cards-with-content";
import FaqComponent from "../../components/faq/faq";
import ArticleComponent from "../../components/article/article-component";

const LandingPage = () => {
     return (
          <>
               <TextCardComponent />

               <span className="flex items-center text-gray-500 h-20">
                    <span className="h-px flex-1 bg-gradient-to-l from-sky-900"></span>
                    <span className="shrink-0 px-6 text-pretty">Gateway To Top Colleges</span>
                    <span className="h-px flex-1 bg-gradient-to-r from-sky-900"></span>
               </span>

               <BannerComponent />


               <MultipleCardComponent />
               <ArticleComponent />

               <span className="flex items-center text-gray-500 h-20">
                    <span className="h-px flex-1 bg-gradient-to-l from-sky-900"></span>
                    <span className="shrink-0 px-6 text-pretty">Frequently Asked Questions</span>
                    <span className="h-px flex-1 bg-gradient-to-r from-sky-900"></span>
               </span>

               <FaqComponent />

          </>

     )
}

export default LandingPage;