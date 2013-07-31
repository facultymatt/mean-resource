/*!
 * mean-Resource
 * Copyright(c) 2013 Linnovate
 * MIT Licensed
 */

/**
 * Module dependencies.
 */
var fs = require('fs'),
    path = require('path');


/**
 * Initialize Resource
 *
 * @api public
 */

function Resource() {

}
/**
 * Resource methods
 */

Resource.prototype = {

    /**
     * Resource Model Initialization
     *
     * @return {Resource}
     * @api public
     */
    initModel: function() {
        var self = this;

        return self;
    },

    /**
     * Resource Routes Initialization
     *
     * @return {Resource}
     * @api public
     */
    initRoutes: function() {
        var self = this;
        
        // todo we need to set this based on existing mongo db
        self.app.use('/rest', self.rest({ mongoose:self.mongoose}).rest());

        return self;
    },

    /**
     * Initializng
     *
     * @param {Express} app
     * @param {Passport} passport
     * @param {Mongoose} mongoose
     * @return {Resource}
     * @api public
     */
    init: function(app, passport, mongoose) {
        var self = this;

        //Checking for valid init 
        if (!app || !passport || !mongoose) {
            throw new Error('Resource Could not Initialize!');
        }

        //Setting app global variables
        self.app = app;
        self.passport = passport;
        self.mongoose = mongoose;
        
        // get our npm dependencies
        self.rest = require('mers');

        //Initializing Module Functionality
        self.initRoutes();
        self.initModel();

        return this;
    },

    /**
     * Log message
     *
     * @param {String} message
     * @return {Resource}
     * @api public
     */

    log: function(message) {
        console.log(message);
        return this;
    }
}


var Resource = module.exports = exports = new Resource;