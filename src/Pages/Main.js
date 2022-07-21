import React from 'react';
import '../styles/main.css';
import { useState, useEffect } from "react";
import axios from "axios";

// import { Link } from 'react-router-dom';
const getDatas = ["nitish", "homesh", "mohan", "anil", "lodu", "ankur"]

function Main(props) {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');

    const handleClick = async () => {
        setIsLoading(true);
        try {
            const { data } = await axios.get('http://localhost:8000/get_data', {
            });
            console.log(data);
            setData(data);
        } catch (err) {
            setErr(err.message);
        } finally {
            setIsLoading(false);
        }
    };


    const [userData, setUserData] = useState({
        name: "",
    });

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]: value });
    };


    // connect with firebase

    const submitData = async (event) => {
        event.preventDefault();
        const { name } = userData;

        if (name) {


fetch(
                "http://localhost:8000/input_name",
                {
                    method: "POST",
                    Headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: name,
                    }),
                }
            );
        }
    }

    return (
        <div className='main'>
            <div className='col1'>

                <div>
                    {err && <h2>{err}</h2>}

                    <button class="button" onClick={handleClick}>Fetch data</button>

                    {isLoading && <h2>Loading...</h2>}

                    {data.map((person, key) => {
                        return (
                            <div>

                                <div>
                                    <table className='get-table' >
                                        <tr>
                                            <td className='row-get'>{key + 1}</td>
                                            <td className='row-get2'>{person}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>

                        );
                    })}
                </div>


            </div>
            <div className='col2'>
                <label for="lname">Enter the name to add:</label>
                <br />
                <input className='log-key' type="text" id="lname" placeholder='Enter here' name="lname" />
                {/* <input className='val-key' type="text" id="lname" placeholder='Enter Value' name="lname" /> */}
                <button class="button button2">Add name</button>


                <form method="POST" className='form-input' onSubmit={submitData} >

                    <span className='i-head' >Name:</span>
                    <input
                        type="name"
                        placeholder="Name"
                        name="name"
                        className='i-fill'
                        value={userData.name}
                        onChange={postUserData}
                    ></input>
                    <br />
                    <center>
                        <button
                            name="submit"
                            placeholder="Submit"
                            className="sub-btn"
                            type='submit'
                            value="submit"
                        // onClick={submitData}
                        // onClick={openModal}
                        ><b>Submit</b></button>
                    </center>

                </form>



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