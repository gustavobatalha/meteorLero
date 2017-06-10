import { Template } from 'meteor/templating';
import { Lero } from '/collections/leros.js'


import './lero.html';

Template.lero.events({
    'click .remove'(){
        Meteor.call('removeLero', this._id);
    },
    'click .comentar'(){

    
        let comentario = {texto: $('#comentario').val(),autor:Meteor.userId()};
        this.comentarios.push(comentario);

        $('#comentario').val('');

        Lero.update(
            {
                _id:this._id
            },{
                $set:{
                    comentarios: this.comentarios
                }
            });
    }
});
