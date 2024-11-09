import logo from "../assets/header_logo.png";
import { MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";

function Header() {

    const [mobileMenu, showMobileMenu] = useState(false);
    function linksConfig() {

        var links = document.querySelectorAll("[data-link]");
        console.log(links);
        links[0].classList.add("active");
        links[4].classList.add("active");

        links.forEach(link => {
            link.addEventListener("click", (e) => {
                if(e.target){}

                Array.prototype.slice.call(links).map(l => l.classList.remove("active"));
                link.classList.add("active");
            })
        })
    }

    useEffect(() => {
        if (mobileMenu) linksConfig();
    }, [mobileMenu]);

    return (
        <header>
            <div className="header_container">
                <a href="/">
                    <img src={logo} width={"150px"} />
                </a>
                <div className="nav hide-on-mobile" >
                    <ul>
                        <li>
                            <a data-link href="/#/search">Search</a>
                        </li>
                        <li>
                            <a data-link href="https://girmantech.com" target="_blank">Website</a>
                        </li>
                        <li>
                            <a data-link href="https://www.linkedin.com/company/girmantech/" target="_blank">Linkedin</a>
                        </li>
                        <li>
                            <a data-link href="mailto:contact@girmantech.com" target="_blank">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="show-on-mobile">
                    <MenuIcon onClick={() => showMobileMenu(!mobileMenu)} />
                    {mobileMenu && <div className="nav">
                        <ul className="mobile-nav">
                            <li>
                                <a data-link href="/#/search">Search</a>
                            </li>
                            <li>
                                <a data-link href="https://girmantech.com" target="_blank">Website</a>
                            </li>
                            <li>
                                <a data-link href="https://www.linkedin.com/company/girmantech/" target="_blank">Linkedin</a>
                            </li>
                            <li>
                                <a data-link href="mailto:contact@girmantech.com" target="_blank">Contact</a>
                            </li>
                        </ul>
                    </div>}
                </div>
            </div>
        </header>
    )
}


export default Header;