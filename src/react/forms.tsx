
function Hello(props) {
    console.log("initialized React");
    return (
      <div>
        <div>Hello {props.name}</div>
      </div>

    );
  }


ReactDOM.render(
    <Hello name="world." />,
    document.querySelector('#react')
);

