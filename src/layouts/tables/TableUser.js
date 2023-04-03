import React from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import ClearIcon from "@mui/icons-material/Clear";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

import "./table.css";
import { deleteuser } from "JS/actions/admUserActions";
import { useDispatch } from "react-redux";

function TableUser({ data }) {
  const dispatch = useDispatch();
  return (
    <div style={{ marginTop: "3%" }}>
      <Table striped bordered hover variant="dark" style={{ fontSize: "15px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user._id}>
              <td style={{ fontWeight: "lighter" }}>{user.username}</td>
              <td>{user.email}</td>
              <td>22/33/2023</td>
              <td>
                <ClearIcon
                  style={{ color: "red" }}
                  onClick={() => {
                    console.log(user._id);
                    dispatch(deleteuser(user._id));
                  }}
                />
                <DriveFileRenameOutlineIcon />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
TableUser.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      data: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TableUser;
