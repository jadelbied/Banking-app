import React, { Component, useEffect, useState } from 'react';
import NavBar from '../../components/Header';
import DataTable from '../../components/AgentGuichet/table';
import CustomersService from '../../services/customers.service';
import AuthService from '../../services/auth.service';

export default function CustomerManagement() {
  const [id, setId] = useState('');
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [identityRef, setIdentityRef] = useState('');
  const [email,setEmail]=useState('');
  const [codepostal,setCodepostal]=useState('');
  const [dateanniv,setDateanniv]=useState('');
  const [edit, setEdit] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [showAgentGuichetBoard, setShowAgentGuichetBoard] = useState(false);

  async function save(event) {
    event.preventDefault();
    if (id) {
      await CustomersService.updateCustomer(
        identityRef,
        firstname,
        lastname,
        username,email,dateanniv,codepostal
      ).then((result) => console.log('Customer updated with success'));
    } else {
      await CustomersService.createCustomer(
        identityRef,
        firstname,
        lastname,
        username,email,dateanniv,codepostal
      ).then((result) => console.log('Customer added with success'));
    }
    // reset state
    setId('');
    setFirstname('');
    setLastname('');
    setIdentityRef('');
    setUsername('');
    setEmail('');
    setCodepostal('');
    setDateanniv('');
    loadCustomers();
    setEdit(false);
    // setMessageError('');
  }

  async function editCustomer(customers) {
    setEdit(true);
    setFirstname(customers.firstname);
    setLastname(customers.lastname);
    setIdentityRef(customers.identityRef);
    setUsername(customers.username);
    setEmail(customers.email);
    setCodepostal(customers.codepostal);
    setDateanniv(customers.dateanniv);
    setId(customers.id);
    // setMessageError("");
    // setMessageInfo("");
  }

  async function deleteCustomer(id) {
    // setMessageError('');
    // setMessageInfo('');
    await CustomersService.deleteCustomer(id)
      .then((result) => {
        console.log(result.data);
      })
      .catch((e) => {
        console.log(e);
        console.log(e.response.data.message);
      });
    loadCustomers();
  }

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setShowAgentGuichetBoard(user.roles.includes('ROLE_AGENT_GUICHET'));
    }

    if (user) (async () => await loadCustomers())();
  }, []);

  async function loadCustomers() {
    await CustomersService.getCustomers()
      .then((result) => {
        setCustomers(result.data);
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
                UserName
              </label>
              <div className='mt-2'>
                <input
                  id='username'
                  name='username'
                  type='text'
                  value={username}
                  autoComplete='username'
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='firstName'
                className='block text-sm font-medium leading-6 text-gray-900'>
                firstName
              </label>
              <div className='mt-2'>
                <input
                  id='firstName'
                  name='firstName'
                  type='text'
                  value={firstname}
                  autoComplete='firstName'
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='lastName'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Lastname
              </label>
              <div className='mt-2'>
                <input
                  id='lastName'
                  name='lastName'
                  type='text'
                  value={lastname}
                  autoComplete='lastName'
                  onChange={(e) => setLastname(e.target.value)}
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='identifier'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Identifier ref
              </label>
              <div className='mt-2'>
                <input
                  id='identifier'
                  name='identifier'
                  type='text'
                  value={identityRef}
                  autoComplete='identifier'
                  onChange={(e) => setIdentityRef(e.target.value)}
                  required
                  disabled={edit}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div>
    <label
      htmlFor='email'
      className='block text-sm font-medium leading-6 text-gray-900'>
      Email
    </label>
    <div className='mt-2'>
      <input
        id='email'
        name='email'
        type='email'
        value={email}
        autoComplete='email'
        onChange={(e) => setEmail(e.target.value)}
        required
        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
      />
    </div>
  </div>

  <div>
    <label
      htmlFor='dateanniv'
      className='block text-sm font-medium leading-6 text-gray-900'>
      Date of Birth
    </label>
    <div className='mt-2'>
      <input
        id='dateanniv'
        name='dateanniv'
        type='date'
        value={dateanniv}
        onChange={(e) => setDateanniv(e.target.value)}
        required
        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
      />
    </div>
  </div>

  <div>
    <label
      htmlFor='codepostal'
      className='block text-sm font-medium leading-6 text-gray-900'>
      Postal Code
    </label>
    <div className='mt-2'>
      <input
        id='codepostal'
        name='codepostal'
        type='text'
        value={codepostal}
        autoComplete='codepostal'
        onChange={(e) => setCodepostal(e.target.value)}
        required
        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
      />
    </div>
  </div>
            <div>
              <button
                type='submit'
                onClick={save}
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                {edit ? 'Update' : 'Create'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <DataTable
        customers={customers}
        editCustomer={editCustomer}
        deleteCustomer={deleteCustomer}
        setEdit={setEdit}
      />
    </div>
  );
}
