import React from "react";
import { StyledRegisterVideo } from "./styles";

// Whiteboarding
// Custom Hook
function useForm(propsDoform) {
    const [values, setValues] = React.useState(propsDoform.initialValues);

    return {
        values,
        handleChange: (evento) => {
            const value = evento.target.value;
            const name = evento.target.name;
            setValues({
                ...value,
                [name]: value,
            });
        },
        clearForm(){
            setValues({});
        }
    };
}

export default function RegisterVideo() {
    const formCadastro = useForm({ 
        initialValues: {titulo: "GOD OF WAR", url: "https://youtube.com"} 
    });
    const [formVisivel, setFormVisivel] = React.useState(false);
    

    /*
    ## O que precisamos para o form funcionar?
    - pegar os dados, que precisam vir do state
        - titulo
        - url do vídeo 
    - precisamos ter um onSubmit do nosso form
    - Limpar o formulário após o Submit
    */

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {/* Ternário */}
            {/* Operadores de Curto-circuito */}
            {formVisivel ? (
                <form onSubmit={(evento) =>{
                    evento.preventDefault();
                    setFormVisivel(false);
                    formCadastro.clearForm();
                }}>
                    <div>
                        <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                            X
                        </button>
                        <input
                            placeholder="Titulo do video"
                            name="titulo"
                            value={formCadastro.values.titulo}
                            onChange={formCadastro.handleChange}
                        />
                        <input
                            placeholder="URL"
                            name="url"
                            value={formCadastro.values.url}
                            onChange={formCadastro.handleChange}
                        />

                        <button type="submit">
                            Cadastrar
                        </button>
                    </div>
                </form>
            )
                : false}
        </StyledRegisterVideo>
    )

    // [x] falta o botão para adicionar
    // [x] modal
    // [x] precisamos controlar o state
    // formulario em si


}