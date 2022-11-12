import { createClient } from "@supabase/supabase-js";
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

const PROJECT_URL = "https://qqngenbikakyygoykkco.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxbmdlbmJpa2FreXlnb3lra2NvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyNjI5NTMsImV4cCI6MTk4MzgzODk1M30.66fSMTWvDiHYoLtEBY28HpI1oXEUV6uHGQQVFpl04Uk";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

function getThumbnail(url) {
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}

export default function RegisterVideo() {
    const formCadastro = useForm({ 
        initialValues: {titulo: "GOD OF WAR", url: "https://www.youtube.com/watch?v=6fNUO23I_BA"} 
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

                    // Contrato entre nosso Front e Back-end
                    supabase.from("video").insert({
                        title: formCadastro.values.titulo,
                        url: formCadastro.values.url,
                        thumb: getThumbnail(formCadastro.values.url),
                        playlist: "jogos",
                    })
                    .then((oqueveio) => {
                        console.log(oqueveio);
                    })
                    .catch((erro) =>{
                        console.log(erro);
                    })

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