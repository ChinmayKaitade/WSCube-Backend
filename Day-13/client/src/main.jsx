import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";
import Enquiry from "./components/EnquiryForm.jsx";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Enquiry />
    <ToastContainer />
  </StrictMode>
);
