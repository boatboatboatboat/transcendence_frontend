var app = app || {};

$(() => {

    let HelloWorldView = Backbone.View.extend({
       initialize: function() { this.el.id = "hw-placeholder"; this.render(); },
       render: function() { this.$el.text(this.model.get("eltext")); },
    });

    app.HelloWorldView = HelloWorldView;
});