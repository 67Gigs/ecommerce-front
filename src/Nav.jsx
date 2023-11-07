import React from 'react'
import './css/Nav.css'

function Nav() {
  const logged = false;

  return (
    <div className='container'>
      <div className='Nav'>
        <div  className='left-section'>
            <a href='/' id='logo'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png' alt='logo' />
            </a>
        </div>
        
        <div className='center-section'>
          <input id='search-input' type='text' placeholder='Search for products, brands and more' />
          <button id='search-button'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clipPath="url(#clip0_425_10969)">
                <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_425_10969">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>

        <div className='right-section'>
            {
              logged ? 
                <>
                  <div id='shopping-list'>
                    <svg className='icons' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clipPath="url(#clip0_1912_2204)">
                        <path d="M15.55 13C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C21.25 4.82 20.77 4 20.01 4H5.21L4.27 2H1V4H3L6.6 11.59L5.25 14.03C4.52 15.37 5.48 17 7 17H19V15H7L8.1 13H15.55ZM6.16 6H18.31L15.55 11H8.53L6.16 6ZM7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill="#0D63F3"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1912_2204">
                          <rect width="24" height="24" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>   
                  </div>  
                  <div id='account'>
                    <svg className='icons' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clipPath="url(#clip0_840_15198)">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="#323232"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_840_15198">
                          <rect width="24" height="24" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>    
                  </div>
                </>
              :
              <div className='right-section'>
                  <a href='/login' id="login">
                    Login
                  </a>
                  <a href='/register' id='register'>
                    Register
                  </a>
              </div>
            }
        </div>
      </div>
    </div>
  )
}

export default Nav