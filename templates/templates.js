const header = require('./header.js');
const footer = require('./footer.js');
const nav = require('./nav.js');

const set_datos_generales = require('./step/set_datos_generales.js');
const set_datos_crediticios = require('./step/set_datos_crediticios.js');
const set_validacion = require('./step/set_validacion.js');
const set_retenciones = require('./step/set_retenciones.js');

const alta = require('./step/alta.js');
const solicitudes = require('./step/solicitudes.js');

const datos_conyuge = require('./forms/datos_conyuge.js');
const datos_fisica = require('./forms/datos_fisica.js');
const datos_negocio = require('./forms/datos_negocio.js');

const datos_financiamiento = require('./forms/datos_financiamiento.js');
const datos_referencias = require('./forms/datos_referencias.js');
const datos_cuestionario = require('./forms/datos_cuestionario.js');

const datos_avales = require('./forms/datos_avales.js');
const datos_infonavit = require('./forms/datos_infonavit.js');

const datos_dependientes_economicos = require('./forms/datos_dependientes_economicos.js');
const inicio_form = require('./forms/inicio_form.js');

const grid_solicitudes = require('./forms/grid_solicitudes.js');
const modal_dependientes = require('./forms/modal_dependientes.js');

const datos_rfc = require('./forms/datos_rfc.js');
const datos_domicilio = require('./forms/datos_domicilio.js');



module.exports = {
    partials: () => {
        return {
            header: header, 
            footer: footer,
            nav:nav, 
            
            set_datos_generales: set_datos_generales,
                datos_conyuge:datos_conyuge,
                datos_fisica:datos_fisica,
                datos_dependientes_economicos:datos_dependientes_economicos,
            
            set_datos_crediticios:set_datos_crediticios,
                datos_rfc:datos_rfc,
                datos_domicilio:datos_domicilio,
                datos_negocio:datos_negocio,

            set_validacion:set_validacion,
                datos_financiamiento:datos_financiamiento,
                datos_referencias:datos_referencias,
                datos_cuestionario: datos_cuestionario,

            set_retenciones:set_retenciones,
                datos_avales:datos_avales,
                datos_infonavit:datos_infonavit,

            
            
            alta: alta,
                inicio_form:inicio_form,

            solicitudes:solicitudes,
                grid_solicitudes:grid_solicitudes,
                    modal_dependientes:modal_dependientes
        }
    },
    data: ()=> {
        return {
            title: "Navistar Financial",
            logo: "./Content/images/logo.jpeg",
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
