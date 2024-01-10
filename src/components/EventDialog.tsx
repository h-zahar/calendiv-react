const EventDialog = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };
  if (!isOpen) return <></>;
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div style={{ position: "relative", top: "30%", left: "30%" }}>
        <div
          style={{ background: "white", width: "460px", borderRadius: "5px" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "20px",
            }}
          >
            <div>Add Event</div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              X
            </button>
          </div>
          <div style={{ padding: 20 }}>
            <form onSubmit={onSubmit}>
              <label style={{ marginRight: "10px" }}>Event Name</label>
              <input style={{ padding: "6px 9px" }} placeholder="Ex. Holiday" />
              <br />
              <br />
              <label style={{ marginRight: "10px" }}>From</label>
              <input style={{ padding: "5px 8px" }} type="date" />

              <label style={{ marginLeft: "8px", marginRight: "10px" }}>
                To
              </label>
              <input style={{ padding: "5px 8px" }} type="date" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "40px",
                }}
              >
                <button
                  type="submit"
                  style={{
                    background: "green",
                    padding: "8px 12px",
                    color: "white",
                    border: "none",
                    borderRadius: "20px",
                    cursor: "pointer",
                  }}
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDialog;
