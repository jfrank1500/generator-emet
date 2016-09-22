'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');

module.exports = yeoman.Base.extend({
    constructor: function () {
        yeoman.Base.apply(this, arguments);
        this.argument('module', {
            type: String, required: true
        });
        this.moduleName = _.camelCase(this.module);
        this._yosay();
    },
    initializing: function () {
        this.model = this.config.getAll();
        this.model.moduleName = this.moduleName;
    },
    writing: function () {
        var model = this.model;
        var path = 'app/modules/' + this.module + '/' + this.module;
        this._t('_resource.js', path + '.resource.js', model);
    },
    _yosay: function () {
        this.option('welcome', {type: Boolean, default: true});
        if (this.options.welcome) {
            this.log(yosay(
                    'Welcome to ' + chalk.red('Emet') + ':resource subgenerator!'
                    ));
        }
    },
    _t: function (source, destiny, model) {
        this.fs.copyTpl(this.templatePath(source), this.destinationPath(destiny), model);
    }
});
