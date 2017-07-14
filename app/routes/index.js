import Ember from 'ember';

export default Ember.Route.extend({
    //my model hook here
    model(){
        return Ember.RSVP.hash({
            questions: this.store.findAll('question'),
            answers: this.store.findAll('answer')
        })
        
    },
    actions: {
        saveQuestion3(params){
            var newQuestion = this.store.createRecord('question', params);
            newQuestion.save();
            this.transitionTo('index');
        },
        saveAnswer(params){
            var newAnswer = this.store.createRecord('answer', params);
            console.log('saving data2');
            newAnswer.save();
            this.transitionTo('index');
        }
    }
});
