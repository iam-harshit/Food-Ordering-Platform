import { useEffect, useState } from "react";
import "./List.css";
import { currency } from "../../assets/assets";
import { BACKEND_URL } from "../../utils/Constant";
import axios from "axios";
import { toast } from "react-toastify";
import { ShimmerCategoryItem } from "react-shimmer-effects";

const List = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState({});

  const fetchList = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BACKEND_URL}/api/food/list`);
      setList(response.data.data);
      initializeImageLoadingState(response.data.data);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
    setLoading(false);
  };

  const initializeImageLoadingState = (items) => {
    const initialState = items.reduce((acc, item) => {
      acc[item._id] = false;
      return acc;
    }, {});
    setImagesLoaded(initialState);
  };

  const removeFood = async (foodId) => {
    const response = await axios.post(`${BACKEND_URL}/api/food/remove`, {
      id: foodId,
    });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };

  const handleImageLoad = (id) => {
    setImagesLoaded((prev) => ({ ...prev, [id]: true }));
  };

  const allImagesLoaded = () => {
    return Object.values(imagesLoaded).every((loaded) => loaded);
  };

  useEffect(() => {
    fetchList();
  }, []);

  useEffect(() => {
    if (list.length > 0 && allImagesLoaded()) {
      setLoading(false);
    }
  }, [imagesLoaded, list]);

  return (
    <div className="list add flex-col">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {loading ? (
          <div>
            {list.map((item) => (
              <ShimmerCategoryItem
                key={item._id}
                hasImage
                imageType="thumbnail"
                imageWidth={0}
                imageHeight={0}
                title
              />
            ))}
          </div>
        ) : (
          list.map((item) => {
            return (
              <div key={item._id} className="list-table-format">
                {!imagesLoaded[item._id] && (
                  <ShimmerCategoryItem
                    hasImage
                    imageType="thumbnail"
                    imageWidth={0}
                    imageHeight={30}
                  />
                )}
                <img
                  src={item.image}
                  alt={item.name}
                  onLoad={() => handleImageLoad(item._id)}
                  style={{ display: imagesLoaded[item._id] ? "block" : "none" }}
                />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>
                  {currency}
                  {item.price}
                </p>
                <p className="cursor" onClick={() => removeFood(item._id)}>
                  x
                </p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default List;
