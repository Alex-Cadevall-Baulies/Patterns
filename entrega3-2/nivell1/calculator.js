class Maths {
    constuctor() {
        this.a = ""
        this.b = ""
    }

    sum({a, b}) {
        this.a = a
        this.b = b
        return this.a + this.b
    };

    sub({a, b}) {
        this.a = a
        this.b = b
     return this.a - this.b
    };

    multiply ({a, b}){
        this.a = a
        this.b = b
        return this.a * this.b
    }

}

module.exports = Maths