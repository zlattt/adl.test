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

  const [menuOpen, setMenuOpen] = useState(true);

  useEffect(() => console.log('hi from menu'));
  useEffect(() => console.log(dimensions), []);
  useEffect(() => console.log(width), []);
  
  

  //const headerDimensions = useRefDimensions(headerRef);

return (
  <>

  <button name="Menu" onClick={() => setMenuOpen(!menuOpen)} class="pb-1">
     {/*<svg class="h-5 w-5 
                    xs:h-6 xs:w-6 
                    md:h-7 md:w-7" 
          fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>*/}
    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
      <g transform="matrix(2,0,0,2,0,0)"><g>
        <line x1="13.5" y1="2" x2="0.5" y2="2" style={{fill: "none", stroke: "#000000", strokeLinecap: "round", strokeLinejoin: "round"}}></line>
        <line x1="13.5" y1="7" x2="0.5" y2="7" style={{fill: "none", stroke: "#000000", strokeLinecap: "round", strokeLinejoin: "round"}}></line>
        <line x1="13.5" y1="12" x2="0.5" y2="12" style={{fill: "none", stroke: "#000000", strokeLinecap: "round", strokeLinejoin: "round"}}></line>
      </g></g>
    </svg>
  </button>

  { menuOpen &&
  <div class="absolute left-0 bottom-0 w-[100%]
            border border-black
            text-right
           ">
    <p>menu test - {dimensions.width} x {dimensions.height} - hook - {width}</p>
  </div>
  }
 
  <div class="absolute right-0 bottom-[50px] w-[100%]
          border border-black
         ">
    <p>menu test - {dimensions.width} x {dimensions.height} - hook - {width}</p>
  </div>
 
  </>
)}

export default Menu