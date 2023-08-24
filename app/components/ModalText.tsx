type prop = {
  body: string;
  heading: string;
};

const ModalText = ({ heading, body }: prop) => {
  return (
    <div className="flex flex-col space-y-3 p-3">
      {heading && (
        <p className="font-bold text-lg text-white uppercase">{heading}</p>
      )}
      {body && <p className="font-bold text-lg text-white">{body}</p>}
    </div>
  );
};

export default ModalText;
