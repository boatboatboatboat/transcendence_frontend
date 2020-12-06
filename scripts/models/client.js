var app = app || {};

$(() => {

    let ClientModel = Backbone.Model.extend({
        initialize: function () {
            this.navbar = new app.NavbarModel();
        },

        create_associated_view: function () {
            return new app.ClientView({model: this});
        }
    });

    app.ClientModel = ClientModel;

});