// Futuro useContext()
import { createContext, useState } from "react";

const intialFormValue = {
	id_pet: 0,
	dia: '11/11/1111',
	horario: '0:00',
    decoracoes: new Set(),
	servicos: new Set()
}

export const AgendaBanhoContext = createContext(null);


function Context(props) {

    const [form, setForm] = useState(intialFormValue)

    return (
        <AgendaBanhoContext.Provider value={{
            form: form,
            setPetID: (id) => setForm({...form, id_pet: id}),
            setDate: (dateStr) => setForm({...form, dia: dateStr}),
            setTime: (timeStr) => setForm({...form, horario: timeStr}),
            // Decoration Methods
            setDecoration: (decorationSet) => setForm({...form, decoracoes: decorationSet}),
            addDecoration: (id) => {
                let newDocoration = new Set(form.decoracoes);
                newDocoration.add(id);
                setForm({...form, decoracoes: newDocoration});
            },
            deleteDecoration: (id) => {
                let newDocoration = new Set(form.decoracoes);
                newDocoration.delete(id);
                setForm({...form, decoracoes: newDocoration});
            },
            // Service Methods
            setService: (serviceSet) => setForm({...form, servicos: serviceSet}),
            addService: (id) => {
                let newService = new Set(form.servicos);
                newService.add(id);
                setForm({...form, servicos: newService});
            },
            deleteService: (id) => {
                let newService = new Set(form.servicos);
                newService.delete(id);
                setForm({...form, servicos: newService});
            },
            resetFormValues: () =>  setForm(intialFormValue)
        }}>
            {props.children}
        </AgendaBanhoContext.Provider>
    )
}

export {Context}