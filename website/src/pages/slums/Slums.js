import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import main from "./main.md"
import pubs from "./pubs.md"
import press from "./press.md"
import summary from "./summary.md"
import large_header from "./large_header.png"
import Breadcrumb from "../../commons/Breadcrumb"
import FreetownStreets from "./imgs/streets.png"
import FreetownBlocks from "./imgs/blocks.png"
import FreetownParcels from "./imgs/parcel_buildings.png"
import S0 from "./imgs/S0.png"
import S1 from "./imgs/S1.png"
import S2 from "./imgs/S2.png"
import S3 from "./imgs/S3.png"
import ExBlockParcels from "./imgs/ex_block_parcels.png"
import ExBlockPWeakDuals from "./imgs/ex_block_weak_duals.png"
import ExBlockReblock from "./imgs/ex_block_reblock.png"
import KiberaChoropleth from "./imgs/choropleth.png"
import Pathological from "./imgs/pathological.png"
import Website from "./imgs/website.png"


class Slums extends React.Component { 
    constructor(props) { 
        super(props)
        this.state = {
            main: null,
            pubs: null, 
            press: null,
            summary: null
        }
    }

    componentDidMount() {
        Promise.all([
            fetch(main).then((res) => res.text()).then((text) => {this.setState({main: text})}),
            fetch(pubs).then((res) => res.text()).then((text) => {this.setState({pubs: text})}),
            fetch(press).then((res) => res.text()).then((text) => {this.setState({press: text})}),
            fetch(summary).then((res) => res.text()).then((text) => {this.setState({summary: text})}),
        ])
    }

    content(key) { 
        return <ReactMarkdown source={this.state[key]} allowDangerousHtml/>
    }

    render = () => <div className = "fullwidth landing-right" style = {{height: "100%!important"}}>
    <Jumbotron fluid style = {{width:"100%", height:"30vh", backgroundImage: `url(${large_header})`, backgroundPosition: "center", opacity:0.6}} /> 
    <Container fluid  style={{ paddingLeft: "10vw", paddingRight: "10vw", paddingBottom: "15vh"}}>
    <Breadcrumb crumbs={["home", "research"]}/>
    <h1>Infrastructure Access in Slums</h1>
    <br/>
    {this.content("summary")}
    <Row>
        <Col> <h2>Publications + Talks</h2> {this.content("pubs")} </Col>
        <Col> <h2>Press</h2> {this.content("press")} </Col>
    </Row>
    <hr/>
    {this.content("main")}
    <p>That was a lot of words - let me show you some pictures to explain what we did with each administrative unit. First, we looked at the road network for each administrative unit (below left, in blue). The street blocks are the negative spaces in between the road network lines, which is easy to compute using a set-theoretic difference between the administrative unit's area and the road network geometry. Each of the pink-ish shapes in the right image below is a polygon representing a street block we have extracted. Both the road network and street block polygons are examples from northern Freetown, Sierra Leone, focusing on the downtown area and three adjacent areas known to have a high concentration of informal neighborhoods.</p>
    <div>
        <img src = {FreetownStreets} alt="" width = "45%" style={{float: "left"}}/>
        <img src = {FreetownBlocks}  alt="" width = "45%" style={{float: "right"}}/>
    </div>

