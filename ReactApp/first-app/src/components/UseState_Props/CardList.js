import React,{ useState } from "react";
import './CardList.css';
import Card from "./Card";
import pic1 from '../UseState_Props/images/pic1.jpeg';
import pic2 from '../UseState_Props/images/pic2.jpeg';
import pic3 from '../UseState_Props/images/pic3.jpeg';
import pic4 from '../UseState_Props/images/pic4.jpeg';
import pic5 from '../UseState_Props/images/pic5.jpeg';
import pic6 from '../UseState_Props/images/pic6.jpeg';
import pic7 from '../UseState_Props/images/pic7.jpeg';
import pic8 from '../UseState_Props/images/pic8.jpeg';


const CardList = () => {
    const [state, setState] = useState({
        // name : "Harsh Tripathi"

        
   });
   
   const details = [
    {
        name : 'Alex',
        date : 'Jan 25',
        profile : pic1,
        userId: '@alex',
        id: '1',
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      },
    {
        name : 'Alex',
        date : 'Jan 25',
        profile : pic2,
        userId: '@alex',
        id: '1',
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      },
    {
        name : 'Alex',
        date : 'Jan 25',
        profile : pic3,
        userId: '@alex',
        id: '1',
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      },
    {
        name : 'Alex',
        date : 'Jan 25',
        profile : pic4,
        userId: '@alex',
        id: '1',
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      },
      {
        name : 'Alex',
        date : 'Jan 25',
        profile : pic4,
        userId: '@alex',
        id: '1',
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      },
      {
        name : 'Alex',
        date : 'Jan 25',
        profile : pic4,
        userId: '@alex',
        id: '1',
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        
      },
   ];

    

//    const setStateName = (name) => {
//     setState( {...state , name});
//    }

    return(
        <div className="Cards-Container">

            <div className="box">
                {details.map((value) =>(
                    <Card
                        name= {value.name}
                        profile={value.profile}
                        body={value.body}
                        userid={value.userId}
                        id={value.id}
                        title={value.title}
                        date={value.date}
                    />
                ))}
            </div>
            {/* <Card name={state.name} setState={setStateName} /> */}
        </div>
    );
}
export default CardList;