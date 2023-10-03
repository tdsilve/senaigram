import CameraEnhanceIcon from "@mui/icons-material/CameraEnhance";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { IconButtonItem } from "./IconButtonItem";

export const MainMenu = () => {
  return (
    <div
      className="flex justify-center lg:flex-col p-2"
      style={{ boxShadow: "0px 0px 7px .5px #bbb" }}
    >
      <IconButtonItem defaultIcon={<CameraEnhanceIcon fontSize="large" />} />
      <IconButtonItem
        defaultIcon={<HomeOutlinedIcon fontSize="large" />}
        activeIcon={<HomeIcon fontSize="large" />}
      />
      <IconButtonItem
        defaultIcon={<SearchOutlinedIcon fontSize="large" />}
        activeIcon={<SearchIcon fontSize="large" />}
      />
      <IconButtonItem
        defaultIcon={<ChatOutlinedIcon fontSize="large" />}
        activeIcon={<ChatIcon fontSize="large" />}
      />
      <IconButtonItem
        defaultIcon={<NotificationsNoneOutlinedIcon fontSize="large" />}
        activeIcon={<NotificationsIcon fontSize="large" />}
      />
      <IconButtonItem
        defaultIcon={<PostAddOutlinedIcon fontSize="large" />}
        activeIcon={<PostAddIcon fontSize="large" />}
      />
    </div>
  );
};
