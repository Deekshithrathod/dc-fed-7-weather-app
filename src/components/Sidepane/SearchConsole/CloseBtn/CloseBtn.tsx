import "./CloseBtn.css";

import CloseIcon from "@mui/icons-material/Close";

const CloseBtn = ({ setShowSearch }: { setShowSearch: Function }) => {
  return (
    <div className="close-btn-container" onClick={() => setShowSearch(false)}>
      <CloseIcon />
    </div>
  );
};

export default CloseBtn;
