import { Template } from 'meteor/templating';
import { Lero } from '/collections/leros.js'

import './comentarios.html';


Template.leroList.events({
    'submit #cadComentario'(ev){
        ev.preventDefault()
        let target = ev.target;
        
        
    }
})