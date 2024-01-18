// import { Fragment, useEffect, useState } from 'react';
// import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
// import {
//   ArrowPathIcon,
//   Bars3Icon,
//   ChartPieIcon,
//   CursorArrowRaysIcon,
//   FingerPrintIcon,
//   SquaresPlusIcon,
//   XMarkIcon,
// } from '@heroicons/react/24/outline';
// import {
//   ChevronDownIcon,
//   PhoneIcon,
//   PlayCircleIcon,
// } from '@heroicons/react/20/solid';
// import AuthService from '../services/auth.service';

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// export default function NavBar() {
//   const [currentUser, setCurrentUser] = useState(undefined);
//   const [showClientBoard, setShowClientBoard] = useState(false);
//   const [showAgentGuichetBoard, setShowAgentGuichetBoard] = useState(false);
//   const [showAgentGuichetGetBoard, setShowAgentGuichetGetBoard] =
//     useState(false);

//   useEffect(() => {
//     const user = AuthService.getCurrentUser();

//     if (user) {
//       setCurrentUser(user);
//       setShowClientBoard(user.roles.includes('ROLE_CLIENT'));
//       setShowAgentGuichetBoard(user.roles.includes('ROLE_AGENT_GUICHET'));
//       setShowAgentGuichetGetBoard(
//         user.roles.includes('ROLE_AGENT_GUICHET_GET')
//       );
//     }
//   }, []);

//   const logOut = () => {
//     AuthService.logout();
//     setShowClientBoard(false);
//     setShowAgentGuichetBoard(false);
//     setShowAgentGuichetGetBoard(false);
//     setCurrentUser(undefined);
//   };

