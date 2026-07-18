import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

import { deleteDepartment } from "../../../redux/thunks/departmentThunk";

const DepartmentActionMenu = ({ department }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    Swal.fire({
      title: "Delete Department?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#dc3545",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteDepartment(department._id))
          .unwrap()
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Deleted",
              text: "Department deleted successfully.",
              timer: 1500,
              showConfirmButton: false,
            });
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: error || "Unable to delete department.",
            });
          });
      }
    });
  };

  return (
    <div className="btn-group btn-group-sm">
      <Link
        to={`/departments/edit/${department._id}`}
        className="btn btn-primary"
      >
        <i className="fa fa-edit"></i>
      </Link>

      <button className="btn btn-danger" onClick={handleDelete}>
        <i className="fa fa-trash"></i>
      </button>
    </div>
  );
};

export default DepartmentActionMenu;
