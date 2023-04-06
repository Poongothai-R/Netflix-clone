import Placeholder from "../assets/images/placeholder.jpg";
import {Link} from "react-router-dom";
import { useCategory } from "../state/useCategory";
import DeleteSeason from "./DeleteSeason";

export default function SeasonItems({path,seasonData, recs}){

    const { id, BannerImage } = seasonData;
    const { setModal } = useCategory();
    const ImageSource = (BannerImage === null) ? Placeholder : BannerImage;

    const DeleteItem = <DeleteSeason id={id} path={path} seasonNumber={recs}/>;

    return (

        <div className="card-data" >
            <img src={ImageSource} alt={recs} />
            <span>{recs}</span>
            <div className="modal-buttons">
                <button onClick={() => setModal(DeleteItem)}>❌</button>
            </div>
            {(path !=='TVShows') && <Link className="card-link"/>}
            {(path ==='TVShows') && <Link className="card-link" to={"/tvshows/seasons"}/>}
        </div >

    )
}