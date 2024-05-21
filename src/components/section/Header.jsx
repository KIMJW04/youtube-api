import React from 'react'

import { FaAward } from "react-icons/fa6";
import { headerMenus, searchKeyword, snsLinks } from "../../data/header.js";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header id='header' role='banner'>
            <h1 className='header__logo'>
                <a href="/">
                    <em><FaAward /></em>
                    <span>history<br /><i>youtube</i></span>
                </a>
            </h1>
            <nav className='header__menu'>
                <ul className='menu'>
                    {headerMenus.map((menu, key) => (
                        <li key={key}>
                            <Link to={menu.src}>{menu.icon} <i>{menu.title}</i></Link>
                        </li>
                    ))}
                    {/* {<li><a href="/today">추천영상</a></li>} */}
                </ul>
                <ul className='keyword'>
                    {searchKeyword.map((word, key) => (
                        <li key={key}>
                            <Link tp={word.src}>{word.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className='header__sns'>
                <ul>
                    {snsLinks.map((sns, key) => (
                        <li key={key}>
                            <Link to={sns.src} rel="noopener noreferrer" aria-label={sns.title}>{sns.icon}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}

export default Header
