class God{
    /**
     * @returns Human[]
     */
      static create(){
        const adam = new Man();
        const eve = new Woman();
        return [adam, eve];
      }
    }
    
    class Human {
      constructor() {
        this.species = 'Human';
      }
    }
    
    class Man extends Human {
      constructor() {
        super();
        this.gender = 'Male';
      }
    }
    
    class Woman extends Human {
      constructor() {
        super();
        this.gender = 'Female';
      }
    }


    //best practice

    class God{
        /**
         * @returns Human[]
         */
          static create(){
            return [new Man, new Woman];
          }
        }
        class Human{}
        class Man extends Human{}
        class Woman extends Human{}