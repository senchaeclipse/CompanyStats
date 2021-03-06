/*
 * File: app/view/Main.js
 *
 * This file was generated by Sencha Architect version 2.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ComStat.view.Main', {
    extend: 'Ext.Container',
    alias: 'widget.mainview',

    requires: [
        'ComStat.view.CompanyNavigation',
        'ComStat.view.ChartContainer'
    ],

    config: {
        layout: {
            animation: 'flip',
            type: 'card'
        },
        items: [
            {
                xtype: 'companynavigation'
            },
            {
                xtype: 'chartcontainer'
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                layout: {
                    pack: 'center',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'button',
                        action: 'toggleChart',
                        ui: 'round',
                        text: 'show chart'
                    }
                ]
            }
        ]
    }

});