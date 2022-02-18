import * as React from "react"
import {useState} from "react"
//import PropTypes from "prop-types"
import { Link } from "gatsby"

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

const Menu = ({headerDimensions, active, full}) => {

  const [isShowing, setIsShowing] = useState(false);

  return (
    <>

      <button onClick={() => setIsShowing(!isShowing)} class="pb-1">
        {/*<svg xmlns="http://www.w3.org/2000/svg" style={{ filter: `drop-shadow(1px 1px 1px rgb(0, 0, 0)` }} class="h-5 w-5 xs:h-6 xs:w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="black">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
        </svg>*/}
        <svg class="h-5 w-5 
                    xs:h-6 xs:w-6 
                    md:h-7 md:w-7
                   " 
             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      </button>
  
      {isShowing === true && 
      
      <div class="absolute left-0 bottom-0 w-[100%]
                  border border-black
                 "
           style={{ height: `calc(100vh - ${headerDimensions.height}px)`, 
                    transform: `translateY(calc(100% + ${headerDimensions.borderB}))`
           }}
      >
        <p>{headerDimensions.height}' '{headerDimensions.borderB}</p>          
        <nav>
          <ul>
            {menuItems.map( (item, index) => 
              <>

                <li key="item.id">
                  <Link to={item.url}>
                    {index}
                    " "
                    {item.pageTitle}
                  </Link>
                </li>
                            
                {
                  item.subcat && <p>yes</p>
                  //text-shadow: 2px 2px 0px #0a0a0a;
                }     

              </> 
            )}
          </ul>
        </nav>
      </div>

      }

    </>
  )
}

export default Menu