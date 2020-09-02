import React from 'react'
import '../styles/style.css' 

function TopNavBar()
{
	return(
    <div>
    <ul>
    <li><a href="#"><p className="one"></p></a></li>
    <li ><a className="leftnav" href="#categories">CATEGORIES  </a></li>
    <li><a style={{color:"#F08080"}} href="#home">Home &nbsp;&nbsp;&nbsp;&nbsp;|</a></li>
    <li><a href="#fashion">  Fashion &nbsp;&nbsp;&nbsp;&nbsp;|  </a></li>
    <li><a href="#sports">Sports &nbsp;&nbsp;&nbsp;&nbsp; |</a></li>
    <li><a href="#electronics">Electronics  &nbsp;&nbsp;&nbsp;&nbsp;|  </a></li>
    <li><a href="#digital">Digital  &nbsp;&nbsp;&nbsp;&nbsp;|  </a></li>
    <li><a href="#furniture">Furniture  &nbsp;&nbsp;&nbsp;&nbsp;|  </a></li>
    <li><a href="#jewelry">Jewelry  &nbsp;&nbsp;&nbsp;&nbsp;|  </a></li>
    <li><a href="#blog">Blog&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
    </ul>
    </div>
		)
}
export default TopNavBar