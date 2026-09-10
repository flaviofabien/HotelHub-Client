import CardBig from "../../Component/ui/card/CardBig";
import Layout from "./Layout";
import Img7 from "../../assets/img7.png";
import TitleHead from "../../Component/ui/typo/TitleHead";
import Line from "../../Component/ui/Line";
import CardTesti from "../../Component/ui/card/CardTesti";
import Img4  from "../../assets/img4.jpg" 
import Img5  from "../../assets/img5.jpg" 
import Img6  from "../../assets/img6.jpg" 
import CardNormal from "../../Component/ui/card/CardNormal";

export default function About() {
  return (
    <Layout>
      <section className="text-center mt-16">
        <TitleHead title='ABOUT OUR COMPANY.' />
        <CardBig title="PREASENT JUSTO DOLOR,LOBORTIS QUIS, LOBORTIS DIGNISSIM, PULVINAR AC, LOREM"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum iure officiis quibusdam natus, alias repudiandae ipsam aliquam porro doloremque numquam sunt quod temporibus eius molestias excepturi cum minima at iste?
        Voluptatum nulla consequuntur, dolorem repellat iusto consequatur beatae, sapiente cupiditate odit voluptas quam dolore voluptate, perferendis perspiciatis! Vel aliquam esse amet fugit. Laboriosam accusamus eos placeat minima quia tempore ab!
        Vero, consequatur pariatur, atque excepturi nulla iusto quam dignissimos unde a dicta ipsam omnis aut labore. Ex quis sed in velit nisi cupiditate! Nobis, illo dolores? Itaque facilis cumque fugit!
        Nulla, nihil esse accusamus consequatur possimus eaque, ducimus neque vero quia eius expedita rerum veniam tempora ratione ipsam quos incidunt voluptate a quisquam. Aliquam maxime vel debitis sit magnam explicabo  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, doloremque eligendi! Repudiandae, fugit! Nam magnam et accusamus facilis quia voluptatem placeat, perspiciatis voluptate maxime ab qui nulla error eligendi necessitatibus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, doloremque eligendi! Repudiandae, fugit! Nam magnam et accusamus facilis quia voluptatem placeat, perspiciatis voluptate maxime ab us.?"
        image={Img7}
        />
        <Line />
        <div className='text-center my-20 '>
          <TitleHead title='OUR STAFF.' />
          <div className='flex mt-16 gap-8 w-full  justify-between flex-col lg:flex-row items-center'>
          
            <CardTesti title='ANNA LEE' description='soluta consequuntur. Animi quidem quam saepe tempora sunt impedit explicabo.'  image={Img4} />
          
            <CardTesti title='JHON DOE' description='soluta consequuntur. Animi quidem quam saepe tempora sunt impedit explicabo.'  image={Img5} />
          
            <CardTesti title='ABY GUIS' description='soluta consequuntur. Animi quidem quam saepe tempora sunt impedit explicabo.'  image={Img6} />
          </div>
        </div>
        <Line />
        <div className="my-20" >
          <TitleHead title='OUR METHODS.' />
          <div className="flex gap-8 justify-between mt-8 flex-col lg:flex-row items-center">
            <CardNormal image={Img5} description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum iure officiis quibusdam natus, alias repudiandae ipsam aliquam porro doloremque numquam sunt quod temporibus eius molestias excepturi cum minima at iste?
          Voluptatum nulla consequuntur, dolorem repellat iusto consequatur beatae, sapiente cupiditate odit voluptas quam dolore voluptate, perferendis perspiciatis! Vel aliquam esse amet fugit. Laboriosam accusamus eos placeat minima quia tempore ab!
          Vero, consequatur pariatur, atque excepturi nulla iusto quam dignissimos unde a dicta ipsam omnis aut labore. Ex quis sed in velit nisi cupiditate! Nobis, illo dolores? Itaque facilis cumque fugit!
          Nulla, nihil esse accusamus consequatur possimus eaque, ducim"
          title="PREASENT JUSTO DOLOR,LOBORTIS QUIS, LOBORTIS DIGNISSIM, PULVINAR AC, LOREM" />
            <CardNormal image={Img6} description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum iure officiis quibusdam natus, alias repudiandae ipsam aliquam porro doloremque numquam sunt quod temporibus eius molestias excepturi cum minima at iste?
          Voluptatum nulla consequuntur, dolorem repellat iusto consequatur beatae, sapiente cupiditate odit voluptas quam dolore voluptate, perferendis perspiciatis! Vel aliquam esse amet fugit. Laboriosam accusamus eos placeat minima quia tempore ab!
          Vero, consequatur pariatur, atque excepturi nulla iusto quam dignissimos unde a dicta ipsam omnis aut labore. Ex quis sed in velit nisi cupiditate! Nobis, illo dolores? Itaque facilis cumque fugit!
          Nulla, nihil esse accusamus consequatur possimus eaque, ducim"
          title="PREASENT JUSTO DOLOR,LOBORTIS QUIS, LOBORTIS DIGNISSIM, PULVINAR AC, LOREM" />
          </div>
        </div>
      </section>
    </Layout>
  )
}