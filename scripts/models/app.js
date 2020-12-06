var app = app || {};

$(() => {
    let AppModel = Backbone.Model.extend({
        set_model: function (model) {
            this.set("current_model", model);
        },

        has_model: function () {
            return !(this.get("current_model") === null);
        },

        get_model: function () {
            return this.get("current_model");
        },

        create_associated_view: function () {
            return new app.AppView({model: this});
        },
    });

    app.AppModel = AppModel;
});