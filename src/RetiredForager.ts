class RetiredForagerBee extends ForagerBee{
    constructor()
    {
        super()
        this.age = 40
        this.job = 'gamble'
        this.canFly = false
        this.color = 'grey'
        this.treasureChest = []
    }

    forage(): string
    {
        return 'I am too old, let me play cards instead';
    }

    gamble(): void{
        this.treasureChest.push('treasure')
    }
};