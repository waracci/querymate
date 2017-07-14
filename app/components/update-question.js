import Ember from 'ember';

export default Ember.Component.extend({
    updateQuestionForm: false,
        actions: {
            updateQuestionForm(){
                this.set('updateQuestionForm', true);
            },
            update(question){
                var params = {
                author: this.get('author'),
                quiz: this.get('quiz'),
                content: this.get('content'),
                additionalContent: this.get('additionalContent')
            };
            this.set('updateQuestionForm', false);
            this.sendAction('update', question, params);
            }
        }
});
