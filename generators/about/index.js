'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
    constructor: function () {
        yeoman.Base.apply(this, arguments);
        this._yosay();
    },
    initializing: function () {
        this.model = this.config.getAll();
    },
    writing: function () {
        var model = this.model;
        this._t('_about.controller.js', 'app/modules/about/about.controller.js', model);
        this._t('_about.html', 'app/modules/about/about.html', model);
        this._t('_about.module.js', 'app/modules/about/about.module.js', model);
        this._t('_about.route.js', 'app/modules/about/about.route.js', model);
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
