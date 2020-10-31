const carts = {
    state: {
      count: 0
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
        isSold: () =>{
            return this.count;
        }
    }
}

export default carts;