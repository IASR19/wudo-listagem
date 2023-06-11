import { CSSProperties } from "react";
import { SxProps } from "@mui/system";

export const styles: Record<string, SxProps | CSSProperties> = {
  containerCreateList: {
    marginTop: "2rem",
  },
  serviceList: {
    textAlign: "right",
  },
  createListCard: {
    background: "#F5F5F5",
    padding: "1rem",
    marginBottom: "1rem",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    transition: "transform 0.3s", // Adicionado transição para o efeito
    "&:hover": {
      transform: "scale(1.05)", // Aumenta em 5% quando o mouse passar por cima
    },
  },
  title: {
    textAlign: "center",
    marginBottom: "1rem",
  },
  imageContainer: {
    marginRight: "10px",
  },
  image: {
    width: "100px",
    height: "auto",
    borderRadius: "8px",
  },
  serviceInfo: {
    marginLeft: "10px",
  },
  starIcon: {
    width: "16px",
    height: "16px",
    marginRight: "2px",
    marginBottom: "2px",
    color: "#2196f3",
  },
  ratingText: {
    color: "#2196f3",
  },
};
