import React from 'react'

const AboutPage = () => {
  return (
    <div className='container pb-5'>
        <div className='about-page-wrapper'>
            <div className='p-4 pb-5 mt-5' style={{border:"1px solid black"}}>
                <div className="row" style={{fontFamily:"cursive"}}>
                    <div className="text-center"><h3><span style={{color:"var(--yellow-title)",fontSize:"32px",fontWeight:"700"}}> Security By Design</span> </h3></div>
                    <h5 className=' text-start mt-4' style={{color:"#70d8a1"}}> <span style={{fontSize:"25px",color:"var(--yellow-title)"}} >Description de l application  </span>
                        <br/><br/><br/>l' application de location de films en DVD Inclue les fonctionnalités suivantes : 
                        <ol className='ms-5' style={{color:"#70d8a1"}}>
                            <li className='mt-4 '>Enregistrement de compte utilisateur : Créer un compte avec un nom d'utilisateur et un mot de passe.</li>
                            <li className='mt-4'>Connexion utilisateur : Se connecter avec les identifiants créés.</li>
                            <li className='mt-4'>Sélection de films : Afficher une liste de films disponibles avec les quantités disponibles</li>
                            <li className='mt-4'>Panier : Ajouter des films au panier et gérer les quantités.</li>
                            <li className='mt-4'>Finalisation de la commande : Valider la commande et mettre à jour les stocks.</li>
                        </ol>
                    </h5>
                    <div className="text-info text-start mt-5"><h5><span style={{color:"var(--yellow-title)",fontSize:"25px"}}>App Developed By : </span> ADAM, MOHAMED, KENZA, ADRIEN, AHMAD, YOUNES</h5></div>
                    <div className="text-info text-start mt-5"><h5><span style={{color:"var(--yellow-title)",fontSize:"25px"}}>Technologies Used : </span> NodeJs, ExpressJs, MySql, React, HTML5, Css, Bootstrap5, Sequelize, Jwt</h5></div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default AboutPage