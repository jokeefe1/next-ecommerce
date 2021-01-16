import React from 'react';

export default function MyApp({Component, pageProps}) {
  return (
    <>
      <nav>
        <a href='/'>home</a>
        <a href='/about'>about</a>
      </nav>
      <Component {...pageProps} />
      <footer>This is my fancy footer</footer>
    </>
  );
}
