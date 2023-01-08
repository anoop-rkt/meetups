import { useNavigate } from 'react-router-dom'
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
    const navigate = useNavigate();
    function addMeetupHandler(meetUpData) {
        fetch(
            'https://meetups-1569f-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body : JSON.stringify(meetUpData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/')
        });
    }
    return <section>
        <h1>Add New Meeetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
}

export default NewMeetup;