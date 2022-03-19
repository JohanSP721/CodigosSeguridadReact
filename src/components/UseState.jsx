import React, { useEffect, useState } from 'react';

const SECURITY_CODE = 'Paradigma';

export const UseState = ({ name }) =>
{
	const [state, setState] = useState({
		value: '',
		loading: false,
		error: false,
		deleted: false,
		confirmed: false
	});

	const onWrite = (target) =>
	{
		setState({...state, loading:false, value:target.value});
	};

	const onCheck = () =>
	{
		setState({...state, loading:true, error:false});
	};

	const onDelete = () =>
	{
		setState({...state, confirmed:false, deleted:true});
	};

	const onReset = () =>
	{
		setState({...state, confirmed:false, deleted:false});
	};

	useEffect(() =>
	{
		console.log("Empezando el efecto");

		const onConfirm = () =>
		{
			setState({...state, confirmed: true, value:'', loading:false});
		};

		const onError = () =>
		{
			setState({...state, loading:false, error: true, value:''});
		};

		if(state.loading)
		{
			setTimeout(() =>
			{
				console.log("Haciendo la validación");

				if(state.value === SECURITY_CODE)
				{
					onConfirm();
				}

				else
				{
					onError();
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
				<input value={state.value} onChange={({target}) => onWrite(target)} type="text" placeholder="código de seguridad"/>
				<button type="button" onClick={() => onCheck()}>Comprobar</button>
			</section>
		)
	}

	else if(state.confirmed && !state.deleted)
	{
		return (
			<section>
				<h2>Eliminar {name}</h2>
				<p>Pedimos Confirmación</p>
				<button type="button" onClick={() => onDelete()}>Si, Eliminar</button>
				<button type="button" onClick={() => onReset()}>No, Me Arrepentí</button>
			</section>
		)
	}

	else
	{
		return (
				<section>
					<h2>{name} Eliminado con Éxito</h2>
					<button type="button" onClick={() => onReset()}>Restear</button>
				</section>
		)
	}
};
