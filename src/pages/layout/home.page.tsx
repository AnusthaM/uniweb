import { Outlet } from "react-router-dom"
import { FooterComponent } from "../../components/common/footer/common.footer"
import { HomeHeader } from "../../components/common/header"

const HomePageLayout = () => {
     return (
          <>
               <HomeHeader />
               <Outlet />
               <FooterComponent />
          </>
     )
}
export default HomePageLayout