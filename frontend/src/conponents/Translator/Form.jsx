import useState from "react";

const Form = () => {
    const [content, setContent] = useState("");

    const handleNewContent = (event) => {
        setContent(event.target.value);
    };

    const resetInput = () => {
        setContent("");
    }

    return (

    );
}

export default Form;
