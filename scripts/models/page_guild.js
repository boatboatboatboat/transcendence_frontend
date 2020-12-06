var app = app || {};

$(() => {
    'use strict';

    let GuildMemberModel = Backbone.Model.extend({
        get_avatar: function() {
            return this.get("avatar");
        },

        get_username: function() {
            return this.get("username");
        },

        is_officer: function() {
            return this.get("is_officer");
        },

        create_associated_view: function() {
            return new app.GuildMemberModel;
        },

    });

    let GuildPageModel = Backbone.Model.extend({

        initialize: function() {
            if (!this.has("guild_name")) {
                this.set("guild_name", "Funny Guild");
            }
            if (!this.has("clan_tag")) {
                this.set("clan_tag", "FUNNY");
            }
            if (!this.has("guild_owner")) {
                this.set("guild_owner", "jean uit klein-genhout");
            }
            if (!this.has("avatar")) {
                this.set("avatar", "resources/img/avatar_guild_default.png");
            }
        },

        get_guild_name: function() {
            return this.get("guild_name");
        },

        get_clan_tag: function() {
            return this.get("clan_tag");
        },

        get_guild_owner_name: function() {
            return this.get("guild_owner");
        },

        get_avatar: function () {
            return this.get("avatar");
        },

        get_officers: function () {
            return this.get("officers");
        },

        get_members: function () {
            return this.get("members");
        },

        create_associated_view: function() {
            return new app.GuildPageView({ model: this });
        },

    });

    app.GuildMemberModel = GuildMemberModel;
    app.GuildPageModel = GuildPageModel;
});