## Introduction

In 2010, the world reached a little-noticed tipping point: for the first time in recent history, more of the world's population lived within urban areas rather than rural areas. Not only will this trend continue, it will _accelerate_, especially in regions like Sub-Saharan Africa (SSA). Of the rapidly urbanizing population, a significant portion are set to live in slums (or informal settlements), lacking infrastructure like power, clean water, sanitation, and paved roads. This work explores two questions: **what defines a slum?**, and **where are slums located?** We provide a infrastructure-focused definition independent of city shape and location, and apply this definition to OpenStreetMap data.

## Measuring Infrastructure Access: A Topological Approach
Many components of key infrastructure, especially sewage and power, are found along formal roads; roads also offer avenues to commerce and access to the rest of the urban fabric. When the road network sets off land in urban areas, a city block is created. Buildings enclosed by city blocks in advanced economies generally have direct access to the surrounding road network. City blocks in informal neighborhoods, on the other hand, tend to have many buildings without direct access to the road network, impeding residents' access to critical services. 

Modeling the spaces 

## Extracting and analyzing city blocks from OpenStreetMap

To analyze street blocks throughout the Global South, we turned to [OpenStreetMap](https://www.openstreetmap.org), a platform for crowdsourced digital maps. 

When we looked at the total size of the extract for 120 countries comprising the Global South, we found it was over a terabyte in size. Processing this much geospatial data on a laptop is a little unwieldy, especially when you also want to run Slack and watch Netflix while your data processes. Thankfully, we had the [UChicago Research Computing Center's Midway2 compute cluster](https://rcc.uchicago.edu/resources/high-performance-computing) available for distributed computation. To break down the data extract, we intersected the building footprint and road network geometries with administrative unit boundaries (sourced from the [Database of Global Administrative Areas](https://gadm.org/)), and analyzed the buildings and streets for each administrative unit in parallel.  

Using the street network, we pulled the geometry of the negative spaces in between each street to figure out where the 

## Optimizing road access
Once the parts of a street block lacking access to the surrounding road network has have been identified, the natural follow-on question is: how can we connect these interior parcels to the formal roads? This process of topological optimization.
## Case studies: Kibera and Freetown

## future work 