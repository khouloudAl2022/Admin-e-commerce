import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useState, useEffect } from "react";
import MDBox from "components/MDBox";
import { Grid } from "@mui/material";
import MDTypography from "components/MDTypography";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "JS/actions/admUserActions";

import TableUser from "./TableUser";

function Userr() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const userlist = useSelector((state) => state.admUserReducer.user) || [];
  const search = () =>
    userlist.filter(
      (item) =>
        item.username.toLowerCase().includes(query.toLowerCase()) ||
        item.email.toLowerCase().includes(query.toLowerCase())
    );

  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar setQuery={setQuery} />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <MDBox
              mx={2}
              mt={-3}
              py={3}
              px={2}
              variant="gradient"
              bgColor="dark"
              borderRadius="lg"
              coloredShadow="info"
            >
              <MDTypography variant="h6" color="white">
                Users
              </MDTypography>
            </MDBox>
            <TableUser userlist={userlist} data={search()} />
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Userr;
