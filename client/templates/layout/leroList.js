import { Template } from 'meteor/templating';
import { Lero } from '/collections/leros.js'

import './lero-list.html';


Template.leroList.onCreated(()=>{
    Meteor.subscribe('meuPublish');
})
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
        
        let lero = {
            autor:Meteor.userId(),
            texto:target.lero.value,
            comentarios:[]
        };
        Meteor.call('createLero', lero);
        target.reset();
    }
    
})