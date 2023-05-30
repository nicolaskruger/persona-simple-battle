import type { NextPage } from "next";

import styles from "../styles/Home.module.css";
import { ShowAllPartyMembers } from "../components/atom/showAllPartyMembers";

const IndexPage: NextPage = () => {
  return <ShowAllPartyMembers />;
};

export default IndexPage;
