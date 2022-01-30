({
    createExpense: function(component, expense) {
        let theExpenses = component.get("v.expenses");
        // Copy the expense to a new object
        // THIS IS A DISGUSTING, TEMPORARY HACK
        let newExpense = JSON.parse(JSON.stringify(expense));
        theExpenses.push(newExpense);
        component.set("v.expenses", theExpenses);
    },

    createExpense2: function(component, expense) {
        let action = component.get("c.saveExpense");
        action.setParams({
            "expense": expense
        });
        action.setCallback(this, (response) => {
            let state = response.getState();
            if (state === "SUCCESS") {
                let expenses = component.get("v.expenses");
                expenses.push(response.getReturnValue());
                component.set("v.expenses", expenses);
            }
        });

        $A.enqueueAction(action);
    }
})