import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { request } from "../../helper/helper";
import Loading from "../../loading/loading";
import MessagePrompts from "../../prompts/message";

export default class EmpleadosEditar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idEmpleado: this.props.getIdEmpleado(),
      rediret: false,
      message: {
        text: "",
        show: false,
      },

      loading: false,
      nombre: "",
      apellido_p: "",
      apellido_m: "",
      telefono: "",
      mail: "",
      direccion: "",
    };

    this.onExitedMessage = this.onExitedMessage.bind(this);

  }

  componentDidMount(){
    this.getEmpleado();
  }

  getEmpleado(){
    this.setState({loading:true});
    request.get(`/empleados/${this.state.idEmpleado}`)
    .then((response)=> {
      this.setState({
        empleado:response.data,
        loading:false,
      });
    })
  }

  setValue(inicioe, value) {
    this.setState({
      empleado: {
        ...this.state.empleado,
        [inicioe]: value,
      },
    });
  }

  guardarEmpleados() {
    this.setState({ loading: true });
    request
      .put(`/empleados/${this.state.idEmpleado}`, this.state.empleado)
      .then((response) => {
        if (response.data.exito) {
          this.props.changeTab('buscar');
          this.setState({
            rediret: response.data.exito,
            message: {
              text: response.data.msg,
              show: true,
            },
          });
        }
        this.setState({ loading: false });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: true });
      });
  }

  onExitedMessage () {
    if (this.state.rediret) this.props.changeTab( 'buscar' );
  }


  render() {
    return (
      <Container id="empleados-editar-container">
        <MessagePrompts
          text={this.state.message.text}
          show={this.state.message.show}
          duration={2500}
          onExited={this.onExitedMessage}
        />

        <Loading show={this.state.loading} />

        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                value={this.state.empleado.nombre}
                onChange={(e) => this.setValue("nombre", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Primer Apellido</Form.Label>
              <Form.Control
                value={this.state.empleado.apellido_p}
                onChange={(e) => this.setValue("apellido_p", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Segundo Apellido</Form.Label>
              <Form.Control
                value={this.state.empleado.apellido_m}
                onChange={(e) => this.setValue("apellido_m", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Telefono</Form.Label>
              <Form.Control
                value={this.state.empleado.telefono}
                onChange={(e) => this.setValue("telefono", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={this.state.empleado.mail}
                onChange={(e) => this.setValue("mail", e.target.value)}
                type="email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Direccion</Form.Label>
              <Form.Control
                value={this.state.empleado.direccion}
                onChange={(e) => this.setValue("direccion", e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              onClick={() => console.log(this.guardarEmpleados())}
            >
              Empleado actualizado
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
