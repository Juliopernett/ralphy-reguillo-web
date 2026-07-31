import { Hero } from "@/components/sections/Hero";
import { Biography } from "@/components/sections/Biography";
import { Discography } from "@/components/sections/Discography";
import { Gallery } from "@/components/sections/Gallery";
import { Videos } from "@/components/sections/Videos";
import { SocialLinks } from "@/components/sections/SocialLinks";
import { Timeline } from "@/components/sections/Timeline";
import { Booking } from "@/components/sections/Booking";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { getEvents } from "@/lib/events";

export default async function Home() {
  const events = await getEvents();

  return (
    <>
      <Hero />
      <Biography />
      <Discography />
      <Gallery />
      <Videos />
      <SocialLinks />
      <Timeline events={events} />
      <Booking />
      <Stats />
      <Testimonials />
    </>
  );
}
