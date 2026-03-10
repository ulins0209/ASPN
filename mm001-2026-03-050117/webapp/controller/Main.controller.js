sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], (Controller,Filter,FilterOperator) => {
    "use strict";

    return Controller.extend("mm001.controller.Main", {
        onInit() {
        },

        // formatStatusIcon(vQuantity) {
        //     const iQuantity = Number(vQuantity) || 0;

        //     if (iQuantity >= 200) {
        //         return "sap-icon://status-negative";
        //     }

        //     if (iQuantity >= 100) {
        //         return "sap-icon://message-warning";
        //     }

        //     return "sap-icon://status-positive";
        // },

        onBeforeRebindTable(oEvent) {
            var oBindingParams = oEvent.getParameter('bindingParams');
            var sStatusKey = this.byId('statusFilterSelect').getSelectedKey();

            // Status에 따른 조건절
            if (sStatusKey === "SUCCESS") {
                oBindingParams.filters.push(new Filter("Quantity", FilterOperator.LT, 100))
            } else if (sStatusKey === "WARNING") {
                oBindingParams.filters.push(new Filter("Quantity", FilterOperator.BT, 100, 199))
            } else if (sStatusKey === "ERROR") {
                oBindingParams.filters.push(new Filter("Quantity", FilterOperator.GE, 200))
            }
        }
    });
});