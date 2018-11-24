import React from 'react';
import {Link} from 'react-router-dom';
const Header = (props) => {

    return (
    <div>
       <Link to="/">首页</Link>
       <br />
       <Link to="/news">列表页</Link>
       <br />
       <Link to="/course">资源中心</Link>
    </div>
    )
}

export default Header;