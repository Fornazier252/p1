import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';

import '@splidejs/splide/css';

import Client1 from './../img/client-1.png'
import Client2 from './../img/client-2.png'
import Client3 from './../img/client-3.png'
import Client4 from './../img/client-4.png'
import Client5 from './../img/client-5.png'
import Client6 from './../img/client-6.png'
import Client7 from './../img/client-7.png'
import Client8 from './../img/client-8.png'

export default function Slide() {
  return (
    <Splide options={{
      perPage: 4,
      autoplay: true,
      gap: '40px',
      type: "loop",
    }}
    className="max-w-[80%] m-auto "
    >
      <SplideSlide>
        <Image src={Client1} alt="client 1"/>
      </SplideSlide>
      <SplideSlide>
        <Image src={Client2} alt="client 1"/>
      </SplideSlide>
      <SplideSlide>
        <Image src={Client3} alt="client 1"/>
      </SplideSlide>
      <SplideSlide>
        <Image src={Client4} alt="client 1"/>
      </SplideSlide>
      <SplideSlide>
        <Image src={Client5} alt="client 1"/>
      </SplideSlide>
      <SplideSlide>
        <Image src={Client6} alt="client 1"/>
      </SplideSlide>
      <SplideSlide>
        <Image src={Client7} alt="client 1"/>
      </SplideSlide>
      <SplideSlide>
        <Image src={Client8} alt="client 1"/>
      </SplideSlide>
    </Splide>
  )
}