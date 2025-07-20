run:
	npx nx run @object-lab/demo-api:serve 

test:
	nx run @object-lab/demo-api:test

create-app:
	npx nx g @nx/nest:app packages/${appname}