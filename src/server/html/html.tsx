import React from 'react';

const Html = ({ styles, children }: any) => {
  return <html lang="en" className="h-100">
  <head>
    <base href="/"/>
    <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React BoilerPlate</title>
        {styles}
  </head>
  <body className="h-100">
  <div id="root">{children}</div>
  </body>
  </html>

};
export default  Html
