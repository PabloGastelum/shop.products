type Props = {
  title: string;
  onClose: () => void;
};

const ModalHeader = ({ title, onClose }: Props) => {
  return (
    <div className="modal-header">
      <h5 className="modal-title" style={{ color: "black" }}>
        {title}
      </h5>
      <button type="button" className="btn-close" onClick={onClose}></button>
    </div>
  );
};

export default ModalHeader;
