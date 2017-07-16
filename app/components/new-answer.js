import Ember from 'ember';

export default Ember.Component.extend({
    addNewAsnwer: false,
    actions: {
        answerFormShow(){
            this.set('addNewAnswer', true);
        },
        saveAnswer(){
            console.log('getting data');
            var params = {
                author: this.get('author'),
                subject: this.get('subject'),
                content: this.get('content'),
                question: this.get('question')
            };
            console.log('processing data');
            this.set('addNewAnswer', false);
            console.log('saving data');
            this.sendAction('saveAnswer', params);
        }
    }
});
