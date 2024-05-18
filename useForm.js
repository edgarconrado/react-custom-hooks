import { useState } from "react";

export const useForm = ( ininitalForm = {} ) => {

    const [ formState, setFormState ] = useState( ininitalForm );

    const onInputChange = ( { target } ) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value,
        })
    }

    const onResetForm = () => {
        setFormState( ininitalForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}