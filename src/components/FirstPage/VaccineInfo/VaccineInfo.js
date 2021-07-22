import React from 'react';

function VaccineInfo(props) {
    return (
        <React.Fragment>
            <table>
                <tr>
                    <th>Dose 1</th>
                    <th>Complete</th>
                    <th>Dose 2</th>
                    <th>Complete</th>
                </tr>
                <tr>
                    <td>Date of Vaccine:</td>
                    <td>March 4,2021</td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </React.Fragment>
    );
}

export default VaccineInfo;