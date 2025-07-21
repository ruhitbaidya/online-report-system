/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllOrderQuery } from "../redux/featchers/orders/orders";

const AproveOrder = () => {
  const { data } = useGetAllOrderQuery(undefined);
  console.log(data);
  return (
    <div>
      <div className="container mx-auto px-[20px]">
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>History</th>
                <th>Image</th>
                <th>Procuder</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data?.result?.map((item: any) => (
                  <tr>
                    <td>{item?.pasentId}</td>
                    <td>{item?.pasentName}</td>
                    <td>{item?.age}</td>
                    <td>{item?.history}</td>
                    <td>
                      {item?.reportImage?.map((img: string) => (
                        <img className="w-[50px] h-[50px]" src={img} />
                      ))}
                    </td>
                    <td>
                      {item?.producer?.map((prod: string) => (
                        <span>{prod}, </span>
                      ))}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AproveOrder;
