import { useState } from 'react'
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Modal,
    Label
} from "reactstrap";

import axios from 'axios'

export default function ModalClientAjouter(props) {
    const [title, setTitle] = useState("")

    const [color, setColor] = useState("#369579")

   

    const onClickAjouterSeance = async () => {
        if (color !== "" && title !== "" !== "") {
            const seance = {
                "start": props.selectInfoData.startStr,
                "end": props.selectInfoData.endStr,
                "title": title,
                "eventContent": props.dataUtilisateur.name,
                "color": color,
                "client":props.dataUtilisateur._id,
                "nomClient":props.dataUtilisateur.name
            }
          
            props.setModal(false)
            axios.put(`http://localhost:3001/employe/emplois`, seance, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("jwt")
                }
            })
            props.setData(prevData => ([...prevData, seance]))
            setTitle('')
            setColor('#369579')
        
        }
        setTitle('')
        setColor('#369579')
    }

  
    return (
        <Modal
            className="modal-dialog-centered"
            size="sm"
            isOpen={props.isOpen}

            toggle={() => { props.setModal(!props.isOpen) }}
        >
            <div className="modal-body p-0 row align-self-center">
                <Card className=" shadow border-0 ">
                    <CardHeader className="bg-transparent pb-1 row align-self-center">
                        <h3>Ajouter une séance</h3>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-10">

                        <Form role="form">

                            {/* <FormGroup>
                                <Label>Titre</Label>

                                <Input
                                    onChange={(e) => { setTitle(e.target.value) }}
                                />
                            </FormGroup> */}
                            <FormGroup>
                                <Label>Titre</Label>

                                <Input type="select"
                                    onChange={(e) => { setTitle(e.target.value) }}
                                >
                                    <option default value=""></option>
                                    <option value="Séance code">Séance code</option>
                                    <option value="Séance conduite">Séance conduite</option>
                                    <option value="Examen code">Examen code</option>
                                    <option value="Examen Conduite">Examen Conduite</option>


                                </Input>


                            </FormGroup>

                            <FormGroup>
                                <Label>Couleur</Label>
                                <Input
                                
                                    type="color"
                                    value={color}
                                    onChange={(e) => { setColor(e.target.value) }}
                                />

                            </FormGroup>

                            <div className="text-center">
                                <Button
                                    className="my-4"
                                    color="primary"
                                    type="button"
                                    onClick={(e) => onClickAjouterSeance()}
                                >
                                    Ajouter
                                </Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </div>

        </Modal>
    )
}
