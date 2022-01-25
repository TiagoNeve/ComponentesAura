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
	}
})