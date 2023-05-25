import React from "react";
import { Box, Grid, styled, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Title from "./Title";

import headerImg from "../../assets/images/landing/pexels-binyamin-mellish-186078.png";
import imgDetail from "../../assets/images/landing/AdobeStock_124943954-scaled.webp";
import imgDetail2 from "../../assets/images/landing/pexels-pixabay-271816.jpg";

const Home = () => {
  const CustomGridItem = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  });

  const CustomTypography = styled(Typography)({
    fontSize: "1.1rem",
    textAlign: "start",
    lineHeight: "1.5",
    color: "#515151",
    marginTop: "1.5rem",
  });

  const CustomBox = styled(Box)(({ theme }) => ({
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(2),
    paddingTop: theme.spacing(10),
    backgroundColor: "orange",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const BoxText = styled(Box)(({ theme }) => ({
    flex: "1",
    paddingLeft: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      flex: "2",
      textAlign: "center",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  }));

  return (
    <>
      <CustomBox component="header">
        <BoxText component="section">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              color: "#fff",
            }}
          >
            We'll provide high-quality product
          </Typography>

          <Typography
            variant="p"
            component="p"
            sx={{
              py: 3,
              lineHeight: 1.6,
              color: "#fff",
            }}
          >
            We have 9000 more review and our customers trust on our property and
            quality products.
          </Typography>

          <Box>
            <Button
              component={Link}
              to={"/orders"}
              variant="contained"
              sx={{
                mr: 2,
                px: 4,
                py: 1,
                fontSize: "0.9rem",
                textTransform: "capitalize",
                borderRadius: 0,
                borderColor: "#14192d",
                color: "#fff",
                backgroundColor: "#14192d",
                "&&:hover": {
                  backgroundColor: "#343a55",
                },
                "&&:focus": {
                  backgroundColor: "#343a55",
                },
              }}
            >
              Create Order
            </Button>
          </Box>
        </BoxText>

        <Box
          sx={(theme) => ({
            [theme.breakpoints.down("md")]: {
              flex: "1",
              paddingTop: "30px",
              alignSelf: "center",
            },
            [theme.breakpoints.up("md")]: {
              flex: "2",
              alignSelf: "flex-end",
            },
          })}
        >
          <img
            src={headerImg}
            alt="headerImg"
            style={{
              width: "100%",
              marginBottom: -15,
            }}
          />
        </Box>
      </CustomBox>
      <Grid
        container
        spacing={{ xs: 4, sm: 4, md: 0 }}
        sx={{
          py: 10,
          px: 2,
        }}
      >
        <CustomGridItem item xs={12} sm={8} md={6} component="section">
          <Box
            component="article"
            sx={{
              px: 4,
            }}
          >
            <Title
              text={
                "Customize every detail of your cabinets to fit your unique style and needs."
              }
              textAlign={"start"}
            />
            <CustomTypography>
              Elevate your home decor with our stunning and durable cabinets.
              Experience the perfect blend of style and functionality with our
              custom cabinet solutions.
            </CustomTypography>
          </Box>
        </CustomGridItem>

        <Grid item xs={12} sm={4} md={6}>
          <img
            src={imgDetail}
            alt=""
            style={{
              width: "100%",
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          md={6}
          sx={{
            order: { xs: 4, sm: 4, md: 3 },
          }}
        >
          <img
            src={imgDetail2}
            alt=""
            style={{
              width: "100%",
            }}
          />
        </Grid>

        <CustomGridItem
          item
          xs={12}
          sm={8}
          md={6}
          sx={{
            order: { xs: 3, sm: 3, md: 4 },
          }}
        >
          <Box
            component="article"
            sx={{
              px: 4,
            }}
          >
            <Title
              text={
                "Maximize your storage space with our high-quality and affordable cabinets."
              }
              textAlign={"start"}
            />
            <CustomTypography>
              Impress your guests with our elegant and modern cabinet designs.
            </CustomTypography>
          </Box>
        </CustomGridItem>
      </Grid>
    </>
  );
};

export default Home;
