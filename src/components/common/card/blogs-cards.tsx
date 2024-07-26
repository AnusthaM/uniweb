import p1 from "../../../assets/images/p1.png"
import p2 from "../../../assets/images/p2.png"
import p3 from "../../../assets/images/p3.png"
import p4 from "../../../assets/images/p4.png"
import p5 from "../../../assets/images/p5.png"

import { Card } from "flowbite-react";
// import { PagationComponent } from "../pagation/pagation.component"
const BlogCards = () => {
     return ( <>
          <section className="h-auto justify-center justify-items-center mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

               <Card
                    className="max-w-sm max-h-sm shadow-lg hover:shadow-sky-950 "
                    imgAlt="profile"
                    imgSrc={p5}>

                    <p className="font-normal text-cyan-700 dark:text-cyan-200">
                         With up-to-date information on admissions requirements, tuition costs, and student reviews, it simplifies the research process and helps users make informed decisions.
                    </p>
               </Card>


               <Card
                    className="max-w-sm max-h-sm shadow-lg hover:shadow-sky-950 "
                    imgAlt="profile"
                    imgSrc={p1}>
                    <p className="text-xl font-bold tracking-tight text-cyan-950 dark:text-sky-100">
                         It stands out for
                    </p>
                    <p className="font-normal text-cyan-700 dark:text-cyan-200">
                         its strong academic programs, vibrant campus life, and supportive community. With a diverse range of majors and dedicated faculty, students benefit from a well-rounded education that prepares them for success..
                    </p>
               </Card>



               <article className=" flex max-w-sm 
              max-h-sm
               bg-white transition hover:shadow-xl hover:shadow-sky-950">
                    <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                         <time
                              dateTime="2024-06-10"
                              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-sky-900" >
                              <span>2024</span>
                              <span className="w-px flex-1 bg-sky-900/10"></span>
                              <span> June 10</span>
                         </time>
                    </div>

                    <div className="hidden sm:block sm:basis-56">
                         <img
                              alt=""
                              src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                              className="aspect-square h-full w-full object-cover" />
                    </div>

                    <div className="flex flex-1 flex-col justify-between">
                         <div className="border-s border-sky-900/10 p-4 sm:border-l-transparent sm:p-6">
                              <a href="#">
                                   <h3 className="font-bold uppercase text-cyan-900">
                                        It's important
                                   </h3>
                              </a>

                              <p className="mt-2  text-sm/relaxed text-cyan-700">
                                   to use multiple sources when researching colleges. While online college finders can streamline the process, they may not capture every detail or update information in real time.
                              </p>
                         </div>
                    </div>
               </article>


               <Card
                    className="max-w-sm max-h-sm shadow-lg hover:shadow-sky-950 "
                    imgAlt="profile"
                    imgSrc={p2}>
                    <p className="text-xl font-bold tracking-tight text-cyan-950 dark:text-sky-100">
                         UniWeb
                    </p>
                    <p className="font-normal text-cyan-700 dark:text-cyan-200">
                         is an excellent digital tool for prospective students seeking their ideal college match. It offers a streamlined and intuitive interface that allows users to filter institutions based on a variety of criteria.
                    </p>
               </Card>



               <Card
                    className="max-w-sm max-h-sm shadow-lg hover:shadow-sky-950 "
                    imgAlt="profile"
                    imgSrc={p4}>
                    <p className="text-xl font-bold tracking-tight text-cyan-950 dark:text-sky-100">
                         Overall
                    </p>
                    <p className="font-normal text-cyan-700 dark:text-cyan-200">
                         Online College Finder is a highly useful resource for efficiently narrowing down college choices and exploring potential fits.
                    </p>
               </Card>


               <article className=" flex max-w-sm 
              max-h-sm
               bg-white transition hover:shadow-xl hover:shadow-sky-950">
                    <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                         <time
                              dateTime="2024-06-10"
                              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-sky-900" >
                              <span>2024</span>
                              <span className="w-px flex-1 bg-sky-900/10"></span>
                              <span> June 10</span>
                         </time>
                    </div>

                    <div className="hidden sm:block sm:basis-56">
                         <img
                              alt=""
                              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                              className="aspect-square h-full w-full object-cover" />
                    </div>

                    <div className="flex flex-1 flex-col justify-between">
                         <div className="border-s border-sky-900/10 p-4 sm:border-l-transparent sm:p-6">
                              <a href="#">
                                   <h3 className="font-bold uppercase text-cyan-900">
                                        It's important
                                   </h3>
                              </a>

                              <p className="mt-2  text-sm/relaxed text-cyan-700">
                                   to use multiple sources when researching colleges. While online college finders can streamline the process, they may not capture every detail or update information in real time.
                              </p>
                         </div>
                    </div>
               </article>




               <Card
                    className="max-w-sm max-h-sm shadow-lg hover:shadow-sky-950 "
                    imgAlt="profile"
                    imgSrc={p3}>
                    <p className="text-xl font-bold tracking-tight text-cyan-950 dark:text-sky-100">
                         They
                    </p>
                    <p className="font-normal text-cyan-700 dark:text-cyan-200">
                         provide reviews and ratings from current and former students, offering firsthand insights into campus life, academic quality, and faculty engagement.
                    </p>
               </Card>

               <Card
                    className="max-w-sm max-h-sm shadow-lg hover:shadow-sky-950 "
                    imgAlt="profile"
                    imgSrc="https://images.pexels.com/photos/4927361/pexels-photo-4927361.jpeg?auto=compress&cs=tinysrgb&w=800">

                    <p className="font-normal text-cyan-700 dark:text-cyan-200">
                         This feedback can be instrumental in helping applicants make informed decisions. Moreover, these platforms often include resources such as scholarship databases, application tips, and career advice.
                    </p>
               </Card>


               <article className=" flex max-w-sm 
              max-h-sm
               bg-white transition hover:shadow-xl hover:shadow-sky-950">
                    <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                         <time
                              dateTime="2024-01-23"
                              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-sky-900" >
                              <span>2024</span>
                              <span className="w-px flex-1 bg-sky-900/10"></span>
                              <span> January 23</span>
                         </time>
                    </div>

                    <div className="hidden sm:block sm:basis-56">
                         <img
                              alt=""
                              src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                              className="aspect-square h-full w-full object-cover" />
                    </div>

                    <div className="flex flex-1 flex-col justify-between">
                         <div className="border-s border-sky-900/10 p-4 sm:border-l-transparent sm:p-6">
                              <a href="#">
                                   <h3 className="font-bold uppercase text-cyan-900">
                                        By narrowing down
                                   </h3>
                              </a>

                              <p className="mt-2  text-sm/relaxed text-cyan-700">
                                   choices based on these criteria, users can efficiently identify institutions that align with their goals and financial situation.

                                   Additionally, many online college finders provide reviews and ratings from current and former students.
                              </p>
                         </div>
                    </div>
               </article>



          </section>
     </> )
}
export default BlogCards