import axios from "axios";
import { Table } from "flowbite-react";
import { toast } from "react-toastify";

const EnquiryList = ({ data, getAllEnquiry, Swal, setFormData }) => {
  // delete logic
  const deleteHandler = (delId) => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:8010/api/website/enquiry/delete/${delId}`)
          .then((res) => {
            toast.success("Enquiry Deleted Successfully");
            getAllEnquiry();
          });

        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  // edit logic
  const editHandler = (editId) => {
    axios
      .get(`http://localhost:8010/api/website/enquiry/single/${editId}`)
      .then((res) => {
        let data = res.data;
        setFormData(data.enquiry);
      });
  };

  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-[20px] font-bold mb-4">Enquiry List</h2>

      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>Sr. No.</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Phone</Table.HeadCell>
            <Table.HeadCell>Message</Table.HeadCell>

            <Table.HeadCell>
              <span>Edit</span>
            </Table.HeadCell>

            <Table.HeadCell>
              <span>Delete</span>
            </Table.HeadCell>
          </Table.Head>

          <Table.Body className="divide-y">
            {data.length >= 1 ? (
              data.map((item, index) => {
                return (
                  <Table.Row
                    key={index}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell>{index + 1}</Table.Cell>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.email}</Table.Cell>
                    <Table.Cell>{item.phone}</Table.Cell>
                    <Table.Cell>{item.message}</Table.Cell>

                    <Table.Cell>
                      <button
                        onClick={() => editHandler(item._id)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                      >
                        Edit
                      </button>
                    </Table.Cell>

                    <Table.Cell>
                      <button
                        onClick={() => deleteHandler(item._id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                      >
                        Delete
                      </button>
                    </Table.Cell>
                  </Table.Row>
                );
              })
            ) : (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell colSpan={7} className="text-center">
                  No Data Found
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default EnquiryList;
