let Spies = require("../src/mocksAndSpies")

let spies = new Spies()

describe("mock test",function(){
    it("Should show if the addition function have been called",function(){

        spyOn(spies, "addition")
        spies.addition()
        expect(spies.addition).toHaveBeenCalled()
    })
it("should ensure the function is called a number of times ",function(){
    spyOn(spies, "addition")
        spies.addition()
        expect(spies.addition).toHaveBeenCalledTimes(1)
})
it("should assert that the function is called with specific arguments ",function(){
    spyOn(spies, "addition")
        spies.addition(5,4)
        expect(spies.addition).toHaveBeenCalledWith(5,4)
    
})
})
