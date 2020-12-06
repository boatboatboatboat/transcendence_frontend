var app = app || {};
$(() => {
    'use strict';

    let HelloWorldModel = Backbone.Model.extend({
        create_associated_view: function () {
            return new app.HelloWorldView({model: this});
        }
    });

    app.HelloWorldModel = HelloWorldModel;
});