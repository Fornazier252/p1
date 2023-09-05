"use client"

import Ambev from './../img/Ambev-reproducao-ambevtech.jpg'
import Ambev2 from './../img/Ambevvv.png'
import Ambev3 from './../img/ge-ter-3.jpg'
import Image from 'next/image'
import Slide from '@/component/slide'

import { BiShieldAlt2, BiCubeAlt } from 'react-icons/bi'
import { IoMdPhotos } from 'react-icons/io'
import { HiOutlineChatBubbleLeftEllipsis } from 'react-icons/hi2'
import { AiOutlineMail } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'
import home from './../img/cta-bg.jpg'

export default function Page() {

  return (
    <main>
      <section style={{ backgroundImage: `url(${Ambev.src})` }} className="h-[100vh] w-full">
        <div id="bgc" className='h-full w-full background flex justify-center align-middle items-center flex-col text-center'>
          <h1 className='text-white text-6xl font-bold'>DISTRIBUIDORA DE<br /> FIFOS<span className='text-yellow-500'>.</span>
          </h1>

          <p className='text-white text-2xl'>Entre em contato e garanta seu pedido</p>
          <p className='text-white text-2xl'>SEM FILAS RESERVE AGORA MESMO</p>
          <p className='text-yellow-500 text-xl mt-4'>CLIQUE AQUI PARA CADASTRAR</p>

          <div className='flex mt-10 gap-x-10'>
            <div className='border-[1px] border-solid border-white p-10 hover:border-yellow-500 text-white font-semibold text-lg transition-all hover:text-yellow-500'>
              Bebidas<br />
              Cevada
            </div>
            <div className='border-[1px] border-solid border-white p-10 hover:border-yellow-500 text-white font-semibold text-lg transition-all hover:text-yellow-500'>
              Palete de <br />
              Bebidas
            </div>
            <div className='border-[1px] border-solid border-white p-10 hover:border-yellow-500 text-white font-semibold text-lg transition-all hover:text-yellow-500'>
              Entrega<br />
              Rápida
            </div>
            <div className='border-[1px] border-solid border-white p-10 hover:border-yellow-500 text-white font-semibold text-lg transition-all hover:text-yellow-500'>
              Retire no dia
            </div>
            <div className='border-[1px] border-solid border-white p-10 hover:border-yellow-500 text-white font-semibold text-lg transition-all hover:text-yellow-500'>
              Retire na<br />
              hora
            </div>
          </div>
        </div>
      </section>

      <section className='flex max-w-[80%] m-auto gap-x-10 pt-20 pb-40'>
        <div className='flex flex-col items-start justify-center '>
          <h2 className='text-3xl font-bold mb-2'>Controle de qualidade</h2>
          <p className='italic'>
            Todas nossas bebidas passam pelo controle de qualidade para ganratir uma bebida de qualidade para todos, trabalhamos empenhados todo dia para melhorar sempre nossas bebidas.
          </p>

          <div className='mt-6 mb-6'>
            <p>
              Controle de Qualidade
            </p>
            <p>
              Entrega Rápida.
            </p>
            <p>
              Retira na hora
            </p>
          </div>

          <p>
            Retire na hora ou agende a retirada de um palete com até 50% OFF, Fale com um especialista agora mesmo.
          </p>
        </div>

        <div>
          <Image src={Ambev2} alt="ambev" />
        </div>
      </section>

      <section>
        <Slide />
      </section>

      <section className="flex max-w-[80%] m-auto gap-x-10 pt-20 pb-40">
        <div>
          <Image src={Ambev3} alt="img" />
        </div>
        <div className='flex flex-col gap-y-4 justify-center'>

          <div className='flex items-center gap-x-4'>
            <HiOutlineChatBubbleLeftEllipsis size="80px" />
            <div>
              <h3>Atendimento Rápido</h3>
              <p>
                Nossas retiradas são rápidas e segura, fale com um especialista agora mesmo
              </p>
            </div>
          </div>

          <div className='flex items-center gap-x-4'>
            <BiCubeAlt size="70px" />
            <div>
              <h3>Retirada na hora</h3>
              <p>
                Reserve seu palete, faça o pagamento e retire no mesmo dia
              </p>
            </div>
          </div>

          <div className='flex items-center gap-x-4'>
            <IoMdPhotos size="60px" />
            <div>
              <h3>Agenda Retirada</h3>
              <p>
                Agende sua retirada em nosso galpão, até no mesmo dia
              </p>
            </div>
          </div>


          <div className='flex items-center gap-x-4'>
            <BiShieldAlt2 size="60px" />
            <div>
              <h3>Solicitar Pedido</h3>
              <p>
                Solicite seu Pedido e aguarde a entrega em seu galpão
              </p>
            </div>
          </div>

        </div>
      </section>

      <section style={{ backgroundImage: `url(${home.src})` }} className="h-[300px] bg-center bg-no-repeat bg-cover w-full">
        <div id="bgc" className='w-full h-full flex items-center justify-center flex-col'>
          <h4 className='text-white  font-semibold text-4xl mb-4'>Solicite seu pedido aqui</h4>
          <p className='text-white text-xl mb-4'>Reserve um Pedido e retire no mesmo dia, com até 50% OFF somente essa semana</p>

          <button className='text-white mt-6 border-2 border-white border-solid py-4 px-10 rounded-md'>CLIQUE AQUI PARA CADASTRAR</button>
        </div>
      </section>


      <section className='py-20 flex flex-col gap-y-4'>
        <div className='flex items-center justify-center gap-x-2'>
          <AiOutlineMail size={30} />
          <p className='text-xl'>contato@suporteambevja.net</p>
        </div>
        <div className='flex items-center justify-center gap-x-2'>
          <FaTelegramPlane size={30} />
          <p className='text-xl'>contato@suporteambevja.net</p>
        </div>
      </section>
    </main>
  )
}