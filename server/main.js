import { Meteor } from 'meteor/meteor';
import { Lero } from '/collections/leros.js'

Meteor.startup(() => {
    Meteor.publish('meuPublish', function() {
      return Lero.find({
            autor:this.userId
        },{
          fields:{
            autor:0
          }
        }
        );
    });
    Meteor.methods({
      'createLero': function(lero){
        Lero.insert(lero);
      },
      'removeLero': function(_id){
        Lero.remove({
            _id:_id
        })        
      }
    })
});
