
function Hello(props) {
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

