import { useContext, useEffect, useState } from "react";
import "./MyOrders.css";
import axios from "axios";
import { StoreContext } from "../../Context/StoreContext";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { BACKEND_URL, token, currency } = useContext(StoreContext);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        BACKEND_URL + "/api/order/userorders",
        {},
        { headers: { token } }
      );
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="container">
        {loading ? (
          <div className="verify">
            <div className="spinner"></div>
          </div>
        ) : data.length > 0 ? (
          data.map((order, index) => {
            return (
              <div key={index} className="my-orders-order">
                <img src={assets.parcel_icon} alt="" />
                <p>
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return item.name + " x " + item.quantity;
                    } else {
                      return item.name + " x " + item.quantity + ", ";
                    }
                  })}
                </p>
                <p>
                  {currency}
                  {order.amount}.00
                </p>
                <p>Items: {order.items.length}</p>
                <p>
                  <span>&#x25cf;</span> <b>{order.status}</b>
                </p>
                <button onClick={fetchOrders}>Track Order</button>
              </div>
            );
          })
        ) : (
          <div className="empty-my-order">
            <img src={assets.empty_my_order} alt="Empty Cart" />
            <h3>There are no orders currently</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
