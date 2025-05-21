import Image from "next/image";
import styles from "./page.module.css";
import { Box } from "@chakra-ui/react";
import Landing from "./landing/page";

export default function Home() {
  return (
    <Box>
      <Landing />

    </Box>
  );
}
