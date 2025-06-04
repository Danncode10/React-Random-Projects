function Button(){

    const styles = {
        backgroundColor: "green",
        color: "white",
        padding: "10px 24px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "16px",
        margin: "20px"
    };

    return (
        <>
        <button style={styles}>
            Click Me
        </button>
        </>
        
    );

}

export default Button;