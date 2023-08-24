import { Nova_Round, Goldman, Nunito } from "next/font/google";

export const nova = Nova_Round({ weight: ["400"], subsets: ["latin"] });

export const nunito = Nunito({
  weight: ["400", "700", "800", "900"],
  subsets: ["latin"],
});

export const goldman = Goldman({
  subsets: ["latin-ext", "latin"],
  weight: ["400", "700"],
});
