serve:
	npx nx run @object-lab/demo-api:serve 

run:
	npx nx run @object-lab/viewer:dev 

test:
	nx run @object-lab/demo-api:test

create-app:
	npx nx g @nx/nest:app packages/${appname}

generate-api-client:
	npx orval --config packages/api-client/orval.config.ts

generate-swagger:
	npx nx run @object-lab/demo-api:generate-openapi