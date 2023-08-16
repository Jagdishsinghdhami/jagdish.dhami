import React from 'react'
import { Createnav } from './createnav';

export const Nav = () => {
    
const navLinks = [
    {
        id:"1",
        name: "Categories",
        link: "#awardCategories",
        className: "scrollTo" 
    },
    {
        id:"2",
        name: "Media",
        link: "#articlesSec",
        className: "scrollTo" 
    },
    {
        id:"3",
        name: "Program Phases",
        link: "#programPhaseSec",
        className: "scrollTo" 
    },
    {
        id:"4",
        name: "Past Editions",
        link: "/spotlight/et_msmeawards2023_pastedition.cms",
        className: "scrollTo" 
    },{
        id:"5",
        name: "FAQs",
        link: "#faqQuestions",
        className: "scrollTo" 
    },
]

// const LinkItems = navLinks.map((item) =>  {
//         return(
//             <li key={item.id}>
//                 <a className={item.className} href={item.link}>{item.name}</a>
//             </li>
//         )
//     }   
// );   

return (
    <>
        <ul className="nav navbar-nav dp_row dp_justifycontentcenter">
            <li className="homebtn">
                <a href="/spotlight/et_msmeawards2023.cms">
                    <span>Home</span>
                </a>
            </li>
           
            <li className="loginNow noUnderline">
                <a href="/spotlight/et_msmeawards2023_login.cms" className="homeHeader"><span>Register Now</span></a>
            </li>

        </ul>
    </>
)
}
