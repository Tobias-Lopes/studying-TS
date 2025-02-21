export const bootstrap = (): void => {
  class BankAccount {
    protected holder: string;
    protected balance: number;

    constructor(holder: string, balance: number) {
      this.holder = holder;
      this.balance = balance;
    }

    public getHolder(): string {
      return this.holder;
    }
  }

  class CheckingAccount extends BankAccount {
    private overdraftLimit: number;

    constructor(holder: string, balance: number, overdraftLimit: number) {
      super(holder, balance);
      this.overdraftLimit = overdraftLimit;
    }

    public getOverdraftLimit(): number {
      return this.overdraftLimit;
    }
  }

  class SavingAccount extends BankAccount {
    private interestRate: number;

    constructor(holder: string, balance: number, interestRate: number) {
      super(holder, balance);
      this.interestRate = interestRate;
    }

    public getInterestRate(): number {
      return this.interestRate;
    }
  }

  //lista de contas bancárias
  const accountList: BankAccount[] = [
    new CheckingAccount('Alice', 1500, 300),
    new SavingAccount('João', 4000, 0.005),
    new CheckingAccount('Maria', 10000, 3000),
    new SavingAccount('Paulo', 1000, 0.005),
  ];

  function processAccounts(accounts: BankAccount[]): void {
    accounts.forEach((account) => {
      if (account instanceof CheckingAccount) {
        console.log(
          'Processando a conta corrente ',
          account.getOverdraftLimit(),
        );
      } else if (account instanceof SavingAccount) {
        console.log('Processando a conta poupança ', account.getInterestRate());
      }
      console.log('------------------------');
    });
  }

  processAccounts(accountList);
};
