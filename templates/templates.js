const header = require('./header.js');
const footer = require('./footer.js');

const step_pf01 = require('./step/set_01.js');

const dg = require('./forms/datos_generales.js');


module.exports = { 
    partials: () => {
        return {
        header: header, 
            footer: footer,
            step_pf01: step_pf01,

            dg:dg
            
        }
    },
    data: ()=> {
        return {
            title: "Navistar Financial",
            logo: "./Content/images/logo.png",
            nav_items: [
                {
                    "item": "Home", 
                    "url": "/index.html"
                },
                {
                    "item": "Vacation", 
                    "url": "/vacations.html"
                }
            ]
        } 
    }
}
