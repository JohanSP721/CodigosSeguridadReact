import React, { Component } from 'react';

const SECURITY_CODE = 'Paradigma';

export class ClassState extends Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			error: false,
			loading: false,
			value: ''
		}
	}

	componentDidUpdate()
	{
		if(this.state.loading)
		{
			setTimeout(() =>
			{
				console.log("Haciendo la validación");

				if(this.state.value !== SECURITY_CODE)
				{
					this.setState({ error: true });
				}

				this.setState({ loading: false });

				console.log("Terminando la validación");
			}, 3000);
		}
	}

	render()
	{
		const { name } = this.props;

		const { error, loading, value } = this.state;

		return (
			<section>
				<h2>Eliminar {name}</h2>
				<p>Por favor, escribe el código de seguridad</p>
				{
					error && !loading &&
						<p>Error: el código es incorrecto</p>
				}

				{
					loading &&
						<p>Cargando...</p>
				}
				<input value={value} onChange={({target}) => this.setState({value:target.value})} type="text" placeholder="código de seguridad"/>
				<button onClick={() => this.setState({ loading: true, error: false })} type="button">Comprobar</button>
			</section>
		)
	}
}
