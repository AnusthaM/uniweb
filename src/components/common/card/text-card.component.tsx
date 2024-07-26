import { Card } from "flowbite-react";

const TextCardComponent = () => {
     return ( <>
          <Card href="#" className="w-auto h-80 flex justify-center justify-items-center bg-gradient-to-b from-sky-800 rounded-none shadow-none border-none">
               <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Unlock Your
                    Study Abroad Journey<br />
                    From GRE Prep to Visa!
               </h5>
               <p className="font-normal text-gray-700 dark:text-gray-400">
                    Explore thousands of programs, in various colleges.
                    <br />
                    Choose one that is most suitable for you.
               </p>
          </Card>
     </> );
}
export default TextCardComponent