import React from 'react';
import Breadcrumb from "../commons/Breadcrumb"

class Art extends React.Component{ 
    componentDidMount() { 
        const script = document.createElement("script");
        script.src = "https://cdn.curator.io/published/8ac7cfc5-7275-4758-b0fc-e28fbaf1e54b.js";
        script.async = true;
    
        const anchor = document.getElementById("curator-feed-default-feed-layout");
        anchor.parentNode.insertBefore(script, anchor.nextSibling)
    }

    render() { 
        return <div className = "landing-left" style={{paddingTop: "10vh", width: "80vw", margin: "auto"}}>
        <Breadcrumb crumbs={["home"]}/>
        <h3>most recent pieces:</h3>
        <br/>
         <div id="curator-feed-default-feed-layout"><a href="https://curator.io" class="crt-logo crt-tag" style={{"color": "#221F23"}}>Powered by Curator.io</a></div>
        </div>
    }
}

export default Art;
