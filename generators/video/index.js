'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

var _ = require('lodash');

module.exports = yeoman.Base.extend({
    constructor: function () {
        yeoman.Base.apply(this, arguments);
        this.argument('module', {type: String, required: true});
        this.moduleName = _.camelCase(this.module);
        this._yosay();
    },
    initializing: function () {
        this.model = this.config.getAll();
        this.model.moduleName = this.moduleName;
    },
    writing: function () {
        var model = this.model;
        this._t('_video.controller.js', 'app/modules/' + this.module + '/' + this.module + '.controller.js', model);
        this._t('_video.html', 'app/modules/' + this.module + '/' + this.module + '.html', model);
        this._t('_video.module.js', 'app/modules/' + this.module + '/' + this.module + '.module.js', model);
        this._t('_video.route.js', 'app/modules/' + this.module + '/' + this.module + '.route.js', model);
    },
    _yosay: function () {
        this.option('yosay', {type: Boolean, default: true});
        if (this.options.yosay) {
            this.log(yosay(
                    'Welcome to ' + chalk.red('Emet') + ':about subgenerator!'
                    ));
        }
    },
    _t: function (source, destiny, model) {
        this.fs.copyTpl(this.templatePath(source), this.destinationPath(destiny), model);
    }
});
