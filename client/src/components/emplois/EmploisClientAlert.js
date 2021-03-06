import React, { useState } from "react";
// reactstrap components
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




const EventClick = (props) => {
  const [montant, setMontant] = useState(0)
  const [approuve, setApprouve] = useState(false)
  const [info, setInfo] = useState()
  function ModifierMontant() {
    fetch(`http://localhost:3001/employe/modifierPayement/${props.id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      },
      body: JSON.stringify({
        montant: montant,
        start: props.start,
        title: props.title
      })
    }).then(res => res.json())
      .then(data => {
        setInfo(data)
        props.setModal(false)
       
        props.setDataUtilisateur(data)
        props.setDataEmplois(data.timetable)
        setMontant("")
      }).catch(err => {
        console.log(err)
      })
  }
  function ModifierExamen() {
    fetch(`http://localhost:3001/employe/modifierExamen/${props.id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      },
      body: JSON.stringify({
        approuve: approuve,
        start: props.start,
        title: props.title
      })
    }).then(res => res.json())
      .then(data => {
        setInfo(data)
        props.setModal(false)
       
        props.setDataUtilisateur(data)
        props.setDataEmplois(data.timetable)
        setMontant("")
      }).catch(err => {
        console.log(err)
      })
  }


  return (
    <Modal
      className="modal-dialog-centered"
      size="sm"
      isOpen={props.isOpen}

      toggle={() => { props.setModal(!props.isOpen) }}
    >
      <div className="modal-body p-0 row align-self-center">
        <Card className="shadow border-0">
          <CardHeader className="bg-transparent pb-1">
            <h3 style={{ marginLeft: "150px", color: "#718a8a" }}>Les d??tails d'une S??ance</h3>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">

            <Form role="form">

              <h5 style={{ marginLeft: "190px", fontFamily: 'Airbnb Cereal App Extra Bold' }}><span>Title : </span>{props.title}</h5>
              <br />
              <hr style={{ width: "40%", margin: "auto" }} />
              <br />
              <h5 style={{ marginLeft: "120px", fontFamily: 'Airbnb Cereal App Extra Bold' }}><span>D??but: </span>{props.startStr}</h5>
              <br />
              <hr style={{ width: "40%", margin: "auto" }} />
              <br />
              <h5 style={{ marginLeft: "130px", fontFamily: 'Airbnb Cereal App Extra Bold' }}><span>Fin: </span>{props.endStr}</h5>
              <br />
              <hr style={{ width: "40%", margin: "auto" }} />
              <br />
              {(props.color === "red") ?
                <div>
                  <FormGroup>
                    <Label style={{ marginLeft: "210px", fontFamily: 'Airbnb Cereal App Extra Bold', fontSize: "20px" }}>Montant Pay??e</Label>
                    <Input
                      type="text"
                      placeholder="MontantPay??e*"
                      value={montant}
                      onChange={(e) => setMontant(e.target.value)} />

                  </FormGroup>
                  <div className="text-center">
                    <Button
                      className="my-4"
                      color="primary"
                      type="button"
                      style={{ backgroundColor: "#369579" }}
                      onClick={ModifierMontant}
                    >
                      Pay??e
                    </Button>
                  </div>
                </div> : ""}
                {(props.color === "orange") ?
                <div>
                  <FormGroup>
                    <Label style={{ marginLeft: "210px", fontFamily: 'Airbnb Cereal App Extra Bold', fontSize: "20px" }}>R??sultat:</Label>
                    <Input
                      type="select"
                      onChange={(e) => setApprouve(e.target.value)} >
                      <option value=""></option>
                      <option value={"oui"}>Valid??</option>
                      <option value={"non"}>Non Valid??</option>

                      </Input>

                  </FormGroup>
                  <div className="text-center">
                    <Button
                      className="my-4"
                      color="primary"
                      type="button"
                      style={{ backgroundColor: "#369579" }}
                      onClick={ModifierExamen}
                    >
                     Envoy??e
                    </Button>
                  </div>
                </div> : ""}
            </Form>
          </CardBody>
        </Card>
      </div>

    </Modal>)

}

export default EventClick;