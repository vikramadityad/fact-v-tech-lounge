import React from "react";
import "../styles/Events.css";
import PrimaryButton from "./PrimaryButton";


function Events() {

    //     const [popupVisible, setPopupVisible] = useState(false);
    //     const [popupContent, setPopupContent] = useState({});

    //     const openPopup = (event) => {
    //         const { title, description, date, fee } = event;
    //         setPopupContent({ title, description, date, fee });
    //         setPopupVisible(true);
    //     };

    //     const closePopup = () => {
    //         setPopupVisible(false);
    //     };

    const { details, register } = () => {
        console.log("testing");
    }




    return (
        <section>
            <h1 className="event_header"> Upcoming Events </h1>
            <div className="event_section">
                <div className="event-item">
                    <img className="item-img" src="src/images/menu-images/student-bootcamp-platter.jpg" alt="Event Picture" />
                    <h3>Event Title</h3>
                    <p>Event Description</p>
                    <div className="event-links">
                        <PrimaryButton
                            label="Details"
                            action={details}
                            type="btn-primary"
                        />
                        <dialog className="event_popup">
                            <button autofocus>Close</button>
                            <h3>Event Title</h3>
                            <p>Event Description</p>
                            <p> Date: 10-Oct-2023 at 9:00am to 5:00pm </p>
                            <p> Fee: $40 </p>
                            <PrimaryButton
                            className="reg_btn"
                                label="Register"
                                action={register}
                                type="btn-primary"
                            />
                        </dialog>
                        {/* <button href="/" target="_blank" rel="noopener noreferrer">Register</button> */}
                    </div>
                </div>



            </div>

            {/* {popupVisible && (
                <div className="popup">
                    <h3>{popupContent.title}</h3>
                    <p>{popupContent.description}</p>
                    <p>Date and Time: {popupContent.date}</p>
                    <p>Event Fee: {popupContent.fee}</p>
                    <button onClick={closePopup}>Close</button>
                </div>
            )} */}

        </section>
    );
}

export default Events;
