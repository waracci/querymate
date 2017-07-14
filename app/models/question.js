import DS from 'ember-data';

export default DS.Model.extend({
    author: DS.attr(),
    question: DS.attr(), 
    content:  DS.attr(),
    additionalContent: DS.attr()
});
