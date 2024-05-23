import React from 'react';

const Cajas = ({ boxes }) => {
    return (
        <div style={styles.boxContainer}>
            {boxes && boxes.map((boxColor, index) => (
                <div key={index} style={{ ...styles.box, backgroundColor: boxColor }}>
                    {boxColor}
                </div>
            ))}
        </div>
    );
};

const styles = {
    boxContainer: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    box: {
        width: '100px',
        height: '100px',
        margin: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: '14px',
        fontWeight: 'bold',
    },
};

export default Cajas;
