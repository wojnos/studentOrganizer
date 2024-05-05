export interface Wallet {
  sum?: string;
  key: string;
  history: History[];
}

export interface History {
  sum: string;
  description: string;
  transactionDate: string;
}
