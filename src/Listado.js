
import React,{Component}  from "react";
import { Container, Segment, Table, TableBody, Popup, Button } from "semantic-ui-react";


export class Listado extends Component{
    render(){
        return(
            <Segment>

                <Container textAlign="center">
                    <div className="Listado">
                        <h1>Listado de alumnos y Profesor</h1>
                    </div>
                    <div>
                        <Table fixed>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Nombre</Table.HeaderCell>
                                    <Table.HeaderCell>Año de carrera</Table.HeaderCell>
                                    <Table.HeaderCell>Correo</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Alejandro Iglesias</Table.Cell>
                                <Table.Cell>Profesor</Table.Cell>
                                <Table.Cell>
                                    Alejandro.Iglesias@uv.cl
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Cristian Valencia</Table.Cell>
                                <Table.Cell>Alumno</Table.Cell>
                                <Table.Cell>
                                    Cristian.valenciaa@alumnos.uv.cl
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Rodrigo Montenegro</Table.Cell>
                                <Table.Cell>Alumno</Table.Cell>
                                <Table.Cell>
                                    Rodrigo.montenegro@alumnos.uv.cl
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Nicolas Delgado</Table.Cell>
                                <Table.Cell>Alumno</Table.Cell>
                                <Table.Cell>
                                    Nicolas.delgado@alumnos.uv.cl
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Sebastian Gonzalez</Table.Cell>
                                <Table.Cell>Alumno</Table.Cell>
                                <Table.Cell>
                                    Sebastian.gonzalez@alumnos.uv.cl
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                        </Table>
                    </div>
                </Container> 
                <Container textAlign="center">
                    <Popup content='Agregar a participante a la lista' trigger={<Button icon='add' />} />
                </Container>   
            </Segment> 
        )

    };
}