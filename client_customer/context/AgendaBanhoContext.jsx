// Futuro useContext()
import { createContext, useState } from "react";

const intialFormValue = {
	id_pet: 0,
	dia: '11/11/1111',
	horario: '0:00',
	servicos: [1, 2]
}

export const AgendaBanhoContext = createContext(null);


function Context(props) {

    const [form, setForm] = useState(intialFormValue)

    return (
        <AgendaBanhoContext.Provider value={{
            form: form,
            setPetID: (id) => setForm({...form, id_pet: id}),
            setDate: (dateStr) => setForm({...form, dia: dateStr}),
        }}>
            {props.children}
        </AgendaBanhoContext.Provider>
    )
}

export {Context}