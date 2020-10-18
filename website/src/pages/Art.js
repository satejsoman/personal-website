import React from 'react';

class Art extends React.Component{ 
    componentDidMount() { 
        const script = document.createElement("script");
        script.src = "https://cdn.curator.io/published/8ac7cfc5-7275-4758-b0fc-e28fbaf1e54b.js";
        script.async = true;
    
        const anchor = document.getElementById("curator-feed-default-feed-layout");
        anchor.parentNode.insertBefore(script, anchor.nextSibling)
    }

    render() { 
        return <div className = "art-root" style={{paddingTop: "10vh", width: "80vw", margin: "auto"}}>
         <div id="curator-feed-default-feed-layout"><a href="https://curator.io" class="crt-logo crt-tag" style={{"color": "white"}}>Powered by Curator.io</a></div>
        </div>
    }
}

export default Art;
