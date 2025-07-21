import { useGetAllOrderQuery } from "../redux/featchers/orders/orders";

const AproveOrder = () => {
  const { data } = useGetAllOrderQuery(undefined);
  console.log(data);
  return (
    <div>
      <div className="container mx-auto px-[20px]">
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>History</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AproveOrder;
