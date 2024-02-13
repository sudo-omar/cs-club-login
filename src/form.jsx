import { useState } from "react"; 
import sendData  from "./sendData";

const Form = () => {
    const [person, setPerson] = useState( {
        email : "",
        name : "",
        major: "",
        questionsAndComments : "",
        availability : ""
    });

    const handleName = (event) => {
        setPerson({
            ...person, name : event.target.value
        })
        console.log(person);
    }

    const handleEmailOrPhone = (event) => {
        setPerson( {
            ...person, email : event.target.value
        })
        console.log(person);
    }

    const handleQuestionsOrComments = (event) => {
        setPerson( {
            ...person, questionsAndComments : event.target.value
        });
        console.log(person);
    }

    const handleMajor = (event) => {
        setPerson( {
            ...person, major : event.target.value
        });
        console.log(person);
    }

    const handleAvailability = (event) => {
        setPerson( {
            ...person, availability : event.target.value
        })
    }

    


    //send to sendData.jsx
    const submitForm = () => {
        sendData(person)
        return person;
    }

    

    return (
    <>
            <body>
            <div id="wrapper">
            <div className="center">
                <input type="checkbox" id="show"></input>
                <label for="show" class="show-btn">Click Me to Unlock Your Potential</label>
                <div className="banner">
                    <h3 id="unlock">//Unlock Your Potential! </h3>
                    <h3 id="Forge">/*Forge Your Future in Tech!*/</h3>
                    <h3 id="code">#Code Your Dreams into Reality</h3>
                </div>

                <div className="container">
                    <label for="show" className="close-btn fas fa-times" title="close"></label>
                    <div className="text">
                    Computer Science Club Sign Up!
                    </div>
                    
                    <form>


                        <div className="data">
                            <label>Full Name*</label>
                            <input type="text" onChange={handleName} required></input>
                        </div>
                        <div className="data">
                            <label>Email or Phone*</label>
                            <input type="text" onChange={handleEmailOrPhone} required></input>
                        </div>
                        <div className="data">
                            <label>Major*</label>
                            <input type="text" onChange={handleMajor} required></input>
                        </div>

                        <div className="data" > 
                            <label>Availability (best day for meetings)*</label>
                            
                        </div>

                        <div className="data" id="avail">
                            <select onChange={handleAvailability}>
                                    <option value="mon">Monday</option>
                                    <option value="tue">Tuesday</option>
                                    <option value="wed">Wednesday</option>
                                    <option value="thu">Thursday</option>
                                    <option value="fri">Friday</option>
                                    <option value="sat">Saturday</option>
                                    <option value="sun">Sunday</option>
                                </select>
                        </div>

                        <div className="data">
                            <label>Questions/Comments</label>
                            <input type="text" onChange={handleQuestionsOrComments} ></input>
                        </div>
                        
                        <div className="btn">
                            <div className="inner"></div>
                            <button type="submit" onClick={submitForm}>Sign Up!</button>
                        </div>


                    </form>
                </div>
            </div>
            </div>
        </body>
    </>
    )

}



export default Form;