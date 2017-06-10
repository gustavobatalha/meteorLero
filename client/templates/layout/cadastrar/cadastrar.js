import { Template } from 'meteor/templating';


//import './cadastrar.html';

var cadastrar = false;

Template.cadastrar.events({
    'submit #cadastrar'(ev){
        ev.preventDefault()   
        let target = ev.target;

        let user = {
            email: target.email.value, 
            password: target.password.value,
            username: target.user.value
        }
        Accounts.createUser(user);
        target.reset();
    }
})