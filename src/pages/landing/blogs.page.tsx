import BlogCards from "../../components/common/card/blogs-cards"

const BlogsPage = () => {
     return (
          <>


               <div className=" flex mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-sky-950 shadow-lg shadow-sky-950 ">
                    <div className=" gap-4 md:flex-row md:items-center md:justify-between">
                         <div>
                              <h1 className="text-2xl font-bold text-gray-100 sm:text-3xl">Blog Posts</h1>

                              <p className="mt-1.5 text-sm text-gray-500">
                                   9 Blogs in Total
                              </p>
                         </div>
                    </div>
               </div>

               <BlogCards />

          </>
     )
}
export default BlogsPage