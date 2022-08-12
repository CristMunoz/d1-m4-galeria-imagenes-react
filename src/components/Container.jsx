import React from 'react'
import Card from './Card'
import img1 from '../assets/img/img-1.jpg'
import img2 from '../assets/img/img-2.jpg'
import img3 from '../assets/img/img-3.jpg'
import img4 from '../assets/img/img-4.jpg'
import img5 from '../assets/img/img-5.jpg'
import img6 from '../assets/img/img-6.jpg'

const Container = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'> 
          <Card image={img1} title="Lobos" description="La especie de los lobos está considerada como superdepredadora. Esto significa que no tiene competencia externa de otros animales que determinen su población." />
        </div>
        <div className="col-md-4">
          <Card image={img2} title="Águilas" description="Uno de los animales preferidos por una gran mayoría de personas es el águila. Estos depredadores alados, son asesinos elegantes, ágiles, rápidos y muy silenciosos, llegando incluso a matar sin que la víctima se dé cuenta de que está en peligro." />
        </div>
        <div className="col-md-4">
          <Card image={img3} title="Tigres" description="El tigre es un animal que pertenece a la subfamilia de los panterinos, dentro del género Panthera. Dentro de esta misma clasificación, también se engloban otros animales como el león, el jaguar y el leopardo." />
        </div>
        <div className="col-md-4">
          <Card image={img4} title="Rinocerontes" description="Los rinocerontes son unos animales únicos de gran tamaño que cuentan con una piel de color gris realmente gruesa. Existen cinco tipos de rinocerontes distintos en la actualidad y se trata de un animal con un cuerno muy llamativo que hace que actualmente se encuentre en peligro de extinción debido a la caza furtiva." />
        </div>
        <div className="col-md-4">
          <Card image={img5} title="Cocodrilos" description="Los cocodrilos son los reptiles que llevan viviendo con nosotros más de 240 millones de años y a día de hoy son los reptiles más grandes que pueblan la tierra. Con nosotros podrás conocer la evolución que ha seguido esta especie durante tantísimos años además de conocer otras especies que han ido surgiendo de las primitivas y que habitan actualmente con nosotros." />
        </div>
        <div className="col-md-4">
          <Card image={img6} title="Tiburones" description="Los tiburones pertenecen al grupo de los peces cartilaginosos (Chondrichthyes) junto con las rayas y las quimeras. También pueden ser llamados “Condrictíes”, “Condrictios” o “Elasmobranquios”." />
        </div>
      </div>
    </div>
  )
}

export default Container