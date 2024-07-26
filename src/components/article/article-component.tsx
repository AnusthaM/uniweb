import image from "../../assets/images/image.png"
const ArticleComponent = () => {
     return (
          <>
               <article className="overflow-hidden border border-gray-100  bg-gradient-to-br from-sky-900 text-gray-400 shadow-sm h-auto">

                    <section className="overflow-hidden  sm:grid sm:grid-cols-2">
                         <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                              <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right justify-center">
                                   <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                                        Purpose
                                        of<br /> UniWeb
                                   </h2>

                                   <p className="hidden text-gray-300 md:mt-4 md:block">
                                        Finding the right college can be a daunting task, but with the advent of online college finders, the process has become more streamlined and accessible. These platforms serve as virtual gateways to a myriad of educational opportunities, offering comprehensive databases of colleges, universities, and programs worldwide.
                                   </p>

                                   <div className="mt-4 md:mt-8">
                                        <a href="/about" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-cyan-200">
                                             Find out more

                                             <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                                                  &rarr;
                                             </span>
                                        </a>

                                   </div>
                              </div>
                         </div>

                         <img
                              src={image}
                              className="h-32 w-full object-cover sm:h-full"
                         />
                    </section>


               </article >

          </>
     )
}
export default ArticleComponent