
type UseModalContextReturnType = {
  modal: React.JSX.Element | null;
  setModal: React.Dispatch<React.SetStateAction<React.JSX.Element | null>>;
};

function useModalContext(): UseModalContextReturnType {
  return { modal, setModal };

export default useModalContext;
