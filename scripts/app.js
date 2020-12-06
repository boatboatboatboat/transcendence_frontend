var app = app || {};

$(() => {
    'use strict';

    app.remove_all_children = (obj) => {
        while (obj.el.lastChild) {
            obj.el.removeChild(obj.el.lastChild);
        }
    }

    let app_model = new app.AppModel();

    let app_view = new app.AppView({
        el: $('#app'),
        model: app_model,
    });

    app_model.set_model(new app.ClientModel());
    /*
    let ApplevelPage = Backbone.Model.extend({

    });

    let NavbarModel = Backbone.Model.extend({

    });

    let AppView = Backbone.View.extend({
        el: $('#app'),

        initialize: function () {
            this.listenTo(this.model, "change", this.render);
            this.render();
        },

        render: function () {
            this.$el.text("<script>alert('hacked');</script>");
        },

        set_current_page: function (name) {

        }

    });

    let app_view = new AppView();

    app_view.on('change:current-view', function (model, pagename) {
        switch (pagename) {
            case "main": {
                model.$(el_al)
            }
                break;
            case "login": {
            }
                break;
            case "register": {
            }
                break;
        }
    });
*/
});