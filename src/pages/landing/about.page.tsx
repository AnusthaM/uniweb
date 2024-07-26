import image from "../../assets/images/image.png"
const AboutPage = () => {
     return (
          <>
               <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                    <img
                         alt=""
                         src={image}
                         className="absolute inset-0 h-full w-full object-cover" />

                    <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                         <div className="p-4 sm:p-6">


                              <h3 className="mt-0.5 text-3xl text-cyan-200">About Us</h3>


                              <p className="mt-2 -3 text-lg/relaxed text-gray-300">
                                   Finding the right college can be a daunting task, but with the advent of online college finders, the process has become more streamlined and accessible. These platforms serve as virtual gateways to a myriad of educational opportunities, offering comprehensive databases of colleges, universities, and programs worldwide.
                                   <br />By simply entering criteria such as desired location, field of study, cost constraints, or even specific academic interests, prospective students can swiftly narrow down their options. Advanced filters further refine searches based on admission requirements, campus facilities, student reviews, and alumni success stories, providing a holistic view of each institution.
                              </p>
                         </div>
                    </div>
               </article>

               {/* <article className="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6">
                    <div className="flex items-center gap-4">
                         <div>
                              <p className="text-sm text-gray-500">Profit</p>

                              <p className="text-2xl font-medium text-gray-900">$240.94</p>
                         </div>
                    </div>

                    <div className="inline-flex gap-2 rounded bg-green-100 p-1 text-green-600">


                         <span className="text-xs font-medium"> 67.81% </span>
                    </div>
               </article>

               <article className="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6">
                    <div className="flex items-center gap-4">

                         <div>
                              <p className="text-sm text-gray-500">Profit</p>

                              <p className="text-2xl font-medium text-gray-900">$240.94</p>
                         </div>
                    </div>

                    <div className="inline-flex gap-2 rounded bg-red-100 p-1 text-red-600">


                         <span className="text-xs font-medium"> 67.81% </span>
                    </div>
               </article> */}


          </>
     )
}
export default AboutPage