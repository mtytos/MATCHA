import React, {useState} from "react";

const NewPhotoCard = (props) => {

    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData();
        data.append('id', "07843a9b54d2b6778f53b8221a28e7e8261edaef890fcb2efa91ed406a385418")
        data.append('user_image', files[0])
        setLoading(true)
        console.log(data);
        const res = await fetch(
            'http://84.201.166.200:8080/api/media/upload', {
                method: 'POST',
                body: data
            }
        )
        debugger
        const json = await res.json()
        console.log('Успех:', JSON.stringify(json))
        setLoading(false)
    }

    const newPhotoStyle = {
        color: "#f50057",
        paddingTop: "35%"
    }

    return (
        <div className="col s12 m4 l4 xl4">
            <div className="card">
                <div className="card-image center-align">
                    <input
                        name="user_image"
                        type="file"
                        placeholder="test"
                        onChange={uploadImage}
                        style={newPhotoStyle} />
                    <br/><br/>
                    <button className="btn-small pink accent-3 waves-effect waves-light">UPLOAD</button>
                    {/*<form encType="multipart/form-data" method="post" action="http://84.201.166.200:8080/api/media/upload">*/}
                    {/*    <p><input type="file" name="user_image"/>*/}
                    {/*        <input type="hidden" name="id" value="07843a9b54d2b6778f53b8221a28e7e8261edaef890fcb2efa91ed406a385418"/>*/}
                    {/*        <input type="submit" value="Отправить"/></p>*/}
                    {/*</form>*/}
                </div>
            </div>
        </div>
    );
}

export default NewPhotoCard;