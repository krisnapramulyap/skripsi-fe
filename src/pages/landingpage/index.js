import { FooterComponent, HeaderComponent } from "../../components/modules";
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
      <Hero />
      <Teamwork />
      <OurMap />
      <FooterComponent />
    </>
  );
}
