export default class SayHello extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Loic' }
  }

  render() {
    return (
      <p> Hello { this.props.name } </p>
    )
  }
}