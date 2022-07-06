
import { v4 as uuid } from 'uuid';
import danielmansion from "../Assets/daniel-barnes-RKdLlTyjm5g-unsplash.jpg";
import fabianmansion from "../Assets/fabian-wiktor-MBKFuFqlMwo-unsplash.jpg";
import francescaapartment from "../Assets/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg";
import johnsonhouse from "../Assets/johnson-johnson-U6Q6zVDgmSs-unsplash.jpg";
import naomiapartment from "../Assets/naomi-hebert-MP0bgaS_d1c-unsplash.jpg";
import nathanapartment from "../Assets/nathan-van-egmond-9LMRQdVv7hw-unsplash.jpg";
import nickmansion from "../Assets/nick-romanov-_hw4aUQ81ic-unsplash.jpg";
import patrickapartment from "../Assets/patrick-perkins-iRiVzALa4pI-unsplash.jpg";
import philhouse from "../Assets/phil-hearing-IYfp2Ixe9nM-unsplash.jpg";
import rarhouse from "../Assets/r-architecture-2gDwlIim3Uw-unsplash.jpg";
import ralphhouse from "../Assets/ralph-ravi-kayden-mR1CIDduGLc-unsplash (1).jpg";
import scotthouse from "../Assets/scott-webb-1ddol8rgUH8-unsplash.jpg";
import solenapartment from "../Assets/solen-feyissa-KUYZJUcviI4-unsplash.jpg";
import stephenmansion from "../Assets/stephen-leonardi-XKIO6ZgCObo-unsplash.jpg";
import toddhouse from "../Assets/todd-kent-178j8tJrNlc-unsplash.jpg";
import vuanhhouse from "../Assets/vu-anh-TiVPTYCG_3E-unsplash.jpg";


let locationarray = ["All","Delhi","Noida"];
let priceArray = ["All","$0-500","$500-2500", "$2500-above"];
let properyTypeArray = ["All","House","Apartment","Mansion"];
let whenArray=['All','1980-2000','2000-2010','2010-now']
const dummyData = [
    {
        id: uuid(),
        name:"Raj Babani house",
        properyType:"house",
        price: 2100,
        location:"delhi",
        url: philhouse,
        made: 2017,
    },
    {
        id: uuid(),
        name:"Naomi apartment",
        properyType:"apartment",
        price:499,
        location:"delhi",
        url: naomiapartment,
        made: 2009,
    }, 
    {
        id: uuid(),
        name:"Naomi house",
        properyType:"house",
        price:499,
        location:"delhi",
        url: naomiapartment,
        made: 2017,
    },  
    {
        id: uuid(),
        name:"Solen house",
        properyType:"house",
        price:495,
        location:"delhi",
        url: solenapartment,
        made: 2007
    },
    {
        id: uuid(),
        name:"Ling Chu house",
        properyType:"house",
        price:499,
        location:"delhi",
        url: patrickapartment,
        made: 1986
    },
    {
        id: uuid(),
        name:"Vu Anh house",
        properyType:"house",
        price:2400,
        location:"delhi",
        url: vuanhhouse,
        made: 1986
    },
    {
        id: uuid(),
        name:"Todd Kent house",
        properyType:"house",
        price:1800,
        location:"delhi",
        url: toddhouse,
        made: 1999
    },
    {
        id: uuid(),
        name:"Stephen mansion",
        properyType:"mansion",
        price:1900,
        location:"delhi",
        url: stephenmansion,
        made: 2000
    },
    {
        id: uuid(),
        name:"Solen Apartment",
        properyType:"apartment",
        price:1900,
        location:"delhi",
        url: solenapartment,
        made: 2004
    },
    {
        id: uuid(),
        name:"Scott Webb House",
        properyType:"house",
        price:1900,
        location:"delhi",
        url: scotthouse,
        made:2003
    },
    {
        id: uuid(),
        name:"Ralph House",
        properyType:"house",
        price:1900,
        location:"delhi",
        url: ralphhouse,
        made: 2010
    },
    {
        id: uuid(),
        name:"Raj House",
        properyType:"house",
        price:900,
        location:"delhi",
        url: rarhouse,
        made: 2012
    },
    {
        id: uuid(),
        name:"Philhouse",
        properyType:"house",
        price:600,
        location:"delhi",
        url: philhouse,
        made: 2007
    },
    {
        id: uuid(),
        name:"Patrick Apartment",
        properyType:"apartment",
        price:600,
        location:"delhi",
        url: patrickapartment,
        made:1990
    },
    {
        id: uuid(),
        name:"Nick Ramanov mansion",
        properyType:"mansion",
        price:2399,
        location:"noida",
        url: nickmansion,
        made: 2003
    },
    {
        id: uuid(),
        name:"Nathan Van apartment",
        properyType:"apartment",
        price:499,
        location:"noida",
        url: nathanapartment,
        made: 2017
    },
    {
        id: uuid(),
        name:"Naomi Herbert apartment",
        properyType:"apartment",
        price:499,
        location:"noida",
        url: naomiapartment,
        made:2009
    },
    {
        id: uuid(),
        name:"Johnson House",
        properyType:"house",
        price:1600,
        location:"noida",
        url:johnsonhouse,
        made:2021
    },
    {
        id: uuid(),
        name:"Francesca Apartment",
        properyType:"apartment",
        price:400,
        location:"Delhi",
        url:francescaapartment,
        made:1992
    },
    {
        id: uuid(),
        name:"Daniel Mansion",
        properyType:"mansion",
        price:2400,
        location:"noida",
        url:danielmansion,
        made:2002
    },
    {
        id: uuid(),
        name:"Fabion Mansion",
        properyType:"mansion",
        price: 2700,
        location:"Delhi",
        url:fabianmansion,
        made:2017
    },
]
export {dummyData, locationarray,priceArray,properyTypeArray,whenArray}