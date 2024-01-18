import React, { Component, useEffect, useState } from 'react';
import NavBar from '../../components/Header';
import DataTable from '../../components/AgentGuichet/table';
import CustomersService from '../../services/customers.service';
import AuthService from '../../services/auth.service';
import BankAccountService from '../../services/bankaccount.service';
import BankDataTable from '../../components/AgentGuichet/BankAccountsTable';

export default function BankAccountManagement() {
  const [id, setId] = useState('');
  const [rib, setRib] = useState('');
  const [status, setStatus] = useState('');
  const [amount, setAmount] = useState('');
  const [identityRef, setIdentityRef] = useState('');
  const [customers, setCustomers] = useState([]);
  const [bankaccounts, setBankAccounts] = useState([]);

  const [showAgentGuichetBoard, setShowAgentGuichetBoard] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setShowAgentGuichetBoard(user.roles.includes('ROLE_AGENT_GUICHET'));
    }

    if (user) {
      (async () => {
        await loadCustomers();
        await loadBankaccounts();
      })();
    }
  }, []);

  async function create(event) {
    event.preventDefault();

    await BankAccountService.createBankAccount(rib, amount, identityRef).then(
      (result) => console.log('Bank Account added with success')
    );

    // reset state
    setId('');
    setRib('');
    setStatus('');
    setAmount('');
    setIdentityRef('');
    loadBankaccounts();

    // setMessageError('');
  }

  async function loadCustomers() {
    await CustomersService.getCustomers()
      .then((result) => {
        setCustomers(result.data);
        console.log(result.data);
      })
      .catch((e) => {
        console.log(e);
        //setMessageError(e.message);
        console.log(e.response.data.details);
      });
    console.log(customers);
  }
  async function loadBankaccounts() {
    await BankAccountService.getBankAccounts()
      .then((result) => {
        setBankAccounts(result.data);
      })
      .catch((e) => {
        console.log(e);
        //setMessageError(e.message);
        console.log(e.response.data.details);
      });
  }

  return (
    <div>
      <NavBar />
      <div className='flex min-h-full flex-1 flex-row justify-left px-6 py-12 lg:px-8'>
        <div
          className='mt-auto 
        sm:mx-auto 
        sm:w-full
         sm:max-w-xl'>
          <form className='space-y-2' action='1' method='POST'>
            <div>
              <input
                hidden
                type='text'
                className='form-control'
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <label
                htmlFor='username'
                className='block text-sm font-medium leading-6 text-gray-900'>
                User
              </label>
              <div className='mt-2'>
                <select
                  id='username'
                  name='username'
                  autoComplete='username'
                  value={identityRef}
                  onChange={(e) => setIdentityRef(e.target.value)}
                  //   onChange={(e) => console.log(e.target.value)}
                  required
                  className='block w-full rounded-md bg-white border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                  <option value=''>Select a user</option>
                  {customers.map((customer) => (
                    <option
                      key={customer.identityRef}
                      value={customer.identityRef}>
                      {customer.username}
                    </option>
                  ))}
                </select>
                {/* <select name='' id=''>
                  <option>select a user</option>
                  {customers.map((customer) => (
                    <option
                      key={customer.identityRef}
                      value={customer.identityRef}>
                      {customer.firstName} {customer.lastName}
                    </option>
                  ))}
                </select> */}
              </div>
            </div>

            <div>
              <label
                htmlFor='AccountStatus'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Account Status
              </label>
              <div className='mt-2'>
                <select
                  id='accountStatus'
                  name='accountStatus'
                  type='text'
                  value={status}
                  autoComplete='firstName'
                  onChange={(e) => setStatus(e.target.value)}
                  required
                  className='block w-full bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                  <option value=''>Select a Status</option>
                  <option value='OPENED'>OPENED</option>
                  <option value='CLOSED'>CLOSED</option>
                  <option value='BLOCKED'>BLOCKED </option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor='Rib'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Rib
              </label>
              <div className='mt-2'>
                <input
                  id='rib'
                  name='rib'
                  type='text'
                  value={rib}
                  autoComplete='rib'
                  onChange={(e) => setRib(e.target.value)}
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='amount'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Amount
              </label>
              <div className='mt-2'>
                <input
                  id='amount'
                  name='amount'
                  type='text'
                  value={amount}
                  autoComplete='amount'
                  onChange={(e) => setAmount(e.target.value)}
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                onClick={create}
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
      <BankDataTable bankaccounts={bankaccounts} />
    </div>
  );
}
