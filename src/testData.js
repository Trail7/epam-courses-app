export const mockedState = {
	coursesReducer: [
		{
			title: 'title',
			description: 'description',
			creationDate: '9/3/2021',
			duration: 30,
			authors: [
				'9b87e8b8-6ba5-40fc-a439-c4e30a373d36',
				'1c972c52-3198-4098-b6f7-799b45903199',
			],
			id: '66cc289e-6de9-49b2-9ca7-8b4f409d6467',
		},
		{
			title: 'test-title',
			description: 'test-description',
			duration: 123,
			authors: [
				'9b87e8b8-6ba5-40fc-a439-c4e30a373d36',
				'072fe3fc-e751-4745-9af5-aa9eed0ea9ed',
			],
			creationDate: '26/07/2022',
			id: '264d20c6-f257-426d-a680-13afef1b0393',
		},
	],
	authorsReducer: [
		{
			name: 'author',
			id: '9b87e8b8-6ba5-40fc-a439-c4e30a373d36',
		},
		{
			name: 'author2',
			id: '1c972c52-3198-4098-b6f7-799b45903199',
		},
		{
			name: 'author3',
			id: '072fe3fc-e751-4745-9af5-aa9eed0ea9ed',
		},
		{
			name: 'author4',
			id: '40b21bd5-cbae-4f33-b154-0252b1ae03a9',
		},
		{
			name: 'author5',
			id: '5e0b0f18-32c9-4933-b142-50459b47f09e',
		},
		{
			name: 'author6',
			id: '9987de6a-b475-484a-b885-622b8fb88bda',
		},
	],
	userReducer: {
		isAuth: true,
		name: 'Test Name',
		email: 'admin@email.com',
		token:
			'Bearer GolEfjlty0Y5qBBEmhXDIo70nnFpKewAT+JsfeC307rpc38mqLV/8SssB9HkqFFeP+z+1i4HxLCo69ReK54qr5d4mfiNmniEWPjLkzsCkN8usol8r5sbrimQUp8DrKIzsmcEiijhF//nsEZJcSnjJ1AIMwyPVlSmip+KkIBVlB4aPm0CXyrv3PpL7zu/V36OFS/VrX0JD80CX8K45tkWTlv+ElrQ8elnQLyqvnN6fI4jnEi4m8cQrTmS8ey2lkMdgwr2GT8aTS/6E6mZMxuGURlOlI1k1rqe4Tl4qg1vjmL7zW2KhjuBtj88658AhSWJLW/BXCgopUDojhjhyTIe1g==',
		role: 'admin',
	},
};
