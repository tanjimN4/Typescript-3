{
    // access modifiers
    class BankAccount {
      public readonly id: number;
      public name: string;
      private _balance: number;
      protected _accountNumber: number;
  
      constructor(id: number, name: string, balance: number ,accountNumber:number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
        this._accountNumber = accountNumber;
      }
  
     public  addDeposit(amount: number) {
        this._balance = this._balance + amount;
      }
  
     public getBalance() {
        return this._balance;
      }
    }
  
    class StudentAccount extends BankAccount{
      test(){
        this.getBalance()
      }
    }
  
    const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20,44);
    // goribManusherAccount.balance = 0;
    goribManusherAccount.addDeposit(20);
    const myBalance = goribManusherAccount.getBalance();
    console.log(myBalance);
  
    //
  }