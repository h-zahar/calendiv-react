interface Task {
  id: string;
  name: string;
  color: number[];
  from: string;
  to: string;
}

const EventDialog = ({
  isOpen,
  setIsOpen,
  //   viewDate,
  clickedDate,
  events,
  setEvents,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  viewDate: Date;
  clickedDate: string;
  events: Task[];
  setEvents: (event: Task[]) => void;
}) => {
  interface CustomElements extends HTMLFormControlsCollection {
    name: HTMLInputElement;
    from: HTMLInputElement;
    to: HTMLInputElement;
  }

  interface CustomForm extends HTMLFormElement {
    readonly elements: CustomElements;
  }

  const onSubmit = (e: React.FormEvent<CustomForm>) => {
    e.preventDefault();
    const target = e.currentTarget.elements;

    const data = {
      id: new Date().getTime().toString(),
      name: target.name.value,
      color: [Math.random() * 256, Math.random() * 256, Math.random() * 256],
      from: target.from.value,
      to: target.to.value,
    };
    if (!data.name) return;
    if (new Date(data.from) > new Date(data.to))
      return alert("Start date should be prior to end date!");

    // alert("Saved to Database!");
    setEvents([...events, data]);

    // console.log(data);

    setIsOpen(false);
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
            <span>
              <strong>Add Event</strong>
            </span>
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
            {clickedDate ? (
              <form onSubmit={onSubmit}>
                <label style={{ marginRight: "10px" }}>Event Name</label>
                <input
                  style={{ padding: "6px 9px" }}
                  id="name"
                  placeholder="Ex. Holiday"
                  required={true}
                />
                <br />
                <br />
                <label style={{ marginRight: "10px" }}>From</label>
                <input
                  style={{ padding: "5px 8px" }}
                  id="from"
                  type="date"
                  defaultValue={clickedDate}
                />

                <label style={{ marginLeft: "8px", marginRight: "10px" }}>
                  To
                </label>
                <input
                  style={{ padding: "5px 8px" }}
                  id="to"
                  type="date"
                  defaultValue={clickedDate}
                />
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
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDialog;
