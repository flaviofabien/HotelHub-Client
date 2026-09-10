import CardSimple from '../../Component/ui/card/CardSimple';
import TitleHead from '../../Component/ui/typo/TitleHead';
import Line from '../../Component/ui/Line';
import Layout from './Layout'
import { FaCalendarCheck, FaIdCard,FaPuzzlePiece } from "react-icons/fa";
import Img1  from "../../assets/img1.jpg" 
import Img2  from "../../assets/img2.jpg" 
import Img3  from "../../assets/img3.jpg" 
import Img4  from "../../assets/img4.jpg" 
import Img5  from "../../assets/img5.jpg" 
import Img6  from "../../assets/img6.jpg" 
import CardTextOn from '../../Component/ui/card/CardTextOn';
import CardTesti from '../../Component/ui/card/CardTesti';

function Home() {
  return (
    <>
      <Layout>
        <section className='w-full'>
          <div className='flex lg:justify-between w-full mt-8 lg:flex-row flex-col gap-4 items-center justify-center"'>
            <CardSimple 
              description='Lorem ipsum dolor, sit  quibusdam ea possimus consectetur harum nam. Omnis aspernatur sunt hic earum dolor. Autem doloribus atque ea ad? ' 
              icons={<FaIdCard size={60} />}
              title='INVESTMENT'
              nameButton='more'
              />
            <CardSimple 
              description='Lorem ipsum dolor, sit  quibusdam ea possimus consectetur harum nam. Omnis aspernatur sunt hic earum dolor. Autem doloribus atque ea ad? ' 
              icons={<FaCalendarCheck size={60}  />}
              title='PLANNING'
              nameButton='more'
              />
            <CardSimple 
              description='Lorem ipsum dolor, sit  quibusdam ea possimus consectetur harum nam. Omnis aspernatur sunt hic earum dolor. Autem doloribus atque ea ad? ' 
              icons={<FaPuzzlePiece size={60}  />}
              title='ANALYSE'
              nameButton='more'
              />
          </div>
          <Line />
          <div className='text-center my-20 '>
            <TitleHead title='RECENT PROJECT.' />
            <div className='flex lg:justify-center mt-8 flex-col lg:flex-row items-center'>
              <img className='w-80 h-80 object-cover' src={Img1} alt="" />
              <img className='w-80 h-80 object-cover' src={Img2} alt="" />
              <img className='w-80 h-80 object-cover' src={Img3} alt="" />
            </div>
          </div>
          <Line />
          <div className='text-center my-20 '>
            <TitleHead title='HOT NEWS.' />
            <div className='justify-between flex flex-col lg:flex-row items-center mt-8 ' >
              <CardTextOn title='22' secondTitle='OCT.2023' description='
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam molestias distinctio magni nulla labore eos corrupti s.' nameButton='more'/>
              <CardTextOn title='20' secondTitle='OCT.2023' description='
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam molestias distinctio magni nulla labore eos corrupti s.' nameButton='more'/>
              <CardTextOn title='14' secondTitle='OCT.2023' description='
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam molestias distinctio magni nulla labore eos corrupti s.' nameButton='more'/>
            </div>
          </div>
          <Line />
          <div className='text-center my-20 '>
            <TitleHead title='TESTIMONIALS.' />
            <div className='flex mt-16 gap-8 w-full  justify-between flex-col lg:flex-row items-center'>
             
              <CardTesti title='ANNA LEE' description='soluta consequuntur. Animi quidem quam saepe tempora sunt impedit explicabo.'  image={Img4} />
             
              <CardTesti title='JHON DOE' description='soluta consequuntur. Animi quidem quam saepe tempora sunt impedit explicabo.'  image={Img5} />
             
              <CardTesti title='ABY GUIS' description='soluta consequuntur. Animi quidem quam saepe tempora sunt impedit explicabo.'  image={Img6} />
            </div>
          </div>
           <Line />
           <div className='text-center my-20 '>
              <TitleHead title='PARTNERS.' />
              <Line />
              <div className='flex justify-between mt-8 text-6xl font-black text-(--color-koromiko) flex-col lg:flex-row items-center'>
                <h4>CLE<span className='text-7xl text-gray-300'>V</span>ER</h4>
                <h4 className='italic text-7xl font-light'>TU42</h4>
                <h4 className='border-t border-b'>STARCORT</h4>
                <h4 className='border-t font-mono'>SECOND</h4>
              </div>
              <Line />
           </div>
        </section>
      </Layout>
    </>
  )
}
export default Home