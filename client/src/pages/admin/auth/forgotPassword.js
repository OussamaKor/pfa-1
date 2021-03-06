import { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import ReactLoading from 'react-loading';
import { useHistory } from 'react-router-dom'
import image1 from '../../../assets/images/admin.gif'
export default function ForgotPassword() {

    const History = useHistory()
    const [email, setEmail] = useState("")
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const PostData = () => {
        setLoading(true)
        fetch("http://localhost:3001/auth/admin/mdpOublier", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    setLoading(false)
                    setError(true)
                    setTimeout(() => setError(false), 2500)
                }
                else {
                    setLoading(false)
                    setSuccess(true)
                    setTimeout(() => setSuccess(false), 2500)
                    setInterval(function () { History.push('/admin') }, 2000);
                }
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        <section className="ftco-section"  style={{
            backgroundImage: 'url('+image1+')',
            backgroundSize: "cover",
            height: "100vh",
            color: "#f5f5f5" ,
            backgroundAttachment:"fixed" ,
            backgroundPosition: "center" ,
         
          }}> 
            <Alert show={error} variant={'danger'} style={{ width: "450px", margin: "auto auto" }}>
                {"Aucun utilisateur avec ce mail"}
            </Alert>
            <Alert show={success} variant={'success'} style={{ width: "450px", margin: "auto auto" }}>
                {"visiter votre mail"}
            </Alert>
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="login-wrap p-4 p-md-5">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="fa fa-user-o"></span>
                            </div>
                            

                            <div className="form-group1" style={{marginTop:'30px'}}>
                                <input type="text" className="FormAdmin form-control rounded-left" placeholder="Email*" onChange={(e) => { setEmail(e.target.value) }} />
                            </div>

                            <div className="form-group1">
                                <button type="submit" onClick={PostData} className="btn5  rounded submit p-3 px-5" disabled={loading}>{loading ? <ReactLoading height={'20px'} width={'24px'} className="loading1" type="spin" /> : "Envoyer"}</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
