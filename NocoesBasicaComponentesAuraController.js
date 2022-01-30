({
	// Função executada quando o botão de reimbursed for clicado
	clickReimbursed: function(component, event, helper){
		// Variável que armazena o atributo expense
		let expense = component.get("v.expense");
		// Variável que armazena o atributo de evento updateExpense
		let updateEvent = component.getEvent("updateExpense");

		// Setando os parâmetros da função do evento
		updateEvent.setParams({ "expense": expense });
		// Executando o evento
		updateEvent.fire();
	},

	handleClick: function(component, event, helper) {
		let btnClicked = event.getSourc();
		let btnMessage = btnClicked.get("v.label");
		component.set("v.message", btnMessage);
	},

	handleClick2: function(component, event, helper) {
		let newMessage = event.getSource().get("v.label");
		console.log("handleClick2: Message: "+ newMessage);
		JSON.stringify(newMessage);
		component.set("v.message", newMessage);
	},

	handleClick3: function(component, event, helper) {
		component.set("v.message", event.getSource().get("v.label"));
	},
	
	clickCreate: function(component, event, helper) {
		let validExpense = component.find('expenseform').reduce( (validSoFar, inputCmp) => {
			// Displays error messges for invalid fields
			inputCmp.showHelpMessageIdInvalid();
			return validSoFar && inputCmp.get('v.validity').valid;
		}, true );
		// If we pass error checking, do some real work
		if(validExpense){
			// Create the new expense
			let newExpense = component.get("v.newExpense");
			console.log("Create expense: " + JSON.stringify(newExpense));
			helper.createExpense(component, newExpense);
		}
	},

	doInit : function(component, event, helper) {
		let mydate = component.get("v.expense.Date__c");
		if (mydate) {
			component.set("v.formatdate", new Date(mydate));
		}
	},

	// Load expenses from Salesforce
	doInit2 : function(component, event, helper) {
		// Create the action
		let action = component.get("c.getExpenses");
		// Add callback behavior for when response is received

		// Isso será executado quando o método getExpenses retornar algo.
		action.setCallback(this, (response) => {
			let state = response.getState();

			if (state === "SUCCESS") {
				component.set("v.expenses", response.getReturnValue());
			}
			else {
				console.log("Failed with state: " + state);
			}
		});

		// Send action off to be executed
		$A.enqueueAction(action);
	}
	// No lado do controlador js, o c. significa o controlador do Apex, que foi setado no atributo controller do component.
	// C. -> Marcação do componente -> Controlador do lado do cliente
	// c. -> Código do controlador -> Controlador do lado do servidor
	// C: -> Marcação -> Namespace padrão
})

