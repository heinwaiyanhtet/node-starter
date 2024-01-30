class baseModel
{
    constructor(options = {}, data = [])
    {
        this.name = 'Base'
        this.url = 'http://azat.io/api'
        this.data = data
        this.options = options
    }
    
    getName()
    {
        console.log(`Class name: ${this.name}`)
    }
}

class AccountModel extends baseModel{

    constructor(options,data){

        super({private : true}, ['32113123123', '524214691'])

        this.name = 'Account Model'
        this.url += '/accounts/'

    }

    get accountsData(){
        return this.data;
    }
}

let accounts = new AccountModel(5);
accounts.getName();
console.log('Data is %s', accounts.accountsData)
