import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        delete(answer){
            if(confirm('delete this answer?')){
                this.sendAction('destroyAnswer', answer);
            }
        }
    }
});
