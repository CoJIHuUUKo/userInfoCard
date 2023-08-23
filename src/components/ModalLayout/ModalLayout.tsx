import "./ModalLayout.css";

export interface IPropsButton {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const ModalLayout = ({ active, setActive, children }: IPropsButton) => {
  return (
    <div
      className={
        active ? "ModalLayoutRoot ModalLayoutRoot__active" : "ModalLayoutRoot"
      }
      onClick={() => setActive(false)}
    >
      <div
        className={
          active
            ? "ModalLayoutContent ModalLayoutContent__active"
            : "ModalLayoutContent"
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalLayout;
