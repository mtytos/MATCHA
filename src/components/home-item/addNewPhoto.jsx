import React from "react";
import ButtonUpload from "../btn/btn-upload";

const NewPhotoCard = (props) => {


    const newPhotoStyle = {
        color: "#f50057",
        paddingTop: "35%"
    }

    return (
        <div className="col s12 m4 l4 xl4">
            <div className="card">
                <div className="card-image center-align">
                    <form encType="multipart/form-data" method="post" action="http://84.201.166.200:8080/api/media/upload">
                        <input style={newPhotoStyle} type="file" name="user_image"/>
                        <input type="hidden" name="id" value="07843a9b54d2b6778f53b8221a28e7e8261edaef890fcb2efa91ed406a385418"/>
                        <ButtonUpload name="Add"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewPhotoCard;