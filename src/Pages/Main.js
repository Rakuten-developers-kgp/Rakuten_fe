import React from 'react';
import '../styles/main.css';
// import { Link } from 'react-router-dom';

function Main() {
    return (
        <div className='main'>
            <div className='col1'>
                <button class="button">
                    Display names
                </button>
                <textarea className='log-view' id="w3review" name="w3review" rows="30" cols="50"></textarea>
            </div>
            <div className='col2'>
                <label for="lname">Enter the name to add:</label>
                <br />
                <input className='log-key' type="text" id="lname" placeholder='Enter here' name="lname" />
                {/* <input className='val-key' type="text" id="lname" placeholder='Enter Value' name="lname" /> */}
                <button class="button button2">Add name</button>

                <br /><br /><br />
                <br />
                <hr className='hrc2' />
                <br /><br /><br />

                <div className='c2r2'>
                    <label for="lname">Enter the name to delete:</label>
                    <br />
                    <input className='log-key' type="text" id="lname" placeholder='Enter here' name="lname" />
                    {/* <input className='val-key' type="text" id="lname" placeholder='Enter Value' name="lname" /> */}
                    <button class="button button3">Delete name</button>
                </div>


            </div>
        </div>
    )
}
export default Main;