import { useEffect, useState } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { useCategory } from "../../state/useCategory";
import { readDocuments } from "../../scripts/fireStore";
import CategoryCard from "../../components/admin/CategoryCard";
import ModalAddForm from "../../components/admin/ModalAddForm";
import { useSeason } from "../../state/useSeason";

export default function Category() {
  const { categoryData, dispatch, setModal } = useCategory();
  const { saveCID } = useSeason();
  const [status, setStatus] = useState(0);
  const { category } = useParams();
  const collection =
    category === "movies"
      ? "Movies"
      : category === "tvshows"
      ? "TVShows"
      : "Documentaries";

  useEffect(() => {
    loadData(collection);
    saveCID("");
  }, []);
  async function loadData(collection) {
    const data = await readDocuments(collection).catch(onFail);
    onSuccess(data);
  }

  function onSuccess(data) {
    dispatch({ type: "INIT_ITEM", payload: data });
    setStatus(1);
  }

  function onFail() {
    setStatus(2);
  }

  const categoryItems =
    status === 1 &&
    categoryData.map((recs) => (
      <CategoryCard key={recs.id} categoryData={recs} path={collection} />
    ));

  // refactor tip
  if (status === 0) return <h1 className="loading"> Loading... </h1>;
  if (status === 2) return <h1> Error </h1>;

  return (
    <div>
      <div id="category">
        <div className="container">
          <div className="cards">
            {categoryData.length > 0 && categoryItems}
            <Link
              key={"AddForm"}
              onClick={() => {
                setModal(
                  <ModalAddForm path={collection} createType={"Category"} />
                );
              }}
            >
              <AiOutlineFileAdd className="reacticons" />
            </Link>
          </div>
        </div>
        <Link to={"/"} className="back-btn">
          Go Back
        </Link>
      </div>
    </div>
  );
}
