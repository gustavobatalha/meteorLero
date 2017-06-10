import { Template } from 'meteor/templating';


//import './login.html';


Template.login.events({
    'submit #login'(ev){
        ev.preventDefault()
        
        let target = ev.target;

        Meteor.loginWithPassword(target.email.value, target.password.value);
        
        target.reset();
    },
    
})