import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import completedStyle from "assets/jss/material-kit-react/views/componentsSections/completedStyle.jsx";

class SectionCompletedExamples extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2>¿Que es la matematica?</h2>
              <h4>
                La Matemática es un lenguaje, pero no sólo eso. Tambien es herramienta y método,
                aunque eso tampoco es todo. Nace en el interior de una mente en particular pero es universal.
                Su estructura tiene una belleza y una coherencia sublimes, pero no es arte ni es ciencia.
                  La Matemática calcula, resuelve, cuenta, ordena, clasifica, organiza, comprende, describe, conjetura,
                demuestra, deduce, induce, abstrae, concreta, generaliza, analiza, sintetiza, pregunta, responde,
                anticipa, registra, simula, proyecta, transforma, ilustra, juega, deleita... Todo eso hace la Matemática,
                Sí, pero ¿Que es la Matemática?
              </h4>
              <h4>
                En esta pagina vamos a repasar un poco la historia de las Matemáticas y el algebra, donde exploraremos
                en detalle la forma de ver las Matemáticas y como ha evolucionado en lo que hoy conocemos como "Matemáticas".
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(completedStyle)(SectionCompletedExamples);
