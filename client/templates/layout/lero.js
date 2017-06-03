import { Template } from 'meteor/templating';
import { Lero } from '/collections/leros.js'


import './lero.html';

Template.lero.events({
    'click .remove'(){
        Lero.remove({
            _id:this._id
        })        
    }
});
