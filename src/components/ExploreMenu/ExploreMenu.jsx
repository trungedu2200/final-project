import React, { useContext } from 'react'
import './ExploreMenu.css'
import { StoreContext } from '../../Context/StoreContext'
import menuAll from '../../assets/menu_0.png'

const ExploreMenu = ({category, setCategory}) => {

  const {menu_list} = useContext(StoreContext);
  
   // Add the "All" category at the beginning of the menu_list array
   const modifiedMenuList = [{ menu_name: "All", menu_image: menuAll }, ...menu_list];

   return (
     <div className='explore-menu' id='explore-menu'>
       <h1>Explore our menu</h1>
       <p className='explore-menu-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ipsa recusandae eius sed perspiciatis nihil natus soluta, quod est tenetur suscipit dolorum blanditiis placeat dignissimos dicta? Veritatis eum expedita alias?</p>
       <div className="explore-menu-list">
         {modifiedMenuList.map((item,index)=>{
             return (
                 <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                     <img src={item.menu_image} className={category===item.menu_name?"active":""} alt="" />
                     <p>{item.menu_name}</p>
                 </div>
             )
         })}
       </div>
       <hr />
     </div>
   )
 }

export default ExploreMenu