    <p style = {{paddingTop: "2vh", display: "inline-block"}}>Once we have each street block defined, we can assign each building footprint to a block with a simple dissolve. Additionally, we can approximate the parcels of land within the block that constitute each property lot via a modified Voronoi decomposition. In the absence of actual tenure information or cadastral parcel boundaries, the Voronoi approximation is the most egalitarian choice in that it uses distance from the building to partition the block geometry. (Still, it's a fairly Western view of tenure and property rights and doesn't always reflect how people view divisions of space across the world. It's important to use local knowledge and conditions over algorithmic solutions, when possible.) Below are building footprints (in grey) within each block (bold crimson). In light crimson are the boundaries resulting from our Voronoi decomposition, more clearly visible in the inset.  
    </p>

    <div>
        <img src = {FreetownParcels} alt="" width = "70%"/>
    </div>

    <h2 style = {{paddingTop: "2vh", display: "inline-block"}}>measuring topological complexity</h2>
    <p>
    These parcels within each block are what we use to measure degraded access to the surrounding road network, under the assumption that any parcel not directly bordering the road network indicates a lack of access to infrastructure. In order to isolate the exact and most-impacted parcels, we form a <i>planar graph</i> from the parcel geometry and then form successive <i>weak duals</i> until the graph structure is a trivial one. As we see below, a weak dual for a planar graph is the graph formed by connecting the midpoints of all faces that form complete polygons. The more complex the parcel structure is, the more weak dual operations are required to get to a trivial graph. 
    </p>
    <Row>
        <Col width = "20%"> <img src = {S0} alt="" style = {{width: "80%"}}/> <p style = {{textAlign: "center"}}> original planar graph    </p></Col>
        <Col width = "20%"> <img src = {S1} alt="" style = {{width: "80%"}}/> <p style = {{textAlign: "center"}}> first weak dual          </p></Col>
        <Col width = "20%"> <img src = {S2} alt="" style = {{width: "80%"}}/> <p style = {{textAlign: "center"}}> second weak dual         </p></Col>
        <Col width = "20%"> <img src = {S3} alt="" style = {{width: "80%"}}/> <p style = {{textAlign: "center"}}> single-node trival graph </p></Col>
    </Row>

    <p>
    The left-most figure above is a simple example of parcels comprising a block. The central parcel, shaded darker, doesn't have direct access to the road network. The middle two figures show how we create a sequence of weak dual graphs by connecting the centroids of each of the vertices until we end up with a single node. Note the position of the trivial node coincides with the impacted parcel. Here's an example of a real block from Freetown (chosen as an example because it looks like a shark's tooth), with shading indicating parcels lacking direct road access, and the entire weak dual sequence (black ⟶ purple ⟶ red ⟶ orange ⟶ yellow ⟶ white) shown superimposed on the block geometry. </p>

    <Row>
        <Col width = "45%"> <img src = {ExBlockParcels}    alt="" style = {{width: "80%"}}/> </Col>
        <Col width = "45%"> <img src = {ExBlockPWeakDuals} alt="" style = {{width: "80%"}}/> </Col>
    </Row>

    <p style = {{paddingTop: "2vh", display: "inline-block"}}>
    As I mentioned, the more weak dual operations required to get a trivial graph, the worse the access conditions in a block are. The number of graphs in the weak dual sequence, which we call "complexity" (denoted <i>k</i> ∈ ℤ) allow us to quickly and efficiently compare the access conditions of blocks whose locations, morphology, building layout, and population density may vary tremendously. For example, the example block used in the weak dual illustration has <i>k</i> = 3, and the real block from Freetown has <i>k</i> = 6, indicating higher complexity, and more "slum"-like characteristics. A little bit of topology and graph theory tells us that any block where <i>k</i> {'>'} 2 contains a parcel lacking direct road access! We can use this property to create a choropleth of blocks in an urban area, colored according to complexity. As an example, consider this snapshot of Kibera, a neighborhood of Nairobi, Kenya considered the largest slum in Africa. 
    </p>

    <Row><img src={KiberaChoropleth} alt="" width="60%"/></Row>

    <p style = {{paddingTop: "2vh", display: "inline-block"}}>All blocks colored blue meet the condition that <i>k</i> {'≤'} 2, so each building parcel within those blocks has direct road network access. In contrast, blocks colored orange and red have progressively worse access conditions (red blocks have <i>k</i> {'≥'} 12). The dark gray polygons are building footprints - the density of the most slum-like blocks is evident from the map.</p>


    <h2>Optimizing road access</h2>
    <Row>
    <Col>
    <p> Once the parts of a street block lacking access to the surrounding road network have been identified, the natural follow-on question is: how can we connect these interior parcels to the formal roads? And equally importantly, can we do it at minimal cost? We consider this problem to be similar to the minimum-spanning tree problem, in which the minimal-length subset of graph edges connecting all nodes is identified via a relaxation approach. Given the combinatorial complexity of this task, in practice, we generate Steiner approximations to the optimal solution. We place nodes at the edges of the block representing the external road network, and associate a node with each building. We also treat the parcel boundaries as candidate edges in the spanning tree problem. To the right is an example of a minimal-cost upgrade plan for the same block in Freetown discussed earlier. The existing road network, in blue, is augmented by new road construction, shown in white, that connects each interior parcel to existing roads.
    </p></Col>
    <Col>
    <img src={ExBlockReblock} alt="" width="80%"/>
    </Col>
    </Row>

    <p style = {{paddingTop: "2vh", display: "inline-block"}}>
    This is explicitly not an automated urban planning tool - we have constructed a suggested upgrade that can easily be modified to take into account local concerns and constraints. The default cost function is the length of the newly-constructed road, but this can be modified to take into account local amenities such as sanitation or water access points, or penalize construction along a topographical gradient. Additionally, by layering in local knowledge of actual cadastral parcels and removing any parcel edges that cannot be candidates for road construction due to the nature of land use, we can create a potential upgrade plan that fits the local community's needs and desires. 
    </p>

    <h2>The Million Neighborhoods Map: global scale slum mapping </h2>
    <p>With the choropleth coloring approach and optimal new road network techniques discussed here, we built a global map of "slum"-like neighborhoods, available for interactive exploration at the <a href="https://millionneighborhoods.org">Million Neighborhoods Initiative's main website</a> - go check it out! </p>
    
    <Row><img src={Website} alt="" width="60%"/></Row>

    <h2 style = {{paddingTop: "2vh", display: "inline-block"}}> analysis and future work  </h2>
    <Row>
        <Col><img src={Pathological} alt="" width="60%" style={{verticalAlign: "middle"}}></img></Col>
        <Col><p>
        The map is the tip of the iceberg in terms of what is possible with a topological view of infrastructure access in the developing world. We're already looking at the distribution of complexity in urban areas (spoiler for future work: most blocks with interior parcels just need incremental construction for full connectivity; pathological blocks with hundreds of interior parcels like the one shown to the left from Monrovia, Liberia, are the exception, not the norm). Additionally, we recognize that there are false positives - areas like hospitals, private resorts, school campuses, and military bases tend to have a higher <i>k</i>, but this lack of access is deliberate, interestingly enough. Conversely, we also know that when street network morphology is mostly-rectilinear, we can have street blocks with low values of <i>k</i> while still lacking sufficient access to key infrastructure, which is a pattern we see in places like Neza (a slum on the outskirts of Mexico City).
        </p>
        </Col>
    </Row>
    <p>
        Another area of exploration is the nature of the graph optimization problem. Our conversations with urban planners and slum dwellers across African cities indicate that the road network is the ideal feature to focus on. In contrast, activists and planners in India are more interested in optimizing water piping plans for drinking and sanitation. We can also start to fold in morphological constraints on the shape of the road network to make the proposed plans more feasible and usable for inhabitants of the neighborhood.
    </p>
    <p>
        In short, I think we have a balance between harnessing computational, mathematical, and cartographic advances while remaining cognizant of local needs and ethnographic concerns. Getting slum mapping right could mean a difference in quality-of-life for billions of people in this century, and I hope to continue exploring these questions.
    </p>
    
    </Container>
    </div>
}

export default Slums;