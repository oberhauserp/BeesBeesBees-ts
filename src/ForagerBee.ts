class ForagerBee extends Bee{
    canFly: boolean
    treasureChest: string[]
constructor(){
    super()
    this.age = 10
    this.job = 'find pollen'
    this.canFly = true
    this.treasureChest = [];
}

forage(): void
{
    this.treasureChest.push("treasure")
}

};