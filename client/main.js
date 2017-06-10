import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactiveVar } from 'meteor/reactive-var';
import { Lero } from '/collections/leros.js';


import './main.html';


FlowRouter.route('/', {
    action: function(params, queryParams)
})

Meteor.startup( ()=>{
});

Template.body.helpers({
    saudacao() {
        let user = Meteor.user();
        let email= user.emails[0].address;

        return user.username ? user.username: email;
    }
});


Template.body.events({
    'click #logoff'(ev){
        ev.preventDefault()
        Meteor.logout();
    }
})