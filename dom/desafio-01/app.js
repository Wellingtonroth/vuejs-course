new Vue({
  el: "#desafio",
  data: {
    name: 'Wellington Roth',
    age: 23,
    image: "https://i.pinimg.com/originals/8a/33/a4/8a33a415a87f71376d23723613632c9e.jpg"
  },
  methods: {
    idadeVezes3() {
      return this.age * 3
    },
    random(){
      return  Math.random()
    }
  }
})