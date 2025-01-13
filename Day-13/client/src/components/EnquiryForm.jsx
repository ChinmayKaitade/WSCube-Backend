import { Button, Label, Textarea, TextInput } from "flowbite-react";
import EnquiryList from "./EnquiryList";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2/dist/sweetalert2.js";

const EnquiryForm = () => {
  const [enquiryList, setEnquiryList] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    _id: "",
  });

  // insert data logic
  const saveEnquiry = (e) => {
    e.preventDefault();

    if (formData._id) {
      // update logic
      axios
        .put(
          `http://localhost:8010/api/website/enquiry/update/${formData._id}`,
          formData
        )
        .then((res) => {
          toast.success("Enquiry Updated Successfully");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            _id: "",
          });

          getAllEnquiry();
        });
    } else {
      // insert logic
      axios
        .post(`http://localhost:8010/api/website/enquiry/insert`, formData)
        .then((res) => {
          toast.success("Enquiry Inserted Successfully!");
          console.log(res.data);

          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        });

      getAllEnquiry();
    }

    // const formData = {
    //   name: e.target.name.value,
    //   email: e.target.email.value,
    //   phone: e.target.phone.value,
    //   message: e.target.message.value,
    // };
  };

  // view data logic
  const getAllEnquiry = () => {
    axios
      .get(`http://localhost:8010/api/website/enquiry/view`)
      .then((res) => {
        return res.data;
      })
      .then((finalData) => {
        if (finalData.status) {
          setEnquiryList(finalData.enquiryList);
        }
      });
  };

  const getValue = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    let oldData = { ...formData };

    oldData[inputName] = inputValue;
    setFormData(oldData);

    console.log(inputName);
  };

  useEffect(() => {
    getAllEnquiry();
  }, []);

  return (
    <div>
      <h1 className="text-[40px] text-center py-4 font-bold">User Enquiry</h1>

      <div className="grid grid-cols-[30%_auto] gap-10">
        <div className="bg-gray-200 p-4">
          <h2 className="text-[20px] font-bold">Enquiry Form</h2>

          {/* Enquiry form */}
          <form action="" onSubmit={saveEnquiry}>
            {/* name field */}
            <div className="py-3">
              <Label htmlFor="name" value="Your Name" />
              <TextInput
                onChange={getValue}
                value={formData.name}
                name="name"
                type="text"
                placeholder="Enter Your Name"
                required
                shadow
              />
            </div>

            {/* email field */}
            <div className="py-3">
              <Label htmlFor="email" value="Your Email" />
              <TextInput
                onChange={getValue}
                value={formData.email}
                name="email"
                type="email"
                placeholder="Enter Your Email"
                required
                shadow
              />
            </div>

            {/* phone field */}
            <div className="py-3">
              <Label htmlFor="phone" value="Your Phone" />
              <TextInput
                onChange={getValue}
                value={formData.phone}
                name="phone"
                type="text"
                placeholder="Enter Your Phone"
                required
                shadow
              />
            </div>

            {/* message field */}
            <div className="py-3">
              <Label htmlFor="message" value="Your Message" />
              <Textarea
                onChange={getValue}
                value={formData.message}
                name="message"
                placeholder="Enter Your Message"
                required
                rows={4}
                resize-none
              />
            </div>

            {/* button */}
            <div className="py-3">
              <Button className="w-full" type="submit">
                {formData._id ? "Update" : "Submit"}
              </Button>
            </div>
          </form>
        </div>

        <EnquiryList
          data={enquiryList}
          getAllEnquiry={getAllEnquiry}
          Swal={Swal}
          setFormData={setFormData}
        />
      </div>
    </div>
  );
};

export default EnquiryForm;
