import { Template } from 'meteor/templating';
import { Lero } from '/collections/leros.js'

import './lero-list.html';


Template.leroList.helpers({
    leros(){
        let leros = Lero.find({});
        return leros;
    }
});

Template.leroList.events({
    'submit #cadLeros'(ev){
        ev.preventDefault()
        let target = ev.target;
        
        Lero.insert({
            autor:target.autor.value,
            texto:target.lero.value,
            comentarios:[]
        });
        target.reset();
    }
})