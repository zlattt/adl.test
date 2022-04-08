import * as React from "react"
import { useState, useEffect, useRef, useContext } from "react"
//import PropTypes from "prop-types"
import { Link } from "gatsby"

import { gsap } from "gsap"

import Line from "../components/line"

const loremIpsum = `The standard Lorem Ipsum passage, used since the 1500s
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

1914 translation by H. Rackham
"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

1914 translation by H. Rackham
"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."`

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
        pageTitle: "Декоративные Панно",
        url: "",
      },
      {
        id: "22",
        pageTitle: "Садовые Вазы",
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
        id: "26",
        pageTitle: "Картины из Мха",
        url: "",
      }

    ]
  },
  {
    id: "3",
    pageTitle: "Декоративные Работы",
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
        pageTitle: "Гипсовая Лепнина и Молдинги",
        url: "",
      },   
    ]
  },
  {
    id: "4",
    pageTitle: "Магазин",
    url: "",
  },
  {
    id: "5",
    pageTitle: "Контакты",
    url: "",
  },
]

const Menu = ({ menuIsOpen, headerColor }) => {

  //const [menuOpen, setMenuOpen] = useState(menuIsOpen);

  //const tl = useRef(() => gsap.timeline());
  const [tl, setTl] = useState();


  const menuRef = useRef(null);
  const menuItemsRef = useRef([]);
  menuItemsRef.current = [];

  useEffect(() => {
    const tl = gsap.timeline({ paused: true, }).to(menuRef.current, { y: "0%", ease: "power2.inOut", });
    setTl(tl);
    console.log('setTl useEffect');
  }, [])

  useEffect(() => {
    if (menuIsOpen !== null && tl) {
      tl.play();
      tl.reversed(!menuIsOpen);
    }
    console.log('menuIsOpen useEffect');
  }, [menuIsOpen])



  {//menuIsOpen ? "[pointerEvents:auto]" : "[transform:translate3d(0,-100%,0)]
        //[transition:all_0.5s_ease-out]
        }
return (
  <>
  <div ref={menuRef}
       class={`
        p-4 [overflow-y:auto]
        
       `}
       style={{ 
         ...(menuIsOpen && {pointerEvents: `auto`}),
         //height: `100%`,
         //transition: `all 1s ease-out`,
         height: `100%`,
         transform: `translate(0, -100%)`,
         backgroundColor: headerColor,
       }}
  >

    <nav 
         style={{
           display: `grid`,
           gridTemplateColumns: `1fr 1fr`,
           //gridTemplateRows: `1fr 1fr 1fr 1fr 1fr`,
         }}
    >
      <ul
          style={{
            display: `grid`,
            gridAutoRows: `1fr`,

            justifySelf: `center`,
            alignSelf: `center`,
          }}        
      >

        { menuItems.map( (item, index) => 
        <li key="item.id"
            style={{
              position: "relative",
            }}
        >

          { index && 
            <Line top="0" size="2" offset={index/menuItems.length} timeline={tl} duration="1" delay={(menuItems.length-index)*0.1} /> 
          }

          <Link to={ item.url }>

            { index }. { item.pageTitle }
            
          </Link>

          { item.subcat && <p>yes</p> }     

        </li>
        )}

      </ul>
    </nav>

    <div 
         style={{
           position: `absolute`,
           bottom: `2rem`,
           right: `1rem`,
           //textAlign: `right`,
         }}
    >     
      <p>ArtDecorLab</p>
    </div>
          
    <Line bottom="1rem" offset="0.3" />

  </div>
  </>
)}

export default Menu