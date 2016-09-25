'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var mysql = require('mysql');

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

        var connection = mysql.createConnection({
            host: '127.0.0.1',
            database: 'skills',
            user: 'skills',
            password: 'skills'
        });

        var describeTable = function (table) {
            connection.query('describe ' + table, function (err, rows2, fields) {
                if (err) {
                    throw err;
                }
                console.log(table);
                for (var j = 0; j < rows2.length; j++) {
                    var row2 = rows2[j];
                    var _field = row2.Field;
                    var _type = row2.Type;
                    var _null = row2.Null;
                    var _key = row2.Key;
                    var _default = row2.Default;
                    var _extra = row2.Extra;
                    console.log('-', _field, _type);
                }
            });
        };

        var showTables = function (err, rows, fields) {
            if (err) {
                throw err;
            }
            var fieldName = fields[0].name;
            for (var i = 0; i < rows.length; i++) {
                describeTable(rows[i][fieldName]);
            }
            connection.end();
        };

        connection.connect(function (err) {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
            connection.query('show tables', showTables);
        });
    },
    _yosay: function () {
        this.option('welcome', {type: Boolean, default: true});
        if (this.options.welcome) {
            this.log(yosay(
                    'Welcome to ' + chalk.red('Emet') + ':schema subgenerator!'
                    ));
        }
    },
    _t: function (source, destiny, model) {
        this.fs.copyTpl(this.templatePath(source), this.destinationPath(destiny), model);
    }
});
