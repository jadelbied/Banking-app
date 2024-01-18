import { useEffect, useState } from 'react';
import AuthService from '../../services/auth.service';

export default function DataTable({ customers, editCustomer, deleteCustomer }) {
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
                  User Name
                </th>
                <th scope='col' className='py-3 px-6'>
                  First Name
                </th>
                <th scope='col' className='py-3 px-6'>
                  Last Name
                </th>
                <th scope='col' className='py-3 px-6'>
                  Identifier Ref
                </th>
                {showAgentGuichetBoard && (
                  <th scope='col' className='py-3 px-6'>
                    Action
                  </th>
                )}
              </tr>
            </thead>
            {customers?.map((customer, index) => {
              return (
                <tbody key={customer.id}>
                  <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                    <td className='py-4 px-6'>{customer?.id}</td>
                    <td className='py-4 px-6'>{customer?.firstname}</td>
                    <td className='py-4 px-6'>{customer?.lastname}</td>
                    <td className='py-4 px-6'>{customer?.identityRef}</td>
                    <td className='py-4 px-6'>{customer?.username}</td>
                    {showAgentGuichetBoard && (
                      <td className='py-4 px-6'>
                        <button
                          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
                          onClick={() => editCustomer(customer)}>
                          Edit
                        </button>
                        <button
                          type='button'
                          className='ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'
                          onClick={() => deleteCustomer(customer.identityRef)}>
                          Delete
                        </button>
                      </td>
                    )}
                  </tr>
                </tbody>
              );
            })}
            {/* <tbody>
              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <td className='py-4 px-6'>Alex Johnson</td>
                <td className='py-4 px-6'>82926417</td>
                <td className='py-4 px-6'>$4,500.00</td>
                <td className='py-4 px-6'>Yes</td>
              </tr>
              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <td className='py-4 px-6'>Maria Garcia</td>
                <td className='py-4 px-6'>55387621</td>
                <td className='py-4 px-6'>$3,150.00</td>
                <td className='py-4 px-6'>No</td>
              </tr>
              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <td className='py-4 px-6'>James Smith</td>
                <td className='py-4 px-6'>90817264</td>
                <td className='py-4 px-6'>$7,820.00</td>
                <td className='py-4 px-6'>Yes</td>
              </tr>
              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <td className='py-4 px-6'>Patricia Brown</td>
                <td className='py-4 px-6'>26483910</td>
                <td className='py-4 px-6'>$1,230.00</td>
                <td className='py-4 px-6'>Yes</td>
              </tr>
              <tr className='bg-white dark:bg-gray-800'>
                <td className='py-4 px-6'>Ethan Davis</td>
                <td className='py-4 px-6'>64738290</td>
                <td className='py-4 px-6'>$865.00</td>
                <td className='py-4 px-6'>No</td>
              </tr>
            </tbody> */}
          </table>
        </div>
      </div>
    </div>
  );
}
