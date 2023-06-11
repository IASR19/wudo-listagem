import React, { useState } from "react";
import { Box, Typography, TextField, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import { styles } from "./style";

interface Service {
  name: string;
  rating: number;
  imageUrl: string;
  type: string; // Novo campo para o tipo de serviço
}

const ServiceData: Service[] = [
  {
    name: "Mecânica 1",
    rating: 4.5,
    imageUrl: "https://img.freepik.com/fotos-gratis/vista-frontal-do-trabalhador-com-capacete-carregando-corda_23-2148773448.jpg?w=1380&t=st=1686513349~exp=1686513949~hmac=486e8c83083f3eb6e7433aca603e1840f9250e24e8b43400ee3e3961f66de948",
    type: "Mecânico",
  },
  {
    name: "Eletrecista 1",
    rating: 3.8,
    imageUrl: "https://img.freepik.com/fotos-gratis/um-eletricista-trabalha-em-uma-mesa-telefonica-com-um-cabo-eletrico-de-conexao_169016-16058.jpg?w=1380&t=st=1686513388~exp=1686513988~hmac=2da6de0d04609f34c7cf72910ca8e8ed1c15946ab18846222a52d49d8c93036d",
    type: "Eletrecista",
  },
  {
    name: "Manicure 1",
    rating: 4.2,
    imageUrl: "https://img.freepik.com/fotos-gratis/cuidados-com-a-pele-de-uma-bela-mulher-pes-com-flor-de-camomila_186202-728.jpg?w=1380&t=st=1686513405~exp=1686514005~hmac=9900f45b956ae2b7823ffc0da0c033c0fb0df35af64a1855f4a79ca6e2430c23",
    type: "Manicure",
  },
  {
    name: "Mecânica 2",
    rating: 5.0,
    imageUrl: "https://cdn.pixabay.com/photo/2017/12/11/20/03/spanner-3013129_1280.jpg",
    type: "Mecânico",
  },
  {
    name: "Eletrecista 2",
    rating: 4.7,
    imageUrl: "https://cdn.pixabay.com/photo/2015/12/24/12/59/mechanic-1106773_1280.jpg",
    type: "Eletrecista",
  },
  {
    name: "Manicure 2",
    rating: 3.2,
    imageUrl: "https://cdn.pixabay.com/photo/2017/08/05/13/13/people-2583493_1280.jpg",
    type: "Manicure",
  },
];

const serviceTypes = ["Mecânico", "Eletrecista", "Manicure"]; // Opções de tipos de serviço

function CreateList() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [searchValue, setSearchValue] = useState("");
  const [selectedType, setSelectedType] = useState(""); // Estado para armazenar o valor selecionado do tipo de serviço

  function handleItemClick(service: Service) {
    setSelectedService(service);
  }

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  function handleTypeChange(event: SelectChangeEvent<string>) {
    setSelectedType(event.target.value);
  }

  const filteredServices = ServiceData.filter((service) => {
    const matchesSearch = service.name.toLowerCase().includes(searchValue.toLowerCase());
    const matchesType = selectedType === "" || selectedType === service.type;
    return matchesSearch && matchesType;
  });

  return (
    <Box sx={styles.containerCreateList}>
      <Typography variant="h5" sx={styles.title}>
        Lista de Serviços
      </Typography>
      <Box sx={styles.filterContainer}>
        <TextField
          label="Buscar serviço"
          value={searchValue}
          onChange={handleSearchChange}
          sx={{ ...styles.searchInput, width: "100%" }}
        />
        <Select
          value={selectedType}
          onChange={handleTypeChange}
          displayEmpty
          sx={styles.typeSelect}
        >
          <MenuItem value="">Todos os tipos</MenuItem>
          {serviceTypes.map((type, index) => (
            <MenuItem key={index} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </Box>
      {filteredServices.map((service, index) => (
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
              <Box
                component="img"
                src={service.imageUrl}
                alt={`Imagem ${service.name}`}
                sx={styles.image}
              />
            </Box>
            <Box sx={styles.serviceInfo}>
              <Typography variant="body1" fontWeight="bold">
                {service.name}
              </Typography>
              <Typography variant="body2" sx={styles.serviceType}>
                {service.type}
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
