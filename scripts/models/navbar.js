var app = app || {};

$(() => {
    'use strict';

    let NavbarModel = Backbone.Model.extend({

        initialize: function () {
            this.page_models = {
                "profile": {
                    name: "Profile",
                    model: new app.PageUserModel(),
                },
                "tournaments": {
                    name: "Tournaments",
                    model: new app.HelloWorldModel({eltext: "tournaments PLACEHOLDER PAGE"}),
                },
                "users": {
                    name: "Users",
                    model: new app.HelloWorldModel({eltext: "Users placeholder page"}),
                },
                "guilds": {
                    name: "Guilds",
                    model: new app.GuildPageModel(),
                },
                "game": {
                    name: "Game",
                    model: new app.HelloWorldModel({eltext: "game PLACEHOLDER PAGE"}),
                },
                "bantest": {
                    name: "bantest",
                    model: new app.PageBannedModel(),
                },
            };

            const is_admin = true;

            if (is_admin) {
                this.page_models["panel"] = {
                    name: "Admin Panel",
                    model: new app.HelloWorldModel({eltext: "admin panel placeholder"}),
                };
            }
            this.set("current_page", "profile");
        },

        change_page: function (name) {
            this.set("current_page", name);
        },

        get_pages: function () {
            return this.page_models;
        },

        get_current_page: function () {
            return this.get("current_page");
        },

        get_current_page_model: function () {
            return this.page_models[this.get("current_page")].model;
        },

        create_associated_view: function () {
            return new app.NavbarView({model: this});
        },
    });

    app.NavbarModel = NavbarModel;
});