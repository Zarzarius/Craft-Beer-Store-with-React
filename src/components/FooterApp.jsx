import React from "react";
import { footer } from "react-bootstrap";

const FooterApp = () => {
  return (
    <>
      <footer className='bg-dark text-center text-lg-start'>
        <div className='text-center text-white p-3  fw-bold'>
          © 2021 Copyright:
          <a className='text-white' href='https://www.zarzarius.com/'>
            Zarzarius.com
          </a>
        </div>
      </footer>
    </>
  );
};
export default FooterApp;
