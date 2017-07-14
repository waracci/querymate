import Ember from 'ember';

export default Ember.Component.extend({
    addNewQuestion: false,
    actions: {
        questionFormShow(){
            this.set('addNewQuestion', true);
        },
        saveQuestion1(){
            var params = {
                author: this.get('author'),
                quiz: this.get('quiz'),
                content: this.get('content'),
                additionalContent: this.get('additionalContent')
            };
            this.set('addNewQuestion', false);
            this.sendAction('saveQuestion2', params);
        }
    }
});
