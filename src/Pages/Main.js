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
            const { data } = await axios.get('https://audubon-society-api.herokuapp.com/birds', {
            });
            console.log(data);
            setData(data);
        } catch (err) {
            setErr(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='main'>
            <div className='col1'>

                <div>
                    {err && <h2>{err}</h2>}

                    <button class="button" onClick={handleClick}>Fetch data</button>

                    {isLoading && <h2>Loading...</h2>}

                    {data.map(person => {
                        return (
                            <div key={person.name}>

                                {/* <div className='get-div' >
                    {getDatas.map((name, key) => (

                        <div>
                            <table className='get-table' >
                                <tr>
                                    <td className='row-get'>{key + 1}</td>
                                    <td className='row-get2'>{name}</td>
                                </tr>
                            </table>
                        </div>

                    ))}
                </div> */}

                                <p>{person.name}</p>
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