import { Carousel } from "flowbite-react";
import { SingleSlider } from "./__contracts/slider.contracts";

const SliderComponent = ( { data }: { data: any[] } ) => {
  return (
    <>
      <Carousel >
        {
          data && data.map( ( row: SingleSlider, i: number ) => (
            row.link ? <a key={i} href={row.link}> <img src={row.image} alt={row.title} /></a> : <img key={i} src={row.image} alt={row.title} />

          ) )
        }
      </Carousel>
    </>
  )
}
export default SliderComponent;