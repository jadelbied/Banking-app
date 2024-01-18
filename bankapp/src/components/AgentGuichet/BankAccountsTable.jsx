import { useEffect, useState } from 'react';
import AuthService from '../../services/auth.service';

export default function BankDataTable({ bankaccounts }) {
  const [showAgentGuichetBoard, setShowAgentGuichetBoard] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setShowAgentGuichetBoard(user.roles.includes('ROLE_AGENT_GUICHET'));
    }
  }, []);

  return (
    <div className='flex items-center justify-center  '>
      <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
        <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='py-3 px-6'>
                  Id{' '}
                </th>
                <th scope='col' className='py-3 px-6'>
                  Full Name
                </th>
                <th scope='col' className='py-3 px-6'>
                  RIB
                </th>
                <th scope='col' className='py-3 px-6'>
                  Amount
                </th>
                <th scope='col' className='py-3 px-6'>
                  Created At
                </th>
                <th scope='col' className='py-3 px-6'>
                  Customer Ref
                </th>
                <th scope='col' className='py-3 px-6'>
                  Account Status
                </th>
              </tr>
            </thead>
            {bankaccounts?.map((bankaccount, index) => {
              return (
                <tbody key={bankaccount.id}>
                  <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                    <td className='py-4 px-6'>{bankaccount?.id}</td>
                    <td className='py-4 px-6'>
                      {bankaccount?.customer.firstname +
                        '  ' +
                        bankaccount?.customer.lastname}
                    </td>
                    <td className='py-4 px-6'>{bankaccount?.rib}</td>
                    <td className='py-4 px-6'>{bankaccount?.amount}</td>
                    <td className='py-4 px-6'>{bankaccount?.createdAt}</td>
                    <td className='py-4 px-6'>
                      {bankaccount?.customer.identityRef}
                    </td>
                    <td className='py-4 px-6'>{bankaccount?.accountStatus}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}
