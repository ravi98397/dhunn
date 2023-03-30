import { useState } from "react";
import  FixedHeader from '../FixedHeader/FixedHeader';
import './Header.css';
import { FaLanguage, FaMoon } from "react-icons/fa";
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiUserCircle } from 'react-icons/bi';
import { Link, useLocation } from "react-router-dom";
import SearchBox from "../SearchBox/SearchBox";


const Header = () => {
    const [quickAccess, setQuickAccess] = useState([
        {name:'All'},
        {name:'Trending Songs'},
        {name:'New Songs'},
        {name:'Old Songs'}, 
        {name:'Mood & Geners'},
        {name:'Album'},
        {name:'MyMusic'}]);

    const [spState, setSpState] = useState(true);
    const [spClass, setSpClass] = useState('sidepanel close');
    const location = useLocation();
    const toggleNav = () => {
        console.log('toggle ran');
        if(spState == false){
            setSpState(true);
            setSpClass('sidepanel open');
        }else{
            setSpState(false);
            setSpClass('sidepanel close');
        }
    }

    let getPath = (item) => {
        let arr = item.split(" ");
        let newdata = ""
        for(let i=0; i < arr.length; i++){
            newdata += arr[i];
        }
        return "/"+newdata;
    }
    return (
        <>
            <div id="mySidepanel" className={spClass}>
                <div className="statewrap">
                    <button className="logbtnwrap">
                        <BiUserCircle/>
                        <Link className="user" to={{
                            pathname: "/Login",
                            state: {
                                currentpath: location
                            }
                        }}> 
                            <strong>Login / Sign Up</strong>
                        </Link>
                        
                    </button>
                    <a className="my-nav-items closebtn" href="#" onClick={toggleNav}>x</a>
                </div>
                <div className="row">
                    <Link className="my-nav-items" to="/All"> 
                        Home
                    </Link>
                    <Link className="my-nav-items" to="/Radio">
                        Radio
                    </Link>
                    <Link className="my-nav-items" to="/Podcast">
                        Podcast
                    </Link>
                    <Link className="my-nav-items" to="/IndisMusic">
                        Indis's Music
                    </Link>
                    <Link className="my-nav-items" to="/Language">
                        Language <br/> <small>(Set Music language)</small>
                    </Link>
                </div>
                <hr/>
                <div className="row">
                    <h3 className="subnavhead">Quick Access</h3>
                    {quickAccess.map(item => (
                        <Link className="my-nav-items" key={quickAccess.indexOf(item)} to={getPath(item.name)}>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
            <header className="myheader">
                <div className="_inner">
                    <div className="lt">
                        <div className="box">
                            <a className="ham" onClick={toggleNav}>
                                <GiHamburgerMenu/>
                            </a>
                        </div>
                        <div className="log_wrap">
                            <a className="logo" href="https://music.skillsprouts.in/">
                                Dhunn
                            </a>
                        </div>
                        <div className="sbox">
                            <SearchBox/>
                        </div>
                    </div>
                    <div className="responsive_subpart">
                        <button className="lgmr"><FaLanguage/></button>
                        <button className="lgmr"><FaMoon/></button>
                        <Link className="user" to={{
                            pathname: "/Login",
                            state: {
                                currentpath: location.state,
                                testing: "send something"
                            }
                        }}> 
                            Log In / Sign Up
                        </Link>
                    </div>
                </div>
            </header>
            <div className="fixedheader">
                <FixedHeader data={quickAccess} />
            </div>
                
            

        </>
    );
}


export default Header;