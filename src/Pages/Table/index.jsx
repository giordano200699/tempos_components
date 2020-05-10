import React from 'react';

// import './table.css'
import { TableStyled } from './Table.style'

class Table extends React.Component{
    state = {
        cabeza: [],
        cuerpo: [],
        pie: []
    }
    handleClick = e => {
        console.log({
            valor: e.target
        });
        this.setState({
            cabeza: ['Id', 'Nombre', 'Apellido', 'Edad', 'Sexo'],
            cuerpo: [
                ['1', 'Betty', 'Reyes', '27', 'F'],
                ['2', 'Marcos', 'Torres', '22', 'M'],
                ['3', 'Jessica', 'Fuentes', '23', 'F']
            ],
            pie: ['Promedio', '-', '-', '24', '-']
        })
    };
    render(){
        const cabezaHtml = <tr>{this.state.cabeza.map((cabeza, index) =>
            <th key={index}>{cabeza}</th>
        )}</tr>
        const cuerpoHtml = this.state.cuerpo.map((cuerpo, index)=>{
            const contenido = cuerpo.map((valor, index)=>
                <td key={index}>{valor}</td>
            )
            return (<tr key={index}>{contenido}</tr>)
        })
        const pieHtml = <tr>{this.state.pie.map((pie, index)=>
            <th key={index}>{pie}</th>
        )}</tr>
        return(
            <TableStyled>
                <button onClick={this.handleClick}>
                    Llenar datos
                </button>
                <table>
                    <caption>{this.props.titulo}</caption>
                    <colgroup></colgroup>
                    <colgroup span="2"></colgroup>
                    <colgroup span="2"></colgroup>
                    <thead>
                        {cabezaHtml}
                    </thead>
                    <tbody>
                        {cuerpoHtml}
                    </tbody>
                    <tfoot>
                        {pieHtml}
                    </tfoot>
                </table>
            </TableStyled>
        )
    }
}

export default Table;
