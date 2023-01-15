import React from 'react';
import Button from '@material-ui/core/Button';
import './Navbar.css';

const Navigation = ({onButtonSubmit}) => {

            return(
                //used to provide the button funtionality and displays the logo
                <nav className='navbar'>
                    <h3 className="logo">People Dictionary 📕</h3>
                    <div className='nav-links'>
                        <Button variant="contained" class="getBtn" onClick={onButtonSubmit} >
                            Get Users
                        </Button>
                    </div>
                </nav>
            );
        }

//{onRouteChange, isSignedIn}
export default Navigation;
