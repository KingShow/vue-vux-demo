const dishes = {
    state: {
      dishes: []
    },
    mutations: {
      increment (state) {
        state.count++;
      }
    },
    actions: {
        setCount: () =>{
            this.count++;
        }
    },
    getters: {
    }
}

export default dishes;