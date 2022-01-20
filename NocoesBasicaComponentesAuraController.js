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
	}
})