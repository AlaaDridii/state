import React, { Component } from 'react'

export default class Texte extends Component {
    constructor(){
        super()
        this.state={
            desc:'Diamond a choisi cet avion pour montrer une fiabilité hors du commun. En effet, le DA40 est un avion ou règne la sécurité avant tout ! Il y a toute une gamme de dispositifs qui permet à vos passagers de profiter pleinement de la vue sans avoir aucune contrainte.'
        }
    }

  render() {
    return (
      <div>
       {this.state.desc}  
     </div>
    )
  }
}
