/**
 * Created by irving on 2017/8/30.
 */
(function(){
    "use strict";
    angular.module('craft.auth.UserStorage', []).service('UserStorage', function(){
        this.create = function(user){
            localStorage.setItem("user", JSON.stringify(user));
        };
        this.retrieve = function(){
            return localStorage.getItem("user");
        };
        this.destroy = function(){
            localStorage.removeItem("user");
            localStorage.removeItem("menu");
        };
    });
}).call(this);