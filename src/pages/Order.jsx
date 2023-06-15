import React, {useEffect} from 'react'
import axios from 'axios';
const Order = () => {
  const [orders, setOrders] = React.useState([]);
  const Orders = async () => {
    const res = await axios.get('https://order-service-1b05.onrender.com/order')
    setOrders(res.data)
  }
  console.log(orders)
  useEffect(() => {
    Orders()
  }, [])
  return (
    <div>
      <div className='flex md:flex-row flex-col gap-4 mt-10 w-full'>
        {orders.map((order) => {
         return (
          <div className=" md:max-w-[350px] md:max-h-[200px] w-full h-full drop-shadow-full">
            <a href="#">
              <img
                className="rounded-t-lg w-64 h-48"
                src={order.bookId.image}
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {order.bookId.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {order.bookId.author}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {order.bookId.cost}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {order.customerId.name}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {order.customerId.age}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {order.customerId.address}
              </p>
            </div>
        </div>
         )
        }
        )}
    </div>
    </div>
  )
}

export default Order
