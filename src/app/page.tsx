"use client"

import Ambev from './../img/Ambev-reproducao-ambevtech.jpg'
import Ambev2 from './../img/Ambevvv.png'
import Ambev3 from './../img/ge-ter-3.jpg'
import Image from 'next/image'
import Slide from '@/component/slide'

import { BiShieldAlt2, BiCubeAlt, BiStoreAlt } from 'react-icons/bi'
import { BsGraphUp, BsDatabase } from 'react-icons/bs'
import { IoMdPhotos } from 'react-icons/io'
import { HiOutlineChatBubbleLeftEllipsis } from 'react-icons/hi2'
import { AiOutlineMail } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'
import { GiBuyCard } from 'react-icons/gi'
import { MdDateRange } from 'react-icons/md'

import home from './../img/cta-bg.jpg'

export default function Page() {

  return (
    <main>
      <nav className='fixed top-0 h-14 flex justify-between w-full bg-black items-center text-white px-[5%] z-50'>
        <div className='flex'>
          <h2 className='font-semibold text-3xl'>GP<span className='text-yellow-500'>.</span></h2>
        </div>

        <button className='border-[1px] border-white border-solid py-1 px-4'>ENTRAR EM CONTATO</button>
      </nav>

      <section style={{ backgroundImage: `url(${Ambev.src})` }} className="h-[100vh] w-full bg-center bg-cover bg-no-repeat">
        <div id="bgc" className='h-full w-full background flex justify-center align-middle items-center flex-col text-center'>
          <h1 className='text-white text-6xl font-bold mobile:text-4xl'>DISTRIBUIDORA DE<br /> FIFOS<span className='text-yellow-500'>.</span>
          </h1>

          <p className='text-white text-2xl mobile:text-base'>Entre em contato e garanta seu pedido</p>
          <p className='text-white text-2xl mobile:text-base '>SEM FILAS RESERVE AGORA MESMO</p>
          <p className='text-yellow-500 text-xl mt-4 mobile:text-base'>CLIQUE AQUI PARA CADASTRAR</p>

          <div className='flex mt-10 gap-x-10 tablet:gap-x-4 mobile:grid mobile:grid-cols-2 mobile:gap-y-3 mobile:gap-x-4 mobile:mt-4'>
            <div className='border-[1px] border-solid border-white px-10 hover:border-yellow-500 text-white font-semibold text-lg transition-all hover:text-yellow-500 mobile:text-base mobile:px-6 mobile:font-medium'>
              <div className='flex justify-center items-center align-middle'>
                <BiStoreAlt className="text-yellow-500" size="40px" />
              </div>
              Bebidas<br />
              Cevada
            </div>
            <div className='border-[1px] border-solid border-white px-10 hover:border-yellow-500 text-white font-semibold text-lg transition-all hover:text-yellow-500 mobile:text-base mobile:px-6 mobile:font-medium'>
              <div className='flex justify-center items-center align-middle'>
                <BsGraphUp className="text-yellow-500" size="40px" />
              </div>
              Palete de <br />
              Bebidas
            </div>
            <div className='border-[1px] border-solid border-white px-10 hover:border-yellow-500 text-white font-semibold text-lg transition-all hover:text-yellow-500 mobile:text-base mobile:px-6 mobile:font-medium'>
              <div className='flex justify-center items-center align-middle'>
                <MdDateRange className="text-yellow-500" size="40px" />
              </div>
              Entrega<br />
              Rápida
            </div>
            <div className='border-[1px] border-solid border-white px-10 hover:border-yellow-500 text-white font-semibold text-lg transition-all hover:text-yellow-500 mobile:text-base mobile:px-6 mobile:font-medium'>
              <div className='flex justify-center items-center align-middle'>
                <GiBuyCard className="text-yellow-500" size="40px" />
              </div>
              Retire no dia
            </div>
            <div className='border-[1px] border-solid border-white px-10 hover:border-yellow-500 text-white font-semibold text-lg transition-all hover:text-yellow-500 mobile:text-base mobile:px-6 mobile:font-medium'>
              <div className='flex justify-center items-center align-middle'>
                <BsDatabase className="text-yellow-500" size="40px" />
              </div>
              Retire na<br />
              hora
            </div>
          </div>
        </div>
      </section>

      <section className='flex max-w-[80%] m-auto gap-x-10 pt-20 pb-40 mobile:flex-col-reverse mobile:max-w-[90%] mobile:pb-10'>
        <div className='flex flex-col items-start justify-center'>
          <h2 className='text-3xl font-bold mb-2 mobile:text-2xl'>Controle de qualidade</h2>
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

      <section className="flex max-w-[80%] m-auto gap-x-10 pt-20 pb-40 mobile:flex-col mobile:max-w-[90%] mobile:pb-20 mobile:pt-10">
        <div className='mobile:pb-4'>
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
        <div id="bgc" className='w-full h-full flex items-center justify-center flex-col mobile:text-center px-4'>
          <h4 className='text-white  font-semibold text-4xl mb-4 mobile:text-2xl'>Solicite seu pedido aqui</h4>
          <p className='text-white text-xl mb-4 mobile:text-sm'>Reserve um Pedido e retire no mesmo dia, com até 50% OFF somente essa semana</p>

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

      <footer className='text-center bg-black text-white text-base py-3'>
        <p>Todos os direitos reservados aos criadores</p>
      </footer>
    </main>
  )
}