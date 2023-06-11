import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import { styles } from "./style";

interface Service {
  name: string;
  rating: number;
  imageUrl: string;
}

const ServiceData: Service[] = [
  {
    name: "Service A",
    rating: 4.5,
    imageUrl: "https://img.freepik.com/fotos-gratis/vista-frontal-do-trabalhador-com-capacete-carregando-corda_23-2148773448.jpg?w=1380&t=st=1686513349~exp=1686513949~hmac=486e8c83083f3eb6e7433aca603e1840f9250e24e8b43400ee3e3961f66de948",
  },
  {
    name: "Service B",
    rating: 3.8,
    imageUrl: "https://img.freepik.com/fotos-gratis/um-eletricista-trabalha-em-uma-mesa-telefonica-com-um-cabo-eletrico-de-conexao_169016-16058.jpg?w=1380&t=st=1686513388~exp=1686513988~hmac=2da6de0d04609f34c7cf72910ca8e8ed1c15946ab18846222a52d49d8c93036d",
  },
  {
    name: "Service C",
    rating: 4.2,
    imageUrl: "https://img.freepik.com/fotos-gratis/cuidados-com-a-pele-de-uma-bela-mulher-pes-com-flor-de-camomila_186202-728.jpg?w=1380&t=st=1686513405~exp=1686514005~hmac=9900f45b956ae2b7823ffc0da0c033c0fb0df35af64a1855f4a79ca6e2430c23",
  },
];

function CreateList() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  function handleItemClick(service: Service) {
    setSelectedService(service);
  }

  return (
    <Box sx={styles.containerCreateList}>
      <Typography variant="h5" sx={styles.title}>
        Lista de Serviços
      </Typography>
      {ServiceData.map((service, index) => (
        <div
          key={index}
          onClick={() => handleItemClick(service)}
          style={{ cursor: "pointer" }}
        >
          <Box
            sx={{
              ...styles.createListCard,
              transform: selectedService === service ? "scale(1.05)" : "scale(1)",
            }}
          >
            <Box sx={styles.imageContainer}>
              <Box component="img" src={service.imageUrl} alt={`Imagem ${service.name}`} sx={styles.image} />
            </Box>
            <Box sx={styles.serviceInfo}>
              <Typography variant="body1" fontWeight="bold">
                {service.name}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <StarIcon sx={styles.starIcon} />
                <Typography variant="body1" sx={styles.ratingText}>
                  {service.rating}
                </Typography>
              </Box>
            </Box>
          </Box>
        </div>
      ))}
    </Box>
  );
}

export default CreateList;
