import Placeholder from "../../assets/images/placeholder.jpg";
import { useCategory } from "../../state/useCategory";
import DeleteCategory from "./DeleteCategory";
import UpdateCategory from "./UpdateCategory";
import { Link } from "react-router-dom";
import UpdateMedia from "./UpdateMedia";
import { useSeason } from "../../state/useSeason";
import DisplayModal from "../client/DisplayModal";

export default function CategoryCard({ path, categoryData }) {
  const { id, BannerImage, Title } = categoryData;
  const showname = Title.replace(/ /g, "");

  // Global state
  const { setModal } = useCategory();
  const { saveCID, categoryDispatch } = useSeason();

  const DeleteItem = (
    <DeleteCategory id={id} path={path} deleteType={"Category"} />
  );
  const UpdateMediaFile = (
    <UpdateMedia data={categoryData} path={path} updatemediatype={"Category"} />
  );
  const UpdateItem = (
    <UpdateCategory data={categoryData} path={path} updatetype={"Category"} />
  );
  // Properties
  const ImageSource = BannerImage === null ? Placeholder : BannerImage;
  // Side effects - 1: also if you need to do .toLowercase, fix the problem of the case font elsewhere, that tiny thing can lead to very hard to debug errors
  const Modal = <DisplayModal data={categoryData} mediacategory={path} />;

  function setCategoryID(id) {
    saveCID(id);
    categoryDispatch({ type: "INIT_ITEM", payload: id });
  }

  return (
    <div className="card-data">
      <img src={ImageSource} alt={Title} />
      <span>{Title}</span>
      <div className="modal-buttons">
        <button onClick={() => setModal(UpdateMediaFile)}>🏞️</button>
        <button onClick={() => setModal(UpdateItem)}>📝</button>
        <button onClick={() => setModal(DeleteItem)}>❌</button>
      </div>
      {path !== "TVShows" && (
        // Formatting this looks terrible with Prettier enabled
        // Here you can create a variable for the dispaly modal and just pass that
        <Link className="card-link" onClick={() => setModal(Modal)} />
      )}
      {path === "TVShows" && (
        <Link
          className="card-link"
          onClick={() => setCategoryID(id)}
          to={`/tvshows/${showname}`}
        />
      )}
    </div>
  );
}
