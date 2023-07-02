import { FooterComponent, HeaderComponent } from "../../components/modules";
import { Carousel } from "../../components/Carousel/Carousel"
import {
  Testimoni,
  OurMap,
  Partner,
  Favorite,
  Teamwork,
  Hero,
} from "../../components/molecules";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      {/* <Hero /> */}
      <Carousel/>
      <Teamwork/>
      <Testimoni/>
      <Favorite />
      <FooterComponent />
    </>
  );
}
