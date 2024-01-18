import BankAccountManagement from '../pages/Agentguichet/BankAccountMangement';
import apii from './axiosConfig2';

const getBankAccounts = () => {
  return apii.get('/all');
};

const createBankAccount = (rib, amount, customerIdentityRef) => {
  return apii.post('/create', {
    rib,
    amount,
    customerIdentityRef,
  });
};

const getBankAccountByRib = (rib) => {
  return apii.get('/getByRib' + rib);
};

const BankAccountService = {
  getBankAccounts,
  createBankAccount,
  getBankAccountByRib,
};

export default BankAccountService;
