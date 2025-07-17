import type { PropsWithChildren } from "react";

const Modal = ({ children }: PropsWithChildren) => {
  return (
    <div
      className="modal fade show d-block"
      tabIndex={-1}
      style={{ background: "rgba(0,0,0,0.4)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content rounded-3">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
