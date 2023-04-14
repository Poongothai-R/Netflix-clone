// Node modules
import { ref, getDownloadURL,  uploadBytesResumable } from "firebase/storage";


// Project files
import { cloudStorage, } from "./firebaseSetup";

export async function uploadFile(file, filePath) {
    let result = { status: false, payload: null, message: "" };
    try {
        const reference = ref(cloudStorage, filePath);
        let url = "";
        await uploadBytesResumable(reference, file);
        url = await getDownloadURL(reference);
        result = { status: true, payload: url, message: `File upload at ${url}` };
    }
    catch (error) {
        result.message = error.code;
    }

    return result;
 }




