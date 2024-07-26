
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

export const FooterComponent = () => {
     return (
          <>
               <Footer container className="bg-sky-50 shadow-md px-3">
                    <div className="w-full">
                         <div className="  grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                         </div>
                         <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                              <div>
                                   <Footer.Title title="Services" />
                                   <Footer.LinkGroup col>
                                        <Footer.Link href="#">Grad College Finder</Footer.Link>
                                        <Footer.Link href="#">UnderGrad College Finder</Footer.Link>
                                   </Footer.LinkGroup>
                              </div>
                              <div>
                                   <Footer.Title title="Follow us" />
                                   <Footer.LinkGroup col>
                                        <Footer.Link href="#">Instagram</Footer.Link>
                                        <Footer.Link href="#">Facebook</Footer.Link>
                                        <Footer.Link href="#">TikTok</Footer.Link>
                                        <Footer.Link href="#">Discord</Footer.Link>
                                   </Footer.LinkGroup>
                              </div>
                              <div>
                                   <Footer.Title title="Legal" />
                                   <Footer.LinkGroup col>
                                        <Footer.Link href="#">Privacy Policy</Footer.Link>
                                        <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                                   </Footer.LinkGroup>
                              </div>
                         </div>
                    </div>

                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                         <Footer.Copyright href="#" by="UniWeb™" year={2024} />
                         <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                              <Footer.Icon href="#" icon={BsFacebook} />
                              <Footer.Icon href="#" icon={BsInstagram} />
                              <Footer.Icon href="#" icon={BsTwitter} />
                              <Footer.Icon href="#" icon={FaLinkedin} />
                         </div>
                    </div>

               </Footer>
          </>
     );
}
