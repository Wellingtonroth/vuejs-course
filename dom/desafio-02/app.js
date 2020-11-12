new Vue({
	el: '#desafio',
	data: {
		valor: ''
	},
	methods: {
		exibirAlerta() {
			alert('Estou Alertando')
		},
		alterarValor(event) {
			this.valor = event.target.value
		}
	}
})