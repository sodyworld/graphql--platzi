module.exports = `
	# Esto es un cruso en el sistema
	type Curso {
		id: ID!
		titulo: String!
		## Esta es la descripcion del curso
		descripcion: String!
		profesor: Profesor
		rating: Float
		comentarios: [Comentario]
	}

	type Comentario {
		id: ID!
		nombre: String!
		cuerpo: String!
	}

	input NuevoCurso {
		titulo: String!
		descripcion	: String!
		rating: Float!
	}

	input CursoEditable {
		titulo: String
		descripcion	: String
		rating	: Float
	}
`