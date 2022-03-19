import React, { useEffect, useReducer } from 'react';

import { reducer } from '../reducers';
import { onCheck, onConfirm, onDelete, onError, onReset, onWrite } from '../actions';

const SECURITY_CODE = 'Paradigma';

export const UseReducer = ({ name }) =>
{
	const initialState = {
		value: '',
		loading: false,
		error: false,
		deleted: false,
		confirmed: false
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() =>
	{
		console.log("Empezando el efecto");

		if(state.loading)
		{
			setTimeout(() =>
			{
				console.log("Haciendo la validación");

				if(state.value === SECURITY_CODE)
				{
					dispatch(onConfirm());
				}

				else
				{
					dispatch(onError());
				}

				console.log("Terminando la validación");
			}, 3000);
		}

		console.log("Terminando el efecto");
	}, [state]);


	if(!state.deleted && !state.confirmed)
	{
		return (
			<section>
				<h2>Eliminar {name}</h2>
				<p>Por favor, escribe el código de seguridad</p>
				{
					state.error && !state.loading &&
						<p>Error: el código es incorrecto</p>
				}
				{
					state.loading &&
						<p>Cargando...</p>
				}
				<input value={state.value} onChange={({target}) => dispatch(onWrite(target.value))} type="text" placeholder="código de seguridad"/>
				<button type="button" onClick={() => dispatch(onCheck())}>Comprobar</button>
			</section>
		)
	}

	else if(state.confirmed && !state.deleted)
	{
		return (
			<section>
				<h2>Eliminar {name}</h2>
				<p>Pedimos Confirmación</p>
				<button type="button" onClick={() => dispatch(onDelete())}>Si, Eliminar</button>
				<button type="button" onClick={() => dispatch(onReset())}>No, Me Arrepentí</button>
			</section>
		)
	}

	else
	{
		return (
				<section>
					<h2>{name} Eliminado con Éxito</h2>
					<button type="button" onClick={() => dispatch(onReset())}>Restear</button>
				</section>
		)
	}
};
