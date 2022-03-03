import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import BeerList from "../components/BeerList";
import dotenv from "dotenv";

const Home: NextPage = (props) => {
  // console.log('props.data :>> ', props.data);
  return (
    <>
      <h1>Hello Beer App</h1>
      <BeerList data={props.data} />
    </>
  );
};

export default Home;

export async function getServerSideProps(context) {
  dotenv.config();

  const drinksUri = `${process.env.API_URL}/drinks/list`;

  const response = await fetch(drinksUri);

  return {
    props: {
      data: await response.json(),
    },
  };
}
