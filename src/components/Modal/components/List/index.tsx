import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

import { HiHome } from "react-icons/hi";
import { MdLibraryAdd } from "react-icons/md";
import { AiOutlineFileSearch } from "react-icons/ai";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../Context/auth";
import { useModal } from "../../../../Context/Modal";
import { useAuthSearch } from "../../../../Context/authProductSearch";

const ListEdited = () => {
  const navigate = useNavigate();

  const { isAuth, isAuthLevel } = useAuth();

  const { leaveModalFunction } = useModal();

  const [open, setOpen] = React.useState(false);
  const { takeFilter, setFilter } = useAuthSearch()

  const openCategory = () => {
    setOpen(!open);
  };

  const teste = (e: any) => {
    console.log(e);
  };

  return (
    <List
      sx={{ width: "100%", backgroundColor: "", color: "#F5F5F5" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          sx={{
            width: "100%",
            backgroundColor: "rgba(28, 27, 35, 0.85%)",
            color: "#F5F5F5",
          }}
          component="div"
          id="nested-list-subheader"
        >
          Outras opções
        </ListSubheader>
      }
    >
      <ListItemButton
        onClick={() => {
          navigate("/home");
          leaveModalFunction();
        }}
      >
        <ListItemIcon>
          <HiHome size={30} />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>

      <ListItemButton
        onClick={() => {
          navigate("/home/sectionProduct");
          leaveModalFunction();
        }}
      >
        <ListItemIcon>
          <StarBorder />
        </ListItemIcon>
        <ListItemText primary="Produtos" />
      </ListItemButton>

      {isAuth && isAuthLevel ? (
        <ListItemButton
          onClick={() => {
            navigate("/createProduct");
            leaveModalFunction();
          }}
        >
          <ListItemIcon>
            <MdLibraryAdd size={30} />
          </ListItemIcon>
          <ListItemText primary="Criar Produto" />
        </ListItemButton>
      ) : (
        <></>
      )}

      <ListItemButton onClick={openCategory}>
        <ListItemIcon>
          <AiOutlineFileSearch size={30} />
        </ListItemIcon>
        <ListItemText primary="Categorias" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={()=>{setFilter("Tecnologia");   navigate("/home/sectionProduct")}}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Tecnologia" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }} onClick={()=>{setFilter("Limpeza");   navigate("/home/sectionProduct")}}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Limpeza" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }} onClick={()=>{setFilter("Moda");   navigate("/home/sectionProduct")}}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Moda" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }} onClick={()=>{setFilter("Moveis");   navigate("/home/sectionProduct")}}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Moveis" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }} onClick={()=>{setFilter("Ferramentas");   navigate("/home/sectionProduct")}}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Ferramentas" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }} onClick={()=>{setFilter("Eletromesticos"); navigate("/home/sectionProduct")}}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Eletromesticos" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};

export default ListEdited;
