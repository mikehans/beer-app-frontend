import React from "react";
import dotenv from "dotenv";
import BeerDisplay from "../components/BeerDisplay";

function Beer(props) {
  const { data } = props;
  console.log("data :>> ", data);

  return <>{props.status == 200 ? <BeerDisplay data={data} /> : "Not found"}</>;
}

export default Beer;

export async function getServerSideProps(context) {
  dotenv.config();

  const { query } = context;

  const uri = `${process.env.API_URL}/drinks/${query.id}`;

  const response = await fetch(uri);

  let data;
  if (response.status !== 200) {
    data = {};
  } else {
    data = await response.json();
  }

  return {
    props: {
      data: data,
      status: response.status,
      statusText: response.statusText,
    },
  };
}
