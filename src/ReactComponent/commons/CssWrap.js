function CssWrap(props) {
    const styleToInject = props.style;

  return (
      <>
    <style>
      {props.style}
    </style>
        {props.children}
    </>
  );
}

export default CssWrap;