//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <header className='bg-white'>
//       <nav
//         className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
//         aria-label='Global'>
//         <div className='flex lg:flex-1'>
//           <a href='1' className='-m-1.5 p-1.5'>
//             <span className='sr-only'>Your Company</span>
//             <img
//               className='h-8 w-auto'
//               src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
//               alt=''
//             />
//           </a>
//         </div>
//         <div className='flex lg:hidden'>
//           <button
//             type='button'
//             className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
//             onClick={() => setMobileMenuOpen(true)}>
//             <span className='sr-only'>Open main menu</span>
//             <Bars3Icon className='h-6 w-6' aria-hidden='true' />
//           </button>
//         </div>
//         <Popover.Group className='hidden lg:flex lg:gap-x-12'>
//           <a href='1' className='text-sm font-semibold leading-6 text-gray-900'>
//             Features
//           </a>
//           <a href='1' className='text-sm font-semibold leading-6 text-gray-900'>
//             Features
//           </a>
//           <a href='1' className='text-sm font-semibold leading-6 text-gray-900'>
//             Marketplace
//           </a>
//           <a href='1' className='text-sm font-semibold leading-6 text-gray-900'>
//             Company
//           </a>
//         </Popover.Group>
//         <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
//           <a
//             href='/login'
//             className='text-sm font-semibold leading-6 text-gray-900'>
//             Log out <span aria-hidden='true'>&rarr;</span>
//           </a>
//         </div>
//       </nav>
//       <Dialog
//         as='div'
//         className='lg:hidden'
//         open={mobileMenuOpen}
//         onClose={setMobileMenuOpen}>
//         <div className='fixed inset-0 z-10' />
//         <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
//           <div className='flex items-center justify-between'>
//             <a href='1' className='-m-1.5 p-1.5'>
//               <span className='sr-only'>Your Company</span>
//               <img
//                 className='h-8 w-auto'
//                 src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
//                 alt=''
//               />
//             </a>
//             <button
//               type='button'
//               className='-m-2.5 rounded-md p-2.5 text-gray-700'
//               onClick={() => setMobileMenuOpen(false)}>
//               <span className='sr-only'>Close menu</span>
//               <XMarkIcon className='h-6 w-6' aria-hidden='true' />
//             </button>
//           </div>
//           <div className='mt-6 flow-root'>
//             <div className='-my-6 divide-y divide-gray-500/10'>
//               <div className='space-y-2 py-6'>
//                 <Disclosure as='div' className='-mx-3'>
//                   {({ open }) => (
//                     <>
//                       <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
//                         Product
//                         <ChevronDownIcon
//                           className={classNames(
//                             open ? 'rotate-180' : '',
//                             'h-5 w-5 flex-none'
//                           )}
//                           aria-hidden='true'
//                         />
//                       </Disclosure.Button>
//                       {/* <Disclosure.Panel className='mt-2 space-y-2'>
//                         {[...products, ...callsToAction].map((item) => (
//                           <Disclosure.Button
//                             key={item.name}
//                             as='a'
//                             href={item.href}
//                             className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
//                             {item.name}
//                           </Disclosure.Button>
//                         ))}
//                       </Disclosure.Panel> */}
//                     </>
//                   )}
//                 </Disclosure>
//                 <a
//                   href='1'
//                   className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
//                   Features
//                 </a>
//                 <a
//                   href='1'
//                   className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
//                   Marketplace
//                 </a>
//                 <a
//                   href='1'
//                   className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
//                   Company
//                 </a>
//               </div>
//               <div className='py-6'>
//                 <a
//                   href='1'
//                   className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
//                   Log out
//                 </a>
//               </div>
//             </div>
//           </div>
//         </Dialog.Panel>
//       </Dialog>
//     </header>
//   );
// }
import { Fragment, useEffect, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid';
import AuthService from '../services/auth.service';
import { useNavigate } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(undefined);
  const [showClientBoard, setShowClientBoard] = useState(false);
  const [showAgentGuichetBoard, setShowAgentGuichetBoard] = useState(false);
  const [showAgentGuichetGetBoard, setShowAgentGuichetGetBoard] =
    useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowClientBoard(user.roles.includes('ROLE_CLIENT'));
      setShowAgentGuichetBoard(user.roles.includes('ROLE_AGENT_GUICHET'));
      setShowAgentGuichetGetBoard(
        user.roles.includes('ROLE_AGENT_GUICHET_GET')
      );
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowClientBoard(false);
    setShowAgentGuichetBoard(false);
    setShowAgentGuichetGetBoard(false);
    setCurrentUser(undefined);
    navigate('/');
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='bg-white'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
        aria-label='Global'>
        <div className='flex lg:flex-1'>
          <a href='1' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <img
              className='h-8 w-auto'
              src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
              alt=''
            />
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}>
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <Popover.Group className='hidden lg:flex lg:gap-x-12'>
          {showAgentGuichetBoard || showAgentGuichetGetBoard ? (
            <a
              href='/customermg'
              className='text-sm font-semibold leading-6 text-gray-900'>
              Customers Management
            </a>
          ) : null}
          {showAgentGuichetBoard || showAgentGuichetGetBoard ? (
            <a
              href='/bankaccountmg'
              className='text-sm font-semibold leading-6 text-gray-900'>
              Bank Accounts Management
            </a>
          ) : null}
          {showAgentGuichetBoard || showAgentGuichetGetBoard ? (
            <a
              href='/profile'
              className='text-sm font-semibold leading-6 text-gray-900'>
              {currentUser.username}'s Profile
            </a>
          ) : null}
          {showClientBoard ? (
            <a
              href='/myaccount'
              className='text-sm font-semibold leading-6 text-gray-900'>
              My Bank Account
            </a>
          ) : null}
          {showClientBoard ? (
            <a
              href='/transfer'
              className='text-sm font-semibold leading-6 text-gray-900'>
              Wired Transfer
            </a>
          ) : null}
          {showClientBoard ? (
            <a
              href='/profile'
              className='text-sm font-semibold leading-6 text-gray-900'>
              {currentUser.username}'s Profile
            </a>
          ) : null}
        </Popover.Group>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          {currentUser && (
            <button
              onClick={logOut}
              className='text-sm font-semibold leading-6 text-gray-900'>
              Log out <span aria-hidden='true'>&rarr;</span>
            </button>
          )}
        </div>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='1' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <img
                className='h-8 w-auto'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                alt=''
              />
            </a>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}>
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      {/* <Disclosure.Panel className='mt-2 space-y-2'>
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as='a'
                            href={item.href}
                            className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel> */}
                    </>
                  )}
                </Disclosure>
                <a
                  href='1'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                  Features
                </a>
                <a
                  href='1'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                  Marketplace
                </a>
                <a
                  href='1'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                  Company
                </a>
              </div>
              <div className='py-6'>
                <a
                  href='/'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                  Log out
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
