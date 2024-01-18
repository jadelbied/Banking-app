import React from 'react';

interface Props {
  title: string;
}

const layout: React.FC<Props> = ({ title }) => {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Epilogue:wght@500;700&display=swap'
          rel='stylesheet'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='./images/favicon-32x32.png'
        />
        <title>{title}</title>
      </head>
      <body className='text-medium-gray bg-almost-white z-0'>
        <slot />
      </body>
    </html>
  );
};

export default layout;
