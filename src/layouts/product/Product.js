import React from "react";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
// Material Dashboard 2 React components
import MDTypography from "components/MDTypography";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// import { Button } from "@mui/material";

import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import ProductModel from "./ProductModel";

function Product() {
  return (
    <div>
      <DashboardLayout>
        <DashboardNavbar />
        <MDBox pt={6} pb={3}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Card>
                <MDBox
                  mx={2}
                  mt={-3}
                  py={3}
                  px={2}
                  variant="gradient"
                  bgColor="info"
                  borderRadius="lg"
                  coloredShadow="info"
                >
                  <MDTypography variant="h6" color="white">
                    Add Product{" "}
                  </MDTypography>
                </MDBox>
                <div style={{ display: "flex", justifyContent: "center", margin: "10%" }}>
                  <ProductModel />
                </div>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
      </DashboardLayout>
    </div>
  );
}

export default Product;
