import {uploadPhotoURL} from "./env";

export const UploadPhoto = async (e, url = uploadPhotoURL) => {
    e.preventDefault();
    let data = {
        "id": "07843a9b54d2b6778f53b8221a28e7e8261edaef890fcb2efa91ed406a385418",
        "user_image": e.target.elements.user_image.files[0]
    }
    debugger
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: data
        });
        const json = await response.json();
        console.log('Успех:', JSON.stringify(json));
    } catch (error) {
        console.error('Ошибка:', error);
    }
}