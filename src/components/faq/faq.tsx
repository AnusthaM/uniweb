const FaqComponent = () => {
     return (
          <>
               <div className="space-y-4">
                    <details className="group [&_summary::-webkit-details-marker]:hidden" >
                         <summary
                              className="flex cursor-pointer items-center justify-between gap-1.5  bg-gray-50 p-4 text-sky-900">
                              <h2 className="font-medium">What is Uniweb?</h2>

                              <svg
                                   className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                   xmlns="http://www.w3.org/2000/svg"
                                   fill="none"
                                   viewBox="0 0 24 24"
                                   stroke="currentColor">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                              </svg>
                         </summary>

                         <p className="mt-4 px-4 leading-relaxed text-gray-500">
                              UniWeb is a comprehensive and easy to use online platform that provides free resources and end-to-end premium study abroad services to aspiring students aiming at international education.
                         </p>
                    </details>


                    <details className="group [&_summary::-webkit-details-marker]:hidden" >
                         <summary
                              className="flex cursor-pointer items-center justify-between gap-1.5  bg-gray-50 p-4 text-sky-900">
                              <h2 className="font-medium">How does UniWeb help in seaching for your ideal college?</h2>

                              <svg
                                   className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                   xmlns="http://www.w3.org/2000/svg"
                                   fill="none"
                                   viewBox="0 0 24 24"
                                   stroke="currentColor">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                              </svg>
                         </summary>

                         <p className="mt-4 px-4 leading-relaxed text-gray-500">
                              UniWeb allow you to input specific criteria such as location, size of the college, academic programs offered, tuition costs, and even campus culture or extracurricular activities. This helps narrow down your options based on your preferences.
                         </p>
                    </details>

               </div>
          </>
     )
}
export default FaqComponent