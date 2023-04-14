import { Link } from "react-router-dom";
import { useCategory } from "../../state/useCategory";
import Placeholder from "../../assets/images/placeholder.jpg";
import { AiOutlinePlayCircle } from "react-icons/ai";

export default function EpisodeList({ data, mediacategory, season, Title }) {

    const {EpisodeImage,EpisodeTitle,EpisodeDesc,id} = data;
    const { setModal } = useCategory();
    const ImageSource = (EpisodeImage === null) ? Placeholder : EpisodeImage;

    return (
        <div className="episodes">
            <div className="episode-media">
                <img src={ImageSource} alt={EpisodeTitle} />
                <AiOutlinePlayCircle className="react-playicon"/>
            </div>
            <div className="episodecontent">
                <h2>{EpisodeTitle}</h2>
                <h4>{EpisodeDesc}</h4>
            </div>
            <Link to={`/${mediacategory}/${Title}/${season}/${id}`} state={{ data }}
                onClick={() => setModal(null)}> </Link>
        </div>
    )
}