import React from 'react';
import NavBar from '../components/Header';

export default function Profile() {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <>
      <NavBar />

      <div className='mt-7 bg-white overflow-hidden shadow rounded-lg border '>
        <div className='px-4 py-5 sm:px-6'>
          <h3 className='text-lg leading-6 font-medium text-gray-900'>
            {user.username}'s Profile
          </h3>
          <p className='mt-1 max-w-2xl text-sm text-gray-500'>
            This is some information about the user.
          </p>
        </div>
        <div className='border-t border-gray-200 px-4 py-5 sm:p-0'>
          <dl className='sm:divide-y sm:divide-gray-200'>
            <div className='py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>User name</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {user.username}
              </dd>
            </div>
            <div className='py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Token</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {user.jwtToken}
              </dd>
            </div>
            <div className='py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Roles</dt>
              {user.roles.map((role) => (
                <>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    {role}
                  </dd>{' '}
                  <br />
                </>
              ))}
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}
