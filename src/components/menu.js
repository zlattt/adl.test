import * as React from "react"
import {useState, useEffect } from "react"
//import PropTypes from "prop-types"
import { Link } from "gatsby"

import useRefDimensions from "../components/useRefDimensions"



const menuItems = [
  {
    id: "1",
    pageTitle: "Главная",
    url: "/",
  },
  {
    id: "2",
    pageTitle: "Создание Предметов Декора",
    url: "",
    subcat: [
      {
        id: "21",
        pageTitle: "Интерьерные Картины",
        url: "",
      },
      {
        id: "22",
        pageTitle: "Римские Вазы",
        url: "",
      },
      {
        id: "23",
        pageTitle: "Зеркала Бесконечности",
        url: "",
      },
      {
        id: "24",
        pageTitle: "Раковины из Камня",
        url: "",
      },
      {
        id: "25",
        pageTitle: "Столы из Слэба",
        url: "",
      },
      {
        id: "Живые Растительные Стенки и Инсталляции",
        pageTitle: "",
        url: "",
      }

    ]
  },
  {
    id: "3",
    pageTitle: "Услуги",
    url: "/services",
    subcat: [
      {
        id: "31",
        pageTitle: "Золочение",
        url: "",
      },
      {
        id: "32",
        pageTitle: "Декоративная Штукатурка",
        url: "",
      },
      {
        id: "33",
        pageTitle: "Роспись Стен, Фрески и Барельефы",
        url: "",
      },
      {
        id: "34",
        pageTitle: "Стеновые Панели Буазери",
        url: "",
      },
      {
        id: "35",
        pageTitle: "Гипсовая Лепнина",
        url: "",
      },   
    ]
  }
]

const Menu = ({ dimensions, width}) => {

  //const [menuOpen, setMenuOpen] = useState(true);

  useEffect(() => console.log('hi from menu'));
  useEffect(() => console.log(dimensions), []);
  useEffect(() => console.log(width), []);
  
  

  //const headerDimensions = useRefDimensions(headerRef);
  
  //absolute left-0 bottom-0 w-[100%]
  //absolute right-0 bottom-[50px] w-[100%]

return (
  <>

  <div class="
            border border-black
            text-right
           ">
    <p>menu test - {dimensions.width} x {dimensions.height} - hook - {width}</p>
  </div>
  
 
  <div class="
          border border-black
         ">
    <p>menu test - {dimensions.width} x {dimensions.height} - hook - {width}</p>
  </div>
 
  </>
)}

export default Menu