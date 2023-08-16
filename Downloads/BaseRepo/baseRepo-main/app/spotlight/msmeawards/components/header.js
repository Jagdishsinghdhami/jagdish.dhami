import React from 'react'
import { Nav } from './nav'

export const Header = () => {
  return (
    <>
      <header className="fixednav navbgwht">
    	<nav className="navbar">
            <div className="container-fluid headermain dp_row dp_justifycontentspcbet aligncenter">
                <div className="navbar-header">
                    <div className="menubtnbox">
                        <div className="menubtn">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </div>
                    </div>
                    <div className="dp_row dp_justifycontentcenter alignbaseline menuLogoMain">
                        <div className="menulogobox">
                            <a className="navbar-brand" href="/spotlight/et_msmeawards2023.cms"> <img src="https://economictimes.indiatimes.com/photo/101187191.cms"/></a>
                        </div>
                        <div className="partnerLogo">
                            <a className="navbar-brand nocursr" href="javascript:void(0)"> </a>
                        </div>
                    </div>
                </div>
                <div className="collesped_menu">
                    <div className="mobbg">
                        <div className="menuOpenlogobox">
                            <a className="navbar-brand" href="/spotlight/et_msmeawards2023.cms"> <img src="https://economictimes.indiatimes.com/photo/101187191.cms"/></a>
                        </div>
                        <Nav/>     
                    </div>
                </div>
            </div>
        </nav>
    </header>  
    </>
  )
}
