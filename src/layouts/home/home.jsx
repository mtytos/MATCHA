import React, {useContext} from "react";
import {UserContext} from "../../context/UserContext";
import AvatarCard from "../../components/home-item/avatar";
import AboutCard from "../../components/home-item/about";
import PhotoCard from "../../components/home-item/photo";
import NewPhotoCard from "../../components/home-item/addNewPhoto";
import {newDataURL} from "../../api/env";

const Home = () => {
    const {user} = useContext(UserContext);

    const socket = new WebSocket("ws://aim-love.ga/ws");
    socket.onopen = function() {
        alert("Соединение установлено.");
    };

    return (
        <div className="container left-align">
            <div className="row">
                <AvatarCard
                    ava={"http://84.201.166.200:8080/api/media/img/5ed546360bf701000727fb4c"}
                    name={user.data.username}
                    age={user.data.age}
                    city={user.data.city}
                    dist={9}/>
                <AboutCard
                    text={"I am a very simple card. I am good at containing small bits of information." +
                    "I am convenient because I require little markup to use effectively."}/>
                <div className="col s12 m12 l12 xl12">
                    <div className="card">
                        <div className="card-content pink accent-3 white-text">
                            <span className="card-title">Gallery</span>
                        </div>
                    </div>
                </div>
                <PhotoCard
                    photo={"https://24smi.org/public/media/celebrity/2017/12/11/1yughuj5gile-naomi-skott.jpg"}/>
                <PhotoCard
                    photo={"https://placefun.ru/uploads/posts/2020-01/1579244776_00.jpg"}/>
                <PhotoCard
                    photo={"https://upload.wikimedia.org/wikipedia/commons/a/a5/Naomi_Scott.jpg"}/>
                <PhotoCard
                    photo={"https://biografii.net/wp-content/uploads/2018/09/03_PN2w2wC.jpg"}/>
                <PhotoCard
                    photo={"https://cdn.sm-news.ru/wp-content/uploads/2019/12/06/wp4455257-1300x675.jpg"}/>
                <PhotoCard
                    photo={"http://84.201.166.200:8080/api/media/img/5ed546360bf701000727fb4c"}/>
                <NewPhotoCard/>
            </div>
        </div>
    );
}

export default Home;