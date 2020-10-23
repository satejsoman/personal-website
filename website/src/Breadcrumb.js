import React from 'react';
import {Link} from "react-router-dom"


const Breadcrumb = (props) => 
<div style = {{fontFamily: 'Libre Franklin'}}>
    {props.crumbs.map((element, _) => 
        <>{" "}<Link to={"/" + (element === "home" ? "" : element)}>{element}</Link>{" "}/</>
    )}
</div>

export default Breadcrumb;