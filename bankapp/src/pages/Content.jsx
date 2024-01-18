import { useEffect, useState } from 'react';
import NavBar from '../components/Header';
import AuthService from '../services/auth.service';

export const Content = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      // setShowClientBoard(user.roles.includes('ROLE_CLIENT'));
      // setShowAgentGuichetBoard(user.roles.includes('ROLE_AGENT_GUICHET'));
      // setShowAgentGuichetGetBoard(
      //   user.roles.includes('ROLE_AGENT_GUICHET_GET')
      // );
    }
  }, []);
  return (
    <div>
      <NavBar />
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <h6 className='max-w-lg mb-6 font-sans text-xl font-bold tracking-tight text-gray-900 sm:text-xl sm:leading-none'>
          Welcome {currentUser?.username}
        </h6>
        <div className='grid gap-5 row-gap-8 lg:grid-cols-2'>
          <div className='flex flex-col justify-center'>
            <div className='max-w-xl mb-6'>
              <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                Empower Your Financial Journey
                <br className='hidden md:block' />
                with{' '}
                <span className='text-teal-accent-400'>
                  Our Banking Solutions
                </span>
              </h2>
              <p className='text-base text-gray-700 md:text-lg'>
                Explore our range of financial services designed to provide you
                with a seamless and secure banking experience. Let us guide you
                towards your financial goals.
              </p>
            </div>
            <div className='grid gap-5 row-gap-8 sm:grid-cols-2'>
              <div className='bg-white border-l-4 shadow-sm border-teal-accent-400'>
                <div className='h-full p-5 border border-l-0 rounded-r'>
                  <h6 className='mb-2 font-semibold leading-5'>
                    Simplify Your Transactions
                  </h6>
                  <p className='text-sm text-gray-900'>
                    Enjoy hassle-free banking with our efficient and secure
                    transaction processes. Experience the ease of managing your
                    funds online.
                  </p>
                </div>
              </div>
              <div className='bg-white border-l-4 shadow-sm border-teal-accent-400'>
                <div className='h-full p-5 border border-l-0 rounded-r'>
                  <h6 className='mb-2 font-semibold leading-5'>
                    Your Financial Partner
                  </h6>
                  <p className='text-sm text-gray-900'>
                    We are your dedicated financial partner, offering a range of
                    services tailored to your needs. Trust us to be with you
                    every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className='object-cover w-full h-56 rounded shadow-lg sm:h-96'
              src='https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};
