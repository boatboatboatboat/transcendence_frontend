var app = app || {};

$(() => {
    'use strict';

    let UserInfoModel = Backbone.Model.extend({
        initialize: function () {
            this.set("username", "noname");
            this.set("guild", "noguild");
            this.set("status", "nostatus");
            this.set("avi", "resources/img/smokingcat3.png");
        },

        create_associated_view: function () {
            return new app.UserInfoView({model: this});
        },
    });

    let UserStatsModel = Backbone.Model.extend({
        initialize: function () {
            this.set("wins", 6);
            this.set("losses", 3);
        },

        create_associated_view: function () {
            return new app.UserStatsView({model: this});
        },
    });

    let MatchModel = Backbone.Model.extend({
        initialize: function () {},

        create_associated_view: function () {
            return new app.MatchView({model: this});
        },
    });
    app.MatchModel = MatchModel;

    let PageUserModel = Backbone.Model.extend({
        initialize: function () {
            this.user_info_model = new app.UserInfoModel();
            this.user_stats_model = new app.UserStatsModel();
            this.match_history_model = new app.MatchHistoryCollection([
                {match_type: "Duel", rounds: [16, 0], opponent: "jean uit klein-genhout"},
                {match_type: "Tournament", rounds: [15, 15], opponent: "adema franssen uit heerlen"},
                {match_type: "Ladder", rounds: [0, 16], opponent: "geer van de velsjestroat"},
            ]);
        },

        create_associated_view: function () {
            return new app.PageUserView({model: this});
        },
    });


    app.UserInfoModel = UserInfoModel;
    app.UserStatsModel = UserStatsModel;
    app.PageUserModel = PageUserModel;
});